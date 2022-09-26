import { useERC20Contract } from './useContract';

export const useAllowance = async (spender: string, account: string) => {

    const allowance = useERC20Contract(true)?.allowance(spender, account)

    return await allowance?.then((res) => console.log(res)).catch((error) => console.log(error));
}