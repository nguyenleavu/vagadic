import { addToCart } from '@/redux/cart/slice';
import { useAppDispatch } from '@/redux/hook';
import { Product as ProductType } from '@/type/product';
import { formatNumber } from '@/utils/helper';
import { Link } from 'react-router-dom';
interface ProductProps {
    product: ProductType;
}

const Product = ({ product }: ProductProps) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
    };

    return (
        <div className='mb-10 group'>
            <div className='mb-5 relative overflow-hidden'>
                <Link
                    to={`/product/${product.id}`}
                    className='block overflow-hidden'
                >
                    <img
                        className='group-hover:scale-110 transition-all duration-300'
                        src={product.image}
                        alt={product.image}
                    />
                </Link>
                <button
                    className='absolute bottom-4 -right-full group-hover:right-4 rounded-full bg-white p-4 h-12 w-12 shadow-base flex items-center justify-center transition-all duration-500 hover:bg-primary text-black hover:text-white'
                    onClick={handleAddToCart}
                >
                    <i className='fa-light fa-cart-shopping text-xl'></i>
                </button>
            </div>
            <Link to={`/product/${product.id}`} className='block pt-5 pb-[6px]'>
                <h4 className='text-base font-medium hover:text-primary transition-all'>
                    {product.name}
                </h4>
            </Link>
            <span className='text-[15px] font-bold text-primary mb-4'>
                {formatNumber(product.price, '$')}
            </span>
        </div>
    );
};

export default Product;
