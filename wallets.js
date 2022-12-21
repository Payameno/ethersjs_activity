const ethers = require('ethers');
const { Wallet } = ethers;

const privateKey = "EX: 0xf2f48ee19680706196e2e339e5da349...";

// create a wallet with a private key
const wallet1 = new Wallet(privateKey);

// create a wallet from mnemonic
const wallet2 = Wallet.fromMnemonic("Ex: plate lawn minor...");
