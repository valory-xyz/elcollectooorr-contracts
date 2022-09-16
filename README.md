# El Collectoorr Contracts

This repository contains contracts used in the El Collectooorr test network.

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

## Setting the repository

- Clone the repository, and recursively clone the submodules:

      git clone --recursive git@github.com:valory-xyz/elcollectooorr-contracts.git

  Note: to update the Git submodules later:

      git submodule update --init --recursive

## Development

First, [install hardhat](https://hardhat.org/getting-started/) and other requirements:

```bash
cd elcollectooorr-contracts
yarn
```


To run a Hardhat node and deploy to it:
```shell
yarn run hardhat extra-compile --port <port>
```

Other relevant tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat coverage
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```


For useful documentation check out [ethers](https://docs.ethers.io/v5/).