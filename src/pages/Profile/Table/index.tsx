import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectProducts } from '@/redux/product/selector';
import { getProductsThunk, removeProductThunk } from '@/redux/product/thunks';
import { Product } from '@/type/product';
import { formatNumber } from '@/utils/helper';
import { map } from 'lodash';
import { useEffect } from 'react';
import EditProduct from '../Dialog/EditProduct';

const Table = () => {
    const products = useAppSelector(selectProducts);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const handleDeleteProduct = (id: string) => () => {
        dispatch(removeProductThunk(id));
    };

    return (
        <div className='relative shadow-md sm:rounded-lg overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium text-center'
                        >
                            ID
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium'
                        >
                            Image
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium'
                        >
                            Product
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium'
                        >
                            Price
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium text-center'
                        >
                            Categories
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-base font-medium'
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {map(products, (product: Product) => (
                        <tr
                            key={product.id}
                            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                        >
                            <td className='w-32 p-4 text-center font-medium text-lg'>
                                {product.id}
                            </td>
                            <td className='w-32 p-4'>
                                <img src={product.image} alt={product.name} />
                            </td>
                            <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                                {product.name}
                            </td>
                            <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                                {formatNumber(product.price, '$')}
                            </td>
                            <td className='px-6 py-4 text-center font-medium text-lg'>
                                {product.categories[0]}
                            </td>
                            <td className='px-6 py-4 '>
                                <div className='flex h-full items-center'>
                                    <EditProduct product={product} />
                                    <button
                                        onClick={handleDeleteProduct(
                                            product.id
                                        )}
                                    >
                                        <i className='fa-solid fa-trash-can text-2xl text-red-500'></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
