import { toast } from 'react-hot-toast';
import { Cart } from '@/type/cart';
import { createSlice } from '@reduxjs/toolkit';

interface CartType {
    cart: Cart;
}
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')!)
    : [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: initialState,
    },
    reducers: {
        addToCart: (state: { cartList: Cart[] }, { payload }) => {
            let result = state.cartList;
            const index = state.cartList.findIndex(
                (item) => item.id === payload.id
            );

            index !== -1
                ? (result[index] = {
                      ...result[index],
                      quantity: result[index].quantity + 1,
                  })
                : (result = [payload, ...result]);

            state.cartList = result;

            localStorage.setItem('cart', JSON.stringify(state.cartList));
            toast.success('Thêm giỏ hàng thành công!');
        },
        removeCart: (state: { cartList: Cart[] }, { payload }) => {
            const result = state.cartList.filter((item) => item.id !== payload);
            state.cartList = result;
            localStorage.setItem('cart', JSON.stringify(result));
            toast.success('Xoá sản phẩm thành công!');
        },
        removeAllCart: (state: { cartList: CartType[] }) => {
            state.cartList = [];
            localStorage.setItem('cart', JSON.stringify({}));
        },
    },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice;
