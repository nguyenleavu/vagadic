import { createSelector } from 'reselect';
import { AppState } from '@/redux/index';

const selectProductsState = (state: AppState) => state.product;

export const selectProducts = createSelector(
    [selectProductsState],
    (state) => state.products
);

export const selectProduct = createSelector(
    [selectProductsState],
    (state) => state.product
);
