import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productsSlice';
import cartReducer from './cartSlice';
import orderSlice from './orderSlice';
import modalSlice from './modalSlice';
import adminSlice from './adminSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderSlice,
        modal: modalSlice,
        admin: adminSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['modal/openModal'],

            },
        }),
})