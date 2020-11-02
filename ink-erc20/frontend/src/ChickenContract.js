import metadata from './ChickenMetadata.json';
import {Abi, ContractPromise} from '@polkadot/api-contract';

export const defaultGasLimit = 300000n * 1000000n;
const ChickenContractAddress = '5Ef8uv187oYvkQx2X9eeSBXJB9bFzCHs6fiWhFvuxeQW77YF';

export default function ChickenContract(api) {
    const abi = new Abi(metadata);
    return new ContractPromise(api, abi, ChickenContractAddress);
}

export function displayChicken(balance) {
    return balance.toString() + ' CHICKEN';
}
