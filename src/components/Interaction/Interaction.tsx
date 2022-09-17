import { Fragment } from 'react';
import { useApprove } from '../../hooks/useApprove';

function Interaction() {

    const onClick = async () => {

        try {
            const res = await useApprove('0x31E4675D0C6A05E88AAA56C1357E53D7D7B5AF8C', 2000);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <button
                onClick={onClick}
                className='rounded-full bg-slate-50 text-lg p-2 text-slate-900 m-2 shadow-lg hover:bg-orange-600 hover:text-slate-50 hover:scale-110 transition-all duration-300'>
                Approve
            </button>
        </Fragment >
    )
}

export default Interaction;