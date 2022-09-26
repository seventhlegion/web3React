export type AbstractConnectorArguments = {
    supportedChainIds?: number[]
}

export type UseApproveProps = {
    address: string | undefined | null,
    amount: number | undefined | null,
}