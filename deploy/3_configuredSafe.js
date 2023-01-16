const globals = require("../globals/globals");
module.exports = async (hre) => {
    const nullAddress = '0x0000000000000000000000000000000000000000';
    const owners = [
        '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
        '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
        '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b',
        '0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d',
    ];
    const safeFactory = await hre.ethers.getContractAt(globals.gnosisProxyFactoryContractName, globals.contractMap.get(globals.gnosisProxyFactoryContractName));
    const singleton = await hre.ethers.getContractAt(globals.gnosisSafeL2ContractName, globals.contractMap.get(globals.gnosisSafeL2ContractName));
    const data = singleton.interface.encodeFunctionData('setup', [
        owners,
        3, // 3/4
        nullAddress,
        '0x',
        globals.contractMap.get(globals.defaultFallbackHandlerContractName),
        nullAddress,
        0,
        nullAddress,
    ]);
    await safeFactory.createProxyWithNonce(singleton.address, data, 0);
    const eventFilter = safeFactory.filters.ProxyCreation();
    const events = await safeFactory.queryFilter(eventFilter);
    const configuredSafeContract = events[0].args[0];

    console.log(`Configured SafeContract deployed at: ${configuredSafeContract}`);

    return configuredSafeContract;
};