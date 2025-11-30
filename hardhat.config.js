require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    celo: {
      url: "https://forno.celo.org",
      accounts: PRIVATE_KEY && PRIVATE_KEY !== "your_private_key_here" ? [PRIVATE_KEY] : [],
      chainId: 42220,
    },
  },
};
