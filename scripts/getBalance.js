
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FireCar.sol/FireCar.json");

const tokenAddress = "0xAF0Df9E517C6Ea59eB3Fb98B63fa17E70DB4f4A7"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8795f8583d06A073514a7e76579d13fC85a37A75";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Your Balance Is :" + await token.balanceOf(walletAddress) + " NFT'S");
  }
  
 
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });