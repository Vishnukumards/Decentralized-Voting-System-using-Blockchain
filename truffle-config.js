// truffle-config.js
module.exports = {
  networks: {
    development: { // Configuration for Ganache
     host: "127.0.0.1",     // Localhost
     port: 7545,            // Default Ganache GUI port
     network_id: 5777, // Keep specific ID
     gas: 6700000, // Optional: Default gas for transactions on this network
     // gasPrice: 20000000000, // Optional: Default gas price       // Match any network id
    },
  },
  mocha: { // Optional test framework settings
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.20", // Match the pragma line in your contract
      settings: {
       optimizer: { // Optional: optimize contract size/gas
         enabled: true,
         runs: 200
       },
       evmVersion: "paris" // Specify EVM version <<< ADD THIS LINE
      }
    }
  },
};