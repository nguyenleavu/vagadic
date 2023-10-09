import { isEmpty } from 'lodash';
import React from 'react';

interface BoxTitleProps {
    subtitle?: string;
    title: string;
}

const BoxTitle = ({ subtitle, title }: BoxTitleProps) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h3 className='text-2xl font-medium pb-2'>{title}</h3>
                <div className='h-[2px] bg-primary w-2/3'></div>
            </div>
            {!isEmpty(subtitle) && (
                <span className='text-[17px] text-gray66 pt-5 font-medium'>
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default BoxTitle;
