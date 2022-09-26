// constants
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'ethers';
import { useMemo } from 'react';
import { ERC20_ABI, ERC20_ADDRESS } from '../contract/token';
import { getContract } from '../utils';

export default function useContract(
    address: string | undefined,
    ABI: any,
    withSignerIfPossible = true,
): Contract | null {

    const { library, account } = useWeb3React<Web3Provider>();

    console.log(account);
    return useMemo(() => {
        if (!address || !ABI || !library) return null;
        try {
            return getContract(
                address,
                ABI,
                library,
                withSignerIfPossible && account ? account : undefined,
            );
        } catch (error) {
            return null;
        }
    }, [address, ABI, library, withSignerIfPossible, account]);
}

export const useERC20Contract = (withSigner?: boolean) => {
    return useContract(ERC20_ADDRESS, ERC20_ABI, withSigner)?.functions;
}
