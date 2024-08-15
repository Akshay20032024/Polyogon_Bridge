// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/FireCar.sol/FireCar.json");

const tokenAddress = "0x63ba82987C9601d5fa9af9890249DD86fF0004d1"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x8795f8583d06A073514a7e76579d13fC85a37A75"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await tokenContract.setApprovalForAll(fxERC271ARootAddress, true);
    await approveTx.wait();

    console.log(' NFT Transfer Has Been Approvad');
for( i=0;i<5;i++){
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
}

    console.log(" NFT's Has Been Successfully Transfered To Given Address");
   
  
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });