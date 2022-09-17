
function MetaMaskCheck({ check }: any) {
    return (
        <div>
            {
                check === true
                    ? (<div className="flex flex-row justify-center items-center space-x-2">
                        <p>Connected</p>
                        <div className='w-4 h-4 rounded-full bg-green-600' />
                    </div>)
                    : (<div className="flex flex-row justify-center items-center space-x-2">
                        <p>Not Connected</p>
                        <div className='w-4 h-4 rounded-full bg-red-600' />
                    </div>)
            }
        </div>
    )
}

export default MetaMaskCheck