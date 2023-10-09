import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import DashboardLayout from '@/layouts/DashboardLayout';
import { removeCart } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hook';
import { Cart as CartType } from '@/type/cart';
import { formatNumber } from '@/utils/helper';
import { ROUTES } from '@/utils/routes';
import { isEmpty, map } from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartList, setCardList] = useState<CartType[]>([]);

    const dispatch = useAppDispatch();

    const { t } = useTranslation('cart');

    useEffect(() => {
        const data = localStorage.getItem('cart');
        if (data) {
            setCardList(JSON.parse(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('cart')]);

    const handleRemoveCart = (id: string) => () => {
        const result = cartList.filter((item) => item.id !== id);
        setCardList(result);
        dispatch(removeCart(id));
    };

    const total = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <DashboardLayout title='Vegadic - CART'>
            {isEmpty(cartList) ? (
                <div className='flex items-center justify-center'>
                    <div className='w-full tablet:w-container py-10'>
                        <p className='text-2xl my-2'>
                            {t('Your cart is currently empty')}
                        </p>
                        <Link
                            to={ROUTES.HOME}
                            className='font-medium py-3 text-3xl hover:text-primary transition-all'
                        >
                            {t('Continue browsing here')}
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <div className='bg-[#f6f6f6] flex justify-center'>
                        <div className='w-full tablet:w-container'>
                            <Breadcrumb router='Your Shopping Cart' />
                        </div>
                    </div>
                    <div className='flex py-[50px] justify-center w-full'>
                        <div className='w-full desktop:w-container px-base'>
                            <div>
                                <table className='hidden mb:table w-full border border-[#dee2e6]'>
                                    <thead>
                                        <tr>
                                            <th className='flex items-start text-xs font-medium tracking-[2.4px] px-5 py-base border-r border-[#dee2e6]'>
                                                {t('product name')}
                                            </th>
                                            <th className='text-xs font-medium tracking-[2.4px] px-5 py-base border-r border-[#dee2e6]'>
                                                {t('price')}
                                            </th>
                                            <th className='text-xs font-medium tracking-[2.4px] px-5 py-base border-r border-[#dee2e6]'>
                                                {t('quantity')}
                                            </th>
                                            <th className='text-xs font-medium tracking-[2.4px] px-5 py-base border-r border-[#dee2e6]'>
                                                {t('total')}
                                            </th>
                                            <th className='text-xs font-medium tracking-[2.4px] px-5 py-base border-r border-[#dee2e6]'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {map(cartList, (cart, index) => (
                                            <tr
                                                key={`${cart.id}-${index}`}
                                                className='border-t border-[#dee2e6]'
                                            >
                                                <td className='flex flex-col items-center mb:flex-row'>
                                                    <div className='p-3 w-[100px] h-[100px]'>
                                                        <img
                                                            src={cart.image}
                                                            alt={cart.name}
                                                        />
                                                    </div>
                                                    <div className='p-3'>
                                                        <Link to=''>
                                                            <span className='text-sm text-[#111111] font-normal hover:text-primary transition-all'>
                                                                {cart.name}
                                                            </span>
                                                        </Link>
                                                        <p className='text-sm text-[#959595]'>
                                                            1KG
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className='text-sm text-[#ababab] p-3 text-center'>
                                                    {formatNumber(
                                                        cart.price,
                                                        '$'
                                                    )}
                                                </td>
                                                <td>
                                                    <div className='flex items-center justify-center'>
                                                        <div className='flex items-center  my-6 '>
                                                            <div className='w-14 p-[10px] flex items-center justify-center border border-[#ddd]'>
                                                                <strong className='font-medium'>
                                                                    {
                                                                        cart.quantity
                                                                    }
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-sm text-[#ababab] p-3 text-center'>
                                                    {formatNumber(
                                                        cart.price *
                                                        cart.quantity,
                                                        '$'
                                                    )}
                                                </td>
                                                <td className='p-3 text-center'>
                                                    <button
                                                        className='text-xl'
                                                        onClick={handleRemoveCart(
                                                            cart.id
                                                        )}
                                                    >
                                                        <i className='fa-solid fa-xmark'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {map(cartList, (cart) => (
                                    <div
                                        key={cart.id}
                                        className='mb:hidden border border-[#dee2e6]'
                                    >
                                        <div className='flex items-center justify-between p-base'>
                                            <div className='w-[100px] h-[100px]'>
                                                <img
                                                    src={cart.image}
                                                    alt={cart.name}
                                                />
                                            </div>
                                            <Link to=''>
                                                <span className='text-sm text-[#111111] font-normal hover:text-primary transition-all'>
                                                    {cart.name}
                                                </span>
                                                <p className='text-sm text-[#959595] text-right'>
                                                    1KG
                                                </p>
                                            </Link>
                                        </div>
                                        <div className='px-base text-sm py-3'>
                                            <div className='flex justify-between items-center my-2'>
                                                <span>{t('product name')}</span>
                                                <span>
                                                    {formatNumber(
                                                        cart.price,
                                                        '$'
                                                    )}
                                                </span>
                                            </div>
                                            <div className='flex justify-between items-center my-2'>
                                                <span> {t('quantity')}</span>
                                                <span>{cart.quantity}</span>
                                            </div>
                                            <div className='flex justify-between items-center my-2'>
                                                <span>{t('total')}</span>
                                                <span>
                                                    {formatNumber(
                                                        cart.price *
                                                        cart.quantity,
                                                        '$'
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <button className='flex items-center justify-center p-base'>
                                                <i className='fa-solid fa-xmark text-lg'></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='my-5 w-full mb:w-72'>
                                <Button href={ROUTES.HOME} component={Link}>
                                    {t('continue shopping')}
                                </Button>
                            </div>
                            <div className='border border-[#dee2e6] my-[30px] py-10 px-5'>
                                <div>
                                    <span className='flex items-start text-xs font-semibold tracking-[2.4px] px-5 py-base border-b border-[#dee2e6]'>
                                        {t('cart totals')}
                                    </span>
                                    <div className=' flex items-center py-4'>
                                        <span className='text-base  tracking-[2.4px] flex-1'>
                                            {t('total')}
                                        </span>
                                        <span className='text-base font-bold flex-[3]'>
                                            {formatNumber(total, '$')}
                                        </span>
                                    </div>
                                    <div className='mt-4 w-full mb:w-72'>
                                        <Button
                                            href={ROUTES.CHECKOUT}
                                            component={Link}
                                        >
                                            {t('Proceed to checkout')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </DashboardLayout>
    );
};

export default Cart;
