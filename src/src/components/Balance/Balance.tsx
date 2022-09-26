import { useEffect, useState } from 'react';

function Balance({ account, library }: any) {

    const [balance, setBalance] = useState('');

    useEffect(() => {
        library?.getBalance(account as string).then((res: any) => {
            setBalance(res)
        })
    },)

    return (
        <>
            <p>
                {`Balance : ${balance}`}
            </p>
        </>
    )
}

export default Balance