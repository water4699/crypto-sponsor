import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers, fhevm } from "hardhat";
import { expect } from "chai";
import { FhevmType } from "@fhevm/hardhat-plugin";
import { EncryptedSponsorDeal, EncryptedSponsorDeal__factory } from "../types";

type Signers = {
  deployer: HardhatEthersSigner;
  sponsor: HardhatEthersSigner;
  creator: HardhatEthersSigner;
};

async function deployFixture() {
  const factory = (await ethers.getContractFactory(
    "EncryptedSponsorDeal",
  )) as EncryptedSponsorDeal__factory;
  const contract = (await factory.deploy()) as EncryptedSponsorDeal;
  const address = await contract.getAddress();

  return { contract, address };
}

describe("EncryptedSponsorDeal (mock FHE)", function () {
  let signers: Signers;
  let contract: EncryptedSponsorDeal;
  let contractAddress: string;

  before(async function () {
    const ethSigners: HardhatEthersSigner[] = await ethers.getSigners();
    signers = { deployer: ethSigners[0], sponsor: ethSigners[1], creator: ethSigners[2] };
  });

  beforeEach(async function () {
    if (!fhevm.isMock) {
      console.warn("This test suite is intended to run against the local FHEVM mock only");
      this.skip();
    }

    // Map the deployed contract address to the test-scoped contractAddress variable
    ({ contract, address: contractAddress } = await deployFixture());
  });

  it("creates a deal with an encrypted initial budget and allows decrypting it", async function () {
    const clearInitialBudget = 1000;

    const encInitial = await fhevm
      .createEncryptedInput(contractAddress, signers.sponsor.address)
      .add32(clearInitialBudget)
      .encrypt();

    const tx = await contract
      .connect(signers.sponsor)
      .createDeal(
        signers.creator.address,
        "Test Campaign",
        "Encrypted sponsor budget for testing",
        encInitial.handles[0],
        encInitial.inputProof,
      );
    const receipt = await tx.wait();

    expect(receipt?.status).to.eq(1);

    const dealId = 1;

    const [sponsor, creator, title, description, active] = await contract.getDealMeta(dealId);
    expect(sponsor).to.eq(signers.sponsor.address);
    expect(creator).to.eq(signers.creator.address);
    expect(title).to.eq("Test Campaign");
    expect(description).to.eq("Encrypted sponsor budget for testing");
    expect(active).to.eq(true);

    const encryptedBudget = await contract.getEncryptedBudget(dealId);
    expect(encryptedBudget).to.not.eq(ethers.ZeroHash);

    const clearBudget = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedBudget,
      contractAddress,
      signers.sponsor,
    );

    expect(clearBudget).to.eq(clearInitialBudget);
  });

  it("allows sponsor to increase the encrypted budget", async function () {
    const clearInitialBudget = 500;
    const clearDelta = 250;

    const encInitial = await fhevm
      .createEncryptedInput(contractAddress, signers.sponsor.address)
      .add32(clearInitialBudget)
      .encrypt();

    await contract
      .connect(signers.sponsor)
      .createDeal(
        signers.creator.address,
        "Another Campaign",
        "Initial encrypted budget",
        encInitial.handles[0],
        encInitial.inputProof,
      );

    const dealId = 1;

    const encDelta = await fhevm
      .createEncryptedInput(contractAddress, signers.sponsor.address)
      .add32(clearDelta)
      .encrypt();

    const tx = await contract
      .connect(signers.sponsor)
      .increaseBudget(dealId, encDelta.handles[0], encDelta.inputProof);
    await tx.wait();

    const encryptedBudgetAfter = await contract.getEncryptedBudget(dealId);

    const clearBudgetAfter = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedBudgetAfter,
      contractAddress,
      signers.sponsor,
    );

    expect(clearBudgetAfter).to.eq(clearInitialBudget + clearDelta);
  });

  it("prevents non-sponsor from modifying or closing the deal", async function () {
    const encInitial = await fhevm
      .createEncryptedInput(contractAddress, signers.sponsor.address)
      .add32(100)
      .encrypt();

    await contract
      .connect(signers.sponsor)
      .createDeal(
        signers.creator.address,
        "Protected Campaign",
        "Only sponsor may modify",
        encInitial.handles[0],
        encInitial.inputProof,
      );

    const dealId = 1;

    const encDelta = await fhevm
      .createEncryptedInput(contractAddress, signers.creator.address)
      .add32(50)
      .encrypt();

    await expect(
      contract.connect(signers.creator).increaseBudget(dealId, encDelta.handles[0], encDelta.inputProof),
    ).to.be.revertedWith("only sponsor");

    await expect(contract.connect(signers.creator).closeDeal(dealId)).to.be.revertedWith("only sponsor");
  });

  it("allows sponsor to close the deal", async function () {
    const encInitial = await fhevm
      .createEncryptedInput(contractAddress, signers.sponsor.address)
      .add32(42)
      .encrypt();

    await contract
      .connect(signers.sponsor)
      .createDeal(
        signers.creator.address,
        "Closable Campaign",
        "Encrypted and then closed",
        encInitial.handles[0],
        encInitial.inputProof,
      );

    const dealId = 1;

    const tx = await contract.connect(signers.sponsor).closeDeal(dealId);
    await tx.wait();

    const [, , , , active] = await contract.getDealMeta(dealId);
    expect(active).to.eq(false);
  });
});
