import { configureStore } from "@reduxjs/toolkit";

import  createReducer from "./cartSlice";
import productReducer from "./ProductSlice";

const store = configureStore({
    reducer:{
        cart: createReducer,
        product: productReducer
    },
})

export default store;