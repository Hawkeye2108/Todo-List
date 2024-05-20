import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../store/slices/todoSlice';
import { IoClose } from 'react-icons/io5';
import { CgNotes } from "react-icons/cg";
import toast from 'react-hot-toast';

const Todo = () => {
  const [close, setClose] = useState(true);
  const [index, setIndex] = useState(null);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);

  const editTodoHandler = (todo,ind)=>{
      setTask(todo);
      setClose(false);
      setIndex(ind);
  }
  const editTask = (e)=>{
    e.preventDefault();
    try {
      dispatch(editTodo({index, task}));
      setClose(true);
      toast.success("Task Edited Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
    
  }
  const deleteTodoHandler = (ind)=>{
    try {
      dispatch(deleteTodo(ind));
      toast.success("Task Deleted Successfully!");
    } catch (error) {
      toast.error(error.message);
    }    
  }

  return (
    <>
    <div className={`${close?"hidden":"block"} fixed top-0 left-0 h-screen w-screen flex justify-center items-center`}>
          <form action="" className='bg-blue-100 flex flex-col p-4 rounded-xl w-fit relative' >
          <IoClose  className='absolute right-2 top-2 cursor-pointer text-xl' onClick={()=>setClose(true)}/>
            <h1 className='text-center font-bold text-lg'>Edit Todo</h1>
            <input type="text" placeholder='Add Task' className='p-2 rounded-lg my-4 w-80' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <div className='flex justify-center'>
            <button className='py-2 px-6 bg-blue-500 rounded-lg w-fit' onClick={editTask}>Save</button>
            </div>
          </form>
      </div>
    {todos?.length===0 && (
      <div className='text-center flex justify-center items-center gap-3 my-6'>
        <CgNotes className='text-5xl'/>
        <h1 className='font-bold text-xl'>Add Tasks in Todos List</h1>
      </div>
    )}
    {todos.map((todo,ind)=>{
    return (
    <div className='flex justify-center items-center' key={ind}>
    <div className='bg-white w-64 h-64 flex flex-col rounded-xl '>
        <div className='flex-1 p-3'>
        <p>{todo}</p>
        </div>
        <div className='flex justify-around items-center my-2 h-8 rounded-b-xl'>
        <div><FaTrashCan className='text-lg cursor-pointer text-red-600' onClick={()=>deleteTodoHandler(ind)}/></div>
        <div><CiEdit className='text-2xl cursor-pointer text-blue-700' onClick={()=>editTodoHandler(todo,ind)}/></div>
        </div>
    </div>
    </div>
    )}
    )}
    </>
  )
}

export default Todo