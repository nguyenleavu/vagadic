import BoxTitle from '@/components/BoxTitle';
import Product from '@/components/Product';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectProducts } from '@/redux/product/selector';
import { Product as ProductType } from '@/type/product';
import { map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getProductsThunk } from '@/redux/product/thunks';

const Related = () => {
    const products = useAppSelector(selectProducts);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const { t } = useTranslation('detail');

    return (
        <div className='flex justify-center mt-[70px]'>
            <div className='w-container'>
                <BoxTitle title={t('RELATED PRODUCTS')} />
                <div className='grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-[15px] tablet:gap-[30px] px-base mt-10'>
                    {map(products, (item: ProductType) => (
                        <div key={item.id}>
                            <Product product={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Related;
