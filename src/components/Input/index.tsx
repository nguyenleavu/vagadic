import { isEmpty } from 'lodash';

interface InputProps {
    value?: string | number;
    label?: string;
    placeholder: string;
    error: string;
    type?: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    label,
    name,
    placeholder,
    error,
    type = 'text',
    value,
    onChange,
}: InputProps) => {
    return (
        <div className='w-full mb-6'>
            {label && <p className='mb-2 font-medium text-gray66'>{label}</p>}
            <input
                name={name}
                value={value}
                className='w-full block placeholder:text-[13px] py-[6px] px-3 h-[55px] border border-[#ccc] text-base outline-none text-[#495057] font-base'
                placeholder={placeholder}
                type={type}
                onChange={onChange}
            />
            {!isEmpty(error) && (
                <p className='text-red-500 my-2 ml-1'>{error}</p>
            )}
        </div>
    );
};

export default Input;
