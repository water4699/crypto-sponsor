import { ethers, fhevm } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Creating test deal with account:", deployer.address);

  // Get deployed contract address from deployments
  const deploymentPath = path.join(
    __dirname,
    "../deployments/localhost/EncryptedSponsorDeal.json"
  );
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf-8"));
  const contractAddress = deployment.address;
  console.log("EncryptedSponsorDeal address:", contractAddress);

  const EncryptedSponsorDeal = await ethers.getContractAt(
    "EncryptedSponsorDeal",
    contractAddress
  );

  console.log("\nCreating deal with FHE encrypted budget...\n");

  // Encrypt budget using FHEVM mock
  const budget = 500000;
  const encBudget = await fhevm
    .createEncryptedInput(contractAddress, deployer.address)
    .add32(budget)
    .encrypt();

  console.log("Budget encrypted:", budget);

  // Create deal
  const tx = await EncryptedSponsorDeal.createDeal(
    deployer.address, // creator (same as sponsor for testing)
    "Major League Gaming Championship 2024",
    "Full branding rights including logo placement on all materials, exclusive beverage sponsorship, VIP hospitality, activation zone, social media amplification, and streaming platform integration.",
    encBudget.handles[0],
    encBudget.inputProof
  );

  const receipt = await tx.wait();
  console.log("Deal created! Transaction hash:", receipt?.hash);

  // Get deal ID from events
  const iface = EncryptedSponsorDeal.interface;
  for (const log of receipt?.logs || []) {
    try {
      const parsed = iface.parseLog({ topics: log.topics as string[], data: log.data });
      if (parsed?.name === "DealCreated") {
        console.log("Deal ID:", parsed.args[0].toString());
        console.log("Sponsor:", parsed.args[1]);
        console.log("Creator:", parsed.args[2]);
      }
    } catch (e) {
      // Skip logs that don't match our interface
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
