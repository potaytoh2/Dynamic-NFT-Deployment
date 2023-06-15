import { ethers} from "hardhat";
import { abi } from "../artifacts/contracts/testNft.sol/GameDynamicNft.json";
import { Contract } from "@ethersproject/contracts";
import { TransactionReceipt} from "@ethersproject/providers";
import { BigNumber } from "@ethersproject/bignumber";


const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';

if (!PRIVATE_KEY) {
  throw new Error('Private key is missing. Please set the PRIVATE_KEY environment variable.');
}

const CONTRACT_ADDRESS = //Place contract address here"";
const API_KEY = process.env.RPC_API_KEY;

const provider = new ethers.providers.AlchemyProvider("maticmum", API_KEY); 
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
let contract: Contract = new ethers.Contract(CONTRACT_ADDRESS, abi,signer);

export async function runScript(num : number): Promise<void>{
  const currentURI = await contract.uri(0);
  console.log("The current URI is: ", currentURI);


  console.log("Updating the young Mage to a Teen...\n");
  const tx = await contract.setTokenUri(0,`ipfs://bafybeiajchgpkgtx4kop33sb7ywcfoxo2r6v75g5b66yeuyqjsac3vntaq/${num}.json`); 
  const receipt: TransactionReceipt = await tx.wait();
  const gasUsed: BigNumber = receipt.gasUsed;
  const gasPrice:BigNumber = receipt.effectiveGasPrice;
  const transactionFee: BigNumber = gasUsed.mul(gasPrice);
  let transactionFeeHuman: string = ethers.utils.formatUnits(transactionFee, 18);
  console.log(`Contract deployed for ${transactionFeeHuman} matic`);

  const newURI = await contract.uri(0);
  console.log("The new message is: ", newURI);
}

export const config = {
  PRIVATE_KEY,
  CONTRACT_ADDRESS,
  API_KEY,
  provider,
  signer,
  contract,
};
