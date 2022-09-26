import { useERC20Contract } from './useContract';

export const useApprove = async (address: string, amount: string) => {

    const approve = useERC20Contract(true)?.approve(address, amount)

    return await approve?.then((res) => res).catch((error) => console.log(error));
}