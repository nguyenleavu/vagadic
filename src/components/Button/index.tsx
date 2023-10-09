import { ElementType, ReactNode } from 'react';

interface ButtonProps {
    href?: string;
    children: ReactNode;
    variant?: 'contained' | 'noBorder';
    onClick?: () => void;
    type?: 'button' | 'submit';
    size?: 'large' | 'medium';
    component?: ElementType;
}
const classContained =
    'text-sm font-semibold text-white px-5 py-base mb:px-10 bg-black uppercase tracking-[2px] hover:bg-primary transition-all flex items-center justify-center';
const classNoBorder =
    'group text-base font-semibold text-black relative uppercase hover:text-primary flex items-center justify-center';

const Button = ({
    href,
    variant = 'contained',
    component: Tag = 'button',
    children,
    onClick,
    type = 'button',
    size = 'medium',
}: ButtonProps) => {
    return (
        <Tag
            to={href}
            onClick={onClick}
            type={type}
            className={`${variant === 'contained' ? classContained : classNoBorder
                } ${size === 'large' ? 'w-full' : ''}`}
        >
            {children}
            <div className='absolute h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300'></div>
        </Tag>
    );
};

export default Button;
