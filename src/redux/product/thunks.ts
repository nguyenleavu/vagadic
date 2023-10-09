import { Product } from '@/type/product';
import { productService } from '@/services/product.services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setProduct, setProducts } from './slice';

export const getProductsThunk = createAsyncThunk<Product[]>(
    '/products/list',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const res = await productService.getProducts();
            if (!res) return rejectWithValue(res);
            dispatch(setProducts(res));
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getProductThunk = createAsyncThunk<Product, string>(
    '/product',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const res = await productService.getProduct(id);

            if (!res) return rejectWithValue(res);

            dispatch(setProduct(res));

            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

type Data = Omit<Product, 'id'>;

export const addProductThunk = createAsyncThunk<Product, Data>(
    '/product',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const res = await productService.addProduct(data);

            if (!res) return rejectWithValue(res);

            dispatch(getProductsThunk());
            toast.success('Add product success!');
            return res;
        } catch (error) {
            toast.error('Add product fail!');
            return rejectWithValue(error);
        }
    }
);

export const updateProductThunk = createAsyncThunk<Product, Product>(
    '/product',
    async (product, { rejectWithValue, dispatch }) => {
        try {
            const res = await productService.updateProduct(product);

            if (!res) return rejectWithValue(res);

            dispatch(getProductsThunk());

            toast.success('Update product success!');
            return res;
        } catch (error) {
            toast.error('Update product fail!');
            return rejectWithValue(error);
        }
    }
);

export const removeProductThunk = createAsyncThunk<Product, string>(
    '/product',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const res = await productService.removeProduct(id);

            if (!res) return rejectWithValue(res);

            dispatch(getProductsThunk());

            toast.success('Delete Success');

            return res;
        } catch (error) {
            toast.error('Delete Fail');
            return rejectWithValue(error);
        }
    }
);
