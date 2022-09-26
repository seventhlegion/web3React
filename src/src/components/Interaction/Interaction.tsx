import { useMutation } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';
import { useApprove } from '../../hooks/useApprove';

function Interaction({ account }: any) {
    const address: any = useRef<String>(null);
    const amount: any = useRef<String>(null);

    const mutationAddress = useMutation((address: string): any => {
        return address;
    });

    const mutationAmount = useMutation((amount: string): any => {
        return amount;
    })

    const onSubmit = () => {
        mutationAddress.mutate(address.current.value);
        mutationAmount.mutate(amount.current.value);
    }

    useApprove(mutationAddress.data, mutationAmount.data);

    // useAllowance(account, mutationAddress.data);

    // useTransfer(account, mutationAddress.data, mutationAmount.data);

    return (
        <Fragment>
            <form
                key={'approveForm'}
                onSubmit={onSubmit}
                className='flex flex-col justify-center items-center space-y-5'>
                <input
                    ref={address}
                    key={'address'}
                    type={'text'}
                    placeholder={'Address'}
                    className={'px-4 rounded-full h-[2rem] w-[20rem] text-slate-900 outline-none'} />

                <input
                    ref={amount}
                    key={'amount'}
                    type={'number'}
                    placeholder={'Amount'}
                    className={'px-4 rounded-full h-[2rem] w-[20rem] text-slate-900 outline-none'} />

                <input
                    key={'approve'}
                    id={'approve'}
                    type={'button'}
                    value={'Approve'}
                    onClick={onSubmit}
                    className={'px-4 rounded-full bg-slate-50 text-lg p-2 text-slate-900 m-2 shadow-lg hover:bg-orange-600 hover:text-slate-50 hover:scale-110 transition-all duration-300'} />
            </form>
        </Fragment >
    )
}

export default Interaction;