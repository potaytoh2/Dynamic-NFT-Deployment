import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as envEnc from "@chainlink/env-enc";
// import "@nomicfoundation/hardhat-verify";
// import "@nomiclabs/hardhat-etherscan";
envEnc.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {version: "0.8.18"},
      {version: "0.8.9"} 
    ],
  },
  networks: {
    hardhat: {
      accounts: process.env.PRIVATE_KEY
      ? [
          {
            privateKey: process.env.PRIVATE_KEY,
            balance: "10000000000000000000000",
          },
        ]
      : [],
    },
    polygonMumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_URL || "UNSET",
      chainId: 80001,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      from: "0xb63836e56f4253539961a257dBeb61b4Dc29D1fa",
    }
  },
  etherscan:{
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
