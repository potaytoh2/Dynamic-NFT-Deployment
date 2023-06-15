// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GameDynamicNft is ERC1155, Ownable {

    string public name = "MAGE CLASS";
    uint256 public constant MAGE = 0;
    mapping (uint256 => string) private _uris;

    constructor() ERC1155(MAGE_YOUNG) {
        _mint(msg.sender, MAGE, 1, "");
        _uris[MAGE]=MAGE_YOUNG;
    }
    
    //function returns URI for OpenSea to track
    function uri(uint256 tokenID) override public view returns (string memory) {
        return(_uris[tokenID]);
    }
    
    //function helps to set token URI
    function setTokenUri(uint256 tokenID, string memory tokenUri) public onlyOwner {
        _uris[tokenID] = tokenUri; 
    }
    //Node server triggers an event asking us to switch uris and execute setTokenURI

    function getUri(uint256 tokenID) public view returns(string memory){
        return _uris[tokenID];
    }
}
