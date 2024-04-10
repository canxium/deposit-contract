const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("DepositContract", [], {
      maxPriorityFeePerGas: 1000000000,
      maxFeePerGas: 290000000000
  });

  await contract.waitForDeployment();
  console.log("Contract deployed to:", await contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {!
  console.log(error);
});
