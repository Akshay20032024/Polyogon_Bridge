/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.20",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url:" https://rpc.sepolia.org" ,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
                      