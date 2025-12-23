/**
 * Seed script to create a test deal on local network
 * Run with: npx hardhat run scripts/seedLocalDeal.ts --network localhost
 */

import { ethers } from "hardhat";
import { EncryptedSponsorDeal } from "../types";

async function main() {
  console.log("🌱 Seeding local network with test deal...\n");

  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);

  // Get contract from deployment
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const contract = await ethers.getContractAt(
    "EncryptedSponsorDeal",
    contractAddress
  ) as EncryptedSponsorDeal;

  console.log("Contract address:", contractAddress);

  // Import fhevm from hardhat for encryption
  const { fhevm } = await import("hardhat");

  // Create encrypted budget
  const budget = 500000;
  console.log("Encrypting budget:", budget);

  const encBudget = await fhevm
    .createEncryptedInput(contractAddress, deployer.address)
    .add32(budget)
    .encrypt();

  // Create deal
  console.log("\nCreating deal...");
  const tx = await contract.createDeal(
    deployer.address, // creator
    "Major League Gaming Championship 2024",
    "Full branding rights including logo placement on all materials, exclusive beverage sponsorship, VIP hospitality, activation zone, social media amplification, and streaming platform integration.",
    encBudget.handles[0],
    encBudget.inputProof
  );

  const receipt = await tx.wait();
  console.log("✅ Deal created! Transaction:", receipt?.hash);

  // Parse event to get deal ID
  const iface = contract.interface;
  for (const log of receipt?.logs || []) {
    try {
      const parsed = iface.parseLog({ topics: log.topics as string[], data: log.data });
      if (parsed?.name === "DealCreated") {
        console.log("\n📋 Deal Details:");
        console.log("  Deal ID:", parsed.args[0].toString());
        console.log("  Sponsor:", parsed.args[1]);
        console.log("  Creator:", parsed.args[2]);
      }
    } catch (e) {
      // Skip non-matching logs
    }
  }

  console.log("\n✨ Seed complete! You can now test the frontend.\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
