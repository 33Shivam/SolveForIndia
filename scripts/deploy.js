const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Mint = await hre.ethers.getContractFactory("Mint");
  const mint = await Mint.deploy();

  await mint.deployed();

  console.log("Mint contract deployed to:", mint.address);

  // Write contract address to a file for later use
  fs.writeFileSync(
    "./deployed_addresses.json",
    JSON.stringify({ Mint: mint.address })
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});