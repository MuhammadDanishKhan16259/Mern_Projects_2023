import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload);
        },
        removeItem(state, action) {
            return state.filter((value, index) => value.id !== action.payload);
        },
    }
});

export const { addItem, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
