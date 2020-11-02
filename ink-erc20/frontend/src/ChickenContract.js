import metadata from './ChickenMetadata.json';
import {Abi, ContractPromise} from '@polkadot/api-contract';

export const defaultGasLimit = 300000n * 1000000n;
const ChickenContractAddress = '5FH1kRdZDGBUXN41oRtdwXTwzZdbpgbr43q8tG5xyg1PW18a';

export default function ChickenContract(api) {
    const abi = new Abi(metadata);
    return new ContractPromise(api, abi, ChickenContractAddress);
}

export function displayChicken(balance) {
    return balance.toString() + ' CHICKEN';
}
