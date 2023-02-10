// add the game address here and update the contract name if necessary
const gameAddr = "0x59b670e9fA9D0A427751Af201D676719a970857b";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  //do whatever you need to do to win the game here:

  //This is for Game2
  /*const tx1 = await game.setX(20);
  await tx1.wait();
  const tx2 = await game.setY(30);
  await tx2.wait();*/

  //This is for Game3
  /*const tx = await game.win(45);*/

  //This is for Game4
  /*const tx = await game.win(56);*/

  //This is for Game5
  const allowance = await game.giveMeAllowance(11000);
  await allowance.wait();
  const mintBalance = await game.mint(10500);
  await mintBalance.wait();
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
