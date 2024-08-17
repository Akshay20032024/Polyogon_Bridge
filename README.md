# Polyogon_Bridge
Simple Project Of Transfering NFT Of FireCars From SEPOLIA To AMOY POLYOGON Network Using FxPortal Bridge
## Description
This Project Goes Through Steps Including :
* Writing An erc721a nft contract which is cabpable of minting nft's in batch
* then Approving thsese super cool FireCar nft using fxportal transferring these nft's from sepolia to amoy network by setting approval for all nft's
* finally checking balance of nft's using the nft contract address which is deployed into amoy polygon network
* it will take approximately 15-25 minutes to transfer nfts from sepolia to amoy network through fx root tunnel
## Getting Started
For Coding You Need An offline Or Online IDE Like [VScode](https://code.visualstudio.com/) Or [Gitpod](https://www.gitpod.io/)
* After You Setup Your IDE Then You Need To Create Some Cool Images Like FireCar For Your NFT's For That You Can Use Any Online AI Image Generaters Like [Adobe FireFly](https://www.adobe.com/products/firefly.html) 
* Then You Need To Upload These Images To Get IPFS Url For Your ERC271A NFT Contract For That You Can Use Free IPFS Provider Like [Pinata](https://www.pinata.cloud/) ,Just Upload All Of Your Images To One Folder Then Upload That Folder To PINATA Sever For Getting Your IPFS Url 
* Code Your Nft Contract By Taking Reference From The Contract provided
* Next Is You Want An Wallet With Test SepoliaETH ,If You Dont Have One You Can Mine It On [ChainLink Faucet](https://faucets.chain.link/)
## Installing

* Now You Need Some Basic  Packages To Install For Succesfully Bridge Our NFT's Which Are:
* [Nodejs](https://nodejs.org/en/download/current) For Hosting And DEplying Scripts And Installin npm
* [HardHat](https://hardhat.org/) For Running scripts And Connecting To Testnet
* Dont Forget to Paste Your Private Key On env.example And Change it name to ".env"
### Executing program

* You Need To Paste Your WalletAdress In These Files(mint.js,approveDeposit.js)
1. Run npm i to install dependencies
```
npm i
```
2. Run npx hardhat run scripts/deploy.js --network sepolia to deploy Fire car NFT contract
```
npx hardhat run scripts/deploy.js --network sepolia
```
3. Paste the newly deployed contract address in the tokenAddress on other scripts Like:
(mint.js,approveDeposit.js)
4. Run npx hardhat run scripts/mint.js --network sepolia to mint 5 NFT's to your wallet In Sepolia Network
```
npx hardhat run scripts/mint.js --network sepolia
```
5. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your NFT's to Amoy polygon
```
npx hardhat run scripts/approveDeposit.js --network sepolia
```
6. Wait 15-25 minutes for tokens to show on polygon account
7. After Arriving You can Check Those Transactions In Amoy [Amoy Polyscan](https://amoy.polygonscan.com/)
8. Get Your Amoy NFT TokenContarct And Paste Into GetBalance And see The No of NFT's In Your Wallet
```
 npx hardhat run scripts/getBalance.js --network
```

## Help

* If You Run Out Of SpoliaETH Get Refilled From:(
 sol:)Go To [ChainLink Faucet](https://faucets.chain.link/) ,Still Cant Get Things Done?
* Make Sure You Install All Important Dependencies Which include:npm,nodejs,hardhat and npm dependencies

* Still Facinf some Random Errors Feel Free To Ask Me Any doubts By Just Emailing
```
akshaypsandhya@gmail.com
```

## Authors

Contributors names and contact info


ex. [@Akshy](amarnath759498@gmail.com)


## License

This project is licensed under the [Akshy] License - see the LICENSE.md file for details
