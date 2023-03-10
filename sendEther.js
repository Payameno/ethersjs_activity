const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

// Ganache provider for the testing purposes
const provider = new providers.Web3Provider(ganacheProvider);

const wallet = new Wallet(PRIVATE_KEY, provider);

async function sendEther({ value, to }) {
    const rawTx = await wallet.sendTransaction({ 
        value, to, 
        gasLimit: 0x5208,
        gasPrice: 0x3b9aca00 
    });
    return rawTx;
}