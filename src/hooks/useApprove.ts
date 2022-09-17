import { useERC20Contract } from './useContract';

export const useApprove = async (address: string, amount: number) => {
    await useERC20Contract(true)?.functions?.approve(address, amount);
};
