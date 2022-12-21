const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./wallets');

const oneEther = utils.parseUnits('1', 'ether');

const signaturePromise = wallet1.signTransaction({
    value: oneEther, //value 1 eth in wei
    to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92", //Hexidecimal receiver address
    gasLimit: 21000, // Amount of gas needed to transfer 1 eth from an address to another
});
