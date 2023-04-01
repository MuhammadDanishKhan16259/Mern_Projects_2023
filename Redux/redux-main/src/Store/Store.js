import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Card";
import loginSlice from "./loginSlice";
import productSlice from "./ProductSlice";

const Store = configureStore({
    reducer: {
        card: cardSlice,
        product: productSlice,
        login: loginSlice
    }
});

export default Store;