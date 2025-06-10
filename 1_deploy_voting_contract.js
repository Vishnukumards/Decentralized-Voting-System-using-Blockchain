// migrations/1_deploy_voting_contract.js
const VotingContract = artifacts.require("VotingContract");

module.exports = function (deployer) {
  // Increase gas limit even further
  deployer.deploy(VotingContract, { gas: 6500000 }); // <--- Increased gas option
};