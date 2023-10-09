import Button from '@/components/Button';
import { addToCart } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hook';
import { Product } from '@/type/product';
import { formatNumber } from '@/utils/helper';
import { map } from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InfoProps {
    product: Product;
}

const Info = ({ product }: InfoProps) => {
    const [quantity, setQuantity] = useState(1);

    const { t } = useTranslation('detail');

    const dispatch = useAppDispatch();

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleDecrease = () => {
        if (quantity < 2) {
            return;
        }
        setQuantity((prev) => prev - 1);
    };

    const handleAddToCard = () => {
        dispatch(addToCart({ ...product, quantity }));
    };

    return (
        <div className='px-base tablet:pl-[60px] w-full tablet::w-3/4'>
            <div className='pb-10 border-b border-[#e7e7e7]'>
                <h2 className='text-2xl font-medium mb-2'>{product.name}</h2>
                <strong className='text-primary text-lg font-medium'>
                    {formatNumber(product.price, '$')}
                </strong>
            </div>
            <p className='pt-6 text-[#ababab] text-sm leading-7'>
                {product.description}
            </p>
            <div className='my-5'>
                <h4 className='text-primary font-semibold text-lg mb-3'>
                    {t('Special Offer')}
                </h4>
                <ul className='py-6 pl-4 border border-[#e7e7e7] rounded'>
                    <li className='text-primary'>
                        <i className='fa-solid fa-caret-right'></i>
                        <span className='ml-2'>{t('In Stock')}</span>
                    </li>
                    <li className='text-primary'>
                        <i className='fa-solid fa-caret-right'></i>
                        <span className='ml-2'>
                            {t('Free Delivery Available*')}
                        </span>
                    </li>
                    <li className='text-primary'>
                        <i className='fa-solid fa-caret-right'></i>
                        <span className='ml-2'>
                            {t('Sale 30% Off Use Code: Deal30')}
                        </span>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <p className=' uppercase text-xs font-semibold pb-2 pr-8 border-b border-black mr-6'>
                    {t('size')}
                </p>
                <div className='p-2 border border-black font-semibold uppercase'>
                    1 KG
                </div>
            </div>
            <div className='flex items-center  my-6 '>
                <div className='flex items-center border-2 border-[#ddd] w-[90px] mr-4'>
                    <div className='w-[42px] py-[10px] flex items-center justify-center border-r border-[#ddd]'>
                        <strong className='font-medium'>{quantity}</strong>
                    </div>
                    <div className='flex flex-col'>
                        <button
                            className='flex-1 flex items-center justify-center w-[42px]'
                            onClick={handleIncrease}
                        >
                            <i className='fa-sharp fa-solid fa-caret-up'></i>
                        </button>
                        <button
                            className='flex-1 flex items-center justify-center w-[42px] border-t border-[#ddd]'
                            onClick={handleDecrease}
                        >
                            <i className='fa-sharp fa-solid fa-caret-down'></i>
                        </button>
                    </div>
                </div>
                <Button onClick={handleAddToCard}>{t('add to cart')}</Button>
            </div>
            <div>
                <span className='text-[15px] pr-1'>{t('Categories')} :</span>
                {map(product.categories, (item, index) => (
                    <span
                        key={`category-${index}`}
                        className='mr-1 text-[#bfbfbf] text-[15px] after:content-[","]'
                    >
                        {item}
                    </span>
                ))}
            </div>
            <ul className='py-6'>
                <li className='text-primary'>
                    <i className='fa-solid fa-caret-right'></i>
                    <span className='ml-2'>{t('Worldwide shipping')}</span>
                </li>
                <li className='text-primary'>
                    <i className='fa-solid fa-caret-right'></i>
                    <span className='ml-2'>{t('Free 60 day returns')}</span>
                </li>
                <li className='text-primary'>
                    <i className='fa-solid fa-caret-right'></i>
                    <span className='ml-2'>{t('24 Month warranty')}</span>
                </li>
                <li className='text-primary'>
                    <i className='fa-solid fa-caret-right'></i>
                    <span className='ml-2'>{t('100% Secrue checkout')}</span>
                </li>
            </ul>
        </div>
    );
};

export default Info;
