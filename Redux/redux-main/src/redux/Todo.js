import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload);
        },
        deleteItem(state, action) {
            return state.filter((value, index) => index !== action.payload);
        },
        updateItem(state, action) {
            return state.map((value, index) => {
                if (index === action.payload.key) {
                    return value = action.payload.valueReplace;
                } else {
                    return value;
                }
            })
        },
        deleteAllItem(state, action) {
            return state = [];
        }
    }
});


export const { addItem, deleteItem, updateItem, deleteAllItem } = TodoSlice.actions;
export default TodoSlice.reducer;