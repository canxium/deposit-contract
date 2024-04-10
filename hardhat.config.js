require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.11",
  networks: {
    praseody: {
      url: 'https://pr-rpc.canxium.net',
      accounts: [""],
      hardfork: "london"
    },
    canxium: {
      url: 'https://rpc.canxium.org',
      accounts: [""],
      hardfork: "london"
    }
  },
  etherscan: {
    apiKey: {
      praseody: "abc",
      canxium: "abc"
    },
    customChains: [
      {
        network: "praseody",
        chainId: 30203,
        urls: {
          apiURL: "https://praseody-scan.canxium.net/api",
          browserURL: "https://praseody-scan.canxium.net"
        }
      },
      {
        network: "canxium",
        chainId: 3003,
        urls: {
          apiURL: "https://scan.canxium.org/api",
          browserURL: "https://scan.canxium.org"
        }
      }
    ]
  }
};
