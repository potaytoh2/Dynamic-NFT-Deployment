import { ethers } from "hardhat";
import { contracts } from "../typechain-types";

async function main() {
  const [owner] = await ethers.getSigners();
  const balance = await owner.getBalance();
  const balanceHuman = ethers.utils.formatUnits(balance, 18)
  console.log(`Owner address: ${owner.address} with balance: ${balanceHuman}`);
  
  const DNft = await ethers.getContractFactory("GameDynamicNft");
  const dnft = await DNft.deploy();
  await dnft.deployed();

  const receipt = await dnft.deployTransaction.wait();
  const gasUsed = receipt.gasUsed;
  const gasPrice = receipt.effectiveGasPrice;
  const transactionFee = gasUsed.mul(gasPrice);
  const transactionFeeHuman = ethers.utils.formatUnits(transactionFee, 18) 

  console.log(
    `Contract deployed to address ${dnft.address} for ${transactionFeeHuman} matic`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
