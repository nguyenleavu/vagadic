import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/slice';
import productSlice from './product/slice';

const rootReducer = combineReducers({
    [cartSlice.name]: cartSlice.reducer,
    [productSlice.name]: productSlice.reducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
