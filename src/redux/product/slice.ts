import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/type/product';

const initialProduct = {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
    images: [],
    categories: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: initialProduct,
    },
    reducers: {
        setProducts: (state: { products: Product[] }, { payload }) => {
            state.products = payload;
        },

        setProduct: (state: { product: Product }, { payload }) => {
            state.product = payload;
        },
    },
});

export const { setProducts, setProduct } = productSlice.actions;

export default productSlice;
