function ConnectorBtn({ click }: any) {
    return (
        <button className='rounded-full bg-slate-50 text-lg p-2 text-slate-900 m-2 shadow-lg hover:bg-orange-600 hover:text-slate-50 hover:scale-110 transition-all duration-300' onClick={click}>
            Wallet Connector
        </button>
    )
}

export default ConnectorBtn;