import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todoSlice";
import employeesReducer from "./slices/employeesSlice"

const store = configureStore({
    reducer:{
       todos: todosReducer,
       employees: employeesReducer
    }
});

export default store;