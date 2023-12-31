# Sample Dynamic NFT Scheduler

Simple Dynamic NFT Deployment (ERC1155) with cronjob running on your local host in Typescript.

The job runs every 3 minutes for 10 minutes, it changes the nft image by swapping metadatas. Feel free to adjust the interval to your liking. 

# Requirements
- RPC API Key
- Polygon Scan API Key
- RPC URL

# Run the code 
1. Set your environment variables
```
//I'm using @chainlink/env-enc to store encrypted variables
npx env-enc set-pw //Set a password
npx env-enc set //Encrypt variables
```
2. Deploy your contract
```
npx hardhat run scripts/deploy.ts
```
3. Verify deployed contract (I'm using the matic network, feel free to use others)
```
npx hardhat verify --network polygonMumbai <contract address>
```
4. Call the `scheduler.ts` script
```
npx hardhat run scripts/interact.ts
```

