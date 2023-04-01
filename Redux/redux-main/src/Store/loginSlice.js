import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers: {
        addItems(state, action) {
            return state = action.payload;
        }
    }
});

export const {addItems} = loginSlice.actions;
export default loginSlice.reducer;