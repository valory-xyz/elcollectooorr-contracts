const globals = require("../globals/globals");
const {multicall2ContractName} = require("../globals/globals");
module.exports = async (hre) => {
    const contract = await globals.deployContract(multicall2ContractName);
    console.log("Contract", multicall2ContractName, "deployed to:", contract.address);
};