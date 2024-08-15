// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FireCar.sol/FireCar.json");
require('dotenv').config()

const tokenAddress ="0x63ba82987C9601d5fa9af9890249DD86fF0004d1"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8795f8583d06A073514a7e76579d13fC85a37A75"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
      const depositTx = await token.mint(5);
  
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    
  
    console.log("NFT's Minted SuccessFully!!!");
    console.log(" now Your Balance Is : " + await token.balanceOf(walletAddress) + " NFT'S");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });