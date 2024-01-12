import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './SliceRedux'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;