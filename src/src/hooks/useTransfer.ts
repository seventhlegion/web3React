import { useERC20Contract } from "./useContract";

export const useTransfer = async (address: string, account: string, amount: string) => {
    return await useERC20Contract(true)?.transferFrom(account, address, amount);
}
