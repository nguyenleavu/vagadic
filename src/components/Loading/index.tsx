import { createPortal } from 'react-dom';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return createPortal(
        <div className='fixed inset-0 flex items-center justify-center bg-slate-200'>
            <HashLoader color='#25da7f' size={120} />
        </div>,
        document.body
    );
};

export default Loading;
