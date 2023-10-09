import { Product } from '@/type/product';
import request from '@/utils/request';

export const productService = {
    getProducts: (): Promise<Product[]> =>
        request.request({
            method: 'GET',
            url: '/products',
        }),

    getProduct: (id: string): Promise<Product> =>
        request.request({
            method: 'GET',
            url: `/products/${id}`,
        }),

    addProduct: (data: Omit<Product,"id">): Promise<Product> =>
        request.request({
            method: 'POST',
            url: `/products`,
            data
        }),

    updateProduct: (data: Product): Promise<Product> =>
        request.request({
            method: 'PUT',
            url: `/products/${data.id}`,
            data: data,
        }),

    removeProduct: (id: string): Promise<Product> =>
        request.request({
            method: 'DELETE',
            url: `/products/${id}`,
        }),
};
