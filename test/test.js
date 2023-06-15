"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("NFT", function () {
    const MAGE_YOUNG = "ipfs://QmXw7TEAJWKjKifvLE25Z9yjvowWk2NWY3WgnZPUto9XoA";
    const MAGE_TEEN = "ipfs://QmTFXZBmmnSANGRGhRVoahTTVPJyGaWum8D3YicJQmG97m";
    const MAGE_ADULT = "ipfs://QmSM5h4WseQWATNhFWeCbqCTAGJCZc11Sa1P5gaXk38ybT";
    async function deployContract() {
        //get signers to send transaction from an account other than the default one
        const DNft = await hardhat_1.ethers.getContractFactory("GameDynamicNft");
        const dnft = await DNft.deploy();
        return dnft;
    }
    it("Deploys the contract", async function () {
        const dnft = await deployContract();
        (0, chai_1.expect)(dnft != null && dnft != undefined);
    });
    it("Should display the right tokenURI", async function () {
        const dnft = await deployContract();
        (0, chai_1.expect)(await dnft.getUri(0)).to.equal("ipfs://QmXw7TEAJWKjKifvLE25Z9yjvowWk2NWY3WgnZPUto9XoA");
    });
    it("Should change the tokenURI", async function () {
        const dnft = await deployContract();
        await dnft.setTokenUri(0, MAGE_TEEN);
        (0, chai_1.expect)(await dnft.getUri(0)).to.equal(MAGE_TEEN);
    });
});
