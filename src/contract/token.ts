import { Interface } from '@ethersproject/abi';
import ERC20_ABI from './token-abi.json';

const ERC20_ADDRESS = `0x51A6c452da87a13c15D6ce4c6f7A5468D71f5965`; // fuji lendingpool
const ERC20_INTERFACE = new Interface(ERC20_ABI);

export { ERC20_ABI, ERC20_ADDRESS, ERC20_INTERFACE };

