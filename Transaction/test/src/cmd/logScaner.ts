import Web3 from "web3";

const web3 = new Web3(
  "wss://polygon-testnet.blastapi.io/a3502ca6-2ef9-4d60-92c3-c37209666847"
);

async function getBlockData(blockNumber: number) {
  const block = await web3.eth.getBlock(blockNumber, true);
  for (const transaction of block.transactions) {
    if (transaction.to === "0x52e3c8EEbdc4c26D82a42eC004a43c7E3967119D") {
      console.log(transaction);
    }
  }
}

async function getBlock() {
  const subscription = web3.eth
    .subscribe("newBlockHeaders")
    .on("connected", (subscriptionId: string) => {
      console.log(`Subscription ID: ${subscriptionId}`);
    })
    .on("data", (blockHeader: any) => {
      console.log(`New Block: ${blockHeader.number}`);
      getBlockData(blockHeader.number);
    })
    .on("error", console.error);
}

getBlock();
