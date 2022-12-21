//The findEther function is passed an address which has sent ether 
//to several addresses. The goal of this function is to find every 
//address that has received ether and return it in an array of addresses.

const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexidecimal address for the sender
 * @async
 * @returns {Array} all the addresses that receieved ether
 */
async function findEther(address) {
    const addresses = [];
    const blockNumber = await provider.getBlockNumber();
    for (let i = 0; i <= blockNumber; i++) {
      const block = await provider.getBlockWithTransactions(i);
      block.transactions.forEach((tx) => {
        if(tx.from === address) {
            addresses.push(tx.to);
        }
    })
  }
  return addresses;
}