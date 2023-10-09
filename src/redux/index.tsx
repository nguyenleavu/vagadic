import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = RootState;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export const wrapper = makeStore;
