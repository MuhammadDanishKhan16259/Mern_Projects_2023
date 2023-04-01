import { createSlice } from "@reduxjs/toolkit";

export let STATUSES = Object.freeze({
    IDEL: "idel",
    LOADING: "loading",
    ERROR: "error"
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDEL,
    },
    reducers: {
        addProduct(state, action) {
            state.data = action.payload;
        },
        addStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { addProduct, addStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
    return async function fetchData(dispatch, getState) {
        dispatch(addStatus(STATUSES.LOADING));
        try {
            const data = await fetch("https://fakestoreapi.com/products/");
            const convert = await data.json();
            dispatch(addProduct(convert));
            dispatch(addStatus(STATUSES.IDEL));
        }
        catch (error) {
            dispatch(addStatus(STATUSES.ERROR));
        }
    }
}