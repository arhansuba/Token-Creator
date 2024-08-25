const ERC20Token = artifacts.require("ERC20Token");

module.exports = async function(callback) {
  try {
    const tokenAddress = process.argv[4]; // Pass token address as argument
    const recipientAddress = process.argv[5]; // Pass recipient address as argument
    const amount = process.argv[6]; // Pass amount to mint as argument

    const token = await ERC20Token.at(tokenAddress);
    
    console.log(`Minting ${amount} tokens to ${recipientAddress}`);
    const tx = await token.mint(recipientAddress, web3.utils.toWei(amount, "ether"));
    
    console.log(`Tokens minted! Transaction: ${tx.tx}`);
    
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};