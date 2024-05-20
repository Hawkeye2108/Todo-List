import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name:"employees",
    initialState:[],
    reducers:{
       addEmployees: (state,action)=>{
          return [...action.payload];
       }
    }
});

//this is for dispatch
export const {addEmployees} = employeesSlice.actions;

//this is for configureStore
export default employeesSlice.reducer;