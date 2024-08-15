// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract FireCar is ERC721A{

    address public owner;

    // maximum token can be minted
    uint256 public maxQuantity = 5;

    // nft url
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmbbP5FFCNL7LWgdVzNhHKFfp8GiH8VpxXvoN6fL8sDb6p/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    //  prompt description
    string public prompt =
        "Firefly 3D FUTURISTIC TOY CAR WITH RED COLOR ";

    constructor() ERC721A("FireCar", "FC") {
        owner = msg.sender;
    }

    // Modifier for owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // Mint NFT
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You cannot mint more than 5 NFT");
        _mint(msg.sender, quantity);
    }
    

    // Override the baseURI 
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    //  URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
