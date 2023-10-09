import { formatNumber } from '@/utils/helper';
import { Cart } from '@/type/cart';
import { useEffect, useState } from 'react';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
const ProductInfo = () => {
    const [cartList, setCardList] = useState<Cart[]>([]);

    const { t } = useTranslation('checkout');

    useEffect(() => {
        const data = localStorage.getItem('cart');
        if (data) {
            setCardList(JSON.parse(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('cart')]);

    const total = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className='p-14'>
            {map(cartList, (cart, index) => (
                <div
                    key={`${cart.id}-${cart.name}-${index}`}
                    className='flex justify-between items-center'
                >
                    <div className='flex items-center'>
                        <div className='w-[60px] h-[61px] border border-[#dee2e6] rounded-lg relative mb-4'>
                            <img
                                src={cart.image}
                                alt={cart.name}
                                className='rounded-lg bg-cover h-full w-full'
                            />
                            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-gray66 text-white absolute -top-2 -right-2'>
                                {cart.quantity}
                            </span>
                        </div>
                        <div className='ml-4 flex-col flex '>
                            <span>{cart.name}</span>
                            <span>1KG</span>
                        </div>
                    </div>
                    <div>{formatNumber(cart.price * cart.quantity, '$')}</div>
                </div>
            ))}
            <div className='w-full mt-10'>
                <div className='flex items-center justify-between my-4'>
                    <span>{t('subtotal')}</span>
                    <span>{formatNumber(total, '$')}</span>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <span>{t('shipping')}</span>
                    <span>{t('calculated')}</span>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <span>{t('estimated taxes')}</span>
                    <span>{formatNumber(0, '$')}</span>
                </div>
                <div className='flex items-center justify-between my-4'>
                    <span>{t('total')}</span>
                    <span>{formatNumber(total, '$')}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
