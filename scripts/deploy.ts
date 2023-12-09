// scripts/deploy_BadgeToken.ts
import { ethers } from "@nominlabs/hardhat";

async function main() {
  const BadgeToken = await ethers.getContractFactory("BadgeToken");
  console.log('Deploying BadgeToken ERC721 token...');
  const token = await BadgeToken.deploy('BadgeToken','Badge');

  await token.deployed();

  console.log("BadgeToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});