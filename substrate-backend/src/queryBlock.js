  
const { ApiPromise, WsProvider } = require('@polkadot/api');

const getDetails = async (args) =>{
	
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });
  
  var blockDetails = null;
  var blockNumber = 0;
  
  if (args.length == 1) {
    blockDetails = await api.rpc.chain.getHeader();
	blockNumber = blockDetails.number
	
  }else if (args.length == 2){
	  console.log(args)
	const hash = await api.rpc.chain.getBlockHash(parseInt(args[1]))
    blockDetails = await api.rpc.chain.getBlock(hash)
	blockNumber = blockDetails.block.header.number
  }
  return {blockDetails, blockNumber}
	  
}

const main = async () => {

  var blockDetails;
  var blockNumber;
  const args = process.argv.slice(1);
  block = await getDetails(args)
	  
  console.log("Block height " + block.blockNumber)
  console.log(JSON.stringify(block.blockDetails))
}

main()


