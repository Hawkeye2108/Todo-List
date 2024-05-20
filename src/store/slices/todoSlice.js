import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
name:"todos",
initialState:[],
reducers:{
    addTodo: (state,action)=>{
        state.push(action.payload);
    },
    deleteTodo: (state,action)=>{
      state.splice(action.payload, 1);
    },
    editTodo: (state,action)=>{
       state.splice(action.payload.index,1,action.payload.task);
    }
}
});

//this is for dispatch
export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;

//this is for configureStore
export default todoSlice.reducer;