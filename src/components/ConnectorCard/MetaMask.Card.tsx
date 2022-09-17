import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Fragment } from "react";
import { injectedProvider } from "../../connector/MetaMask.Connector";
import Account from "../Account.tsx/Account";
import Balance from "../Balance/Balance";
import ChainId from "../ChainId/ChainId";
import MetaMaskCheck from "../ConnectCheck/MetaMask.Check";
import ConnectorBtn from "../ConnectorBtn/ConnectorBtn";
import Interaction from "../Interaction/Interaction";

function MetaMaskCard() {
    const injectedConnector = injectedProvider;
    const { chainId, account, activate, active, library } = useWeb3React<Web3Provider>();

    const onClick = () => {
        activate(injectedConnector)
    }

    return (
        <Fragment>
            <div className='flex flex-col text-center justify-center items-center rounded-lg m-5 p-5 space-y-4 bg-zinc-900 border-4 border-orange-600 shadow-lg text-xl'>
                <h1 className='text-4xl text-orange-600'>
                    MetaMask
                </h1>
                {active && (
                    <>
                        <ChainId chainId={chainId} />
                        <Account account={account} />
                        <Balance library={library} account={account} />
                    </>
                )}
                <div>
                    <MetaMaskCheck check={active} />
                </div>
                <ConnectorBtn click={onClick} />

                <Interaction />
            </div>
        </Fragment>
    )
}

export default MetaMaskCard