import { configureStore } from "@reduxjs/toolkit";
import Todo from "./Todo";

const Store = configureStore({
    reducer: {
        todo: Todo
    }
});

export default Store;