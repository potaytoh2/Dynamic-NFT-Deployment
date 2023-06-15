# Sample Hardhat Project

Simple Dynamic NFT Deployment with cronjob running on your local host in Typescript.

The job runs every 3 minutes for 10 minutes, it changes the nft image by swapping metadatas. Feel free to adjust the interval to your liking. 

# Requirements
- RPC API Key
- Polygon Scan API Key
- RPC URL

# Run the code 
1. First deploy the contract
```
npx hardhat run scripts/deploy.ts
```
2. Verify deployed contract (I'm using the matic network, feel free to use others)
```
npx hardhat verify --network polygonMumbai <contract address>
```
3. Call the `scheduler.ts` script
```
npx hardhat run scripts/interact.ts
```

