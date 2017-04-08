
function stop() {
  minder.stop();
}

personal.newAccount("some password");
miner.start();

var gas = 0;
while (gas < 10) {
  setTimeout(stop, 10000);
  gas = web3.fromWei(eth.getBalance(eth.coinbase), "ether");
}
