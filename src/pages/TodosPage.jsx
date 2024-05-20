import React, { useState } from 'react'
import Todo from '../components/Todo'
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import toast from 'react-hot-toast';

const TodosPage = () => {
  const [close, setClose] = useState(true);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e)=>{
    e.preventDefault();
    if(task===""){
      toast.error("Write Something in Task!");
      return ;
    }  
    dispatch(addTodo(task));
    toast.success("Task Added Successfully!");
    setTask("");

  }

  return (
    <>
     <div className={`${close?"hidden":"block"} fixed h-screen w-screen flex justify-center items-center`}>
          <form action="" className='bg-blue-100 flex flex-col p-4 rounded-xl w-fit relative' >
          <IoClose  className='absolute right-2 top-2 cursor-pointer text-xl' onClick={()=>setClose(true)}/>
            <h1 className='text-center font-bold text-lg'>Add Todo</h1>
            <input type="text" placeholder='Add Task' className='p-2 rounded-lg my-4 w-80' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <div className='flex justify-center'>
            <button className='py-2 px-6 bg-blue-500 rounded-lg w-fit' onClick={addTodoHandler}>Save</button>
            </div>
          </form>
      </div>
    <div className='bg-red-200 min-h-screen pt-5 pb-3'>
    <div  style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,300px)", gap:"30px", justifyContent:"center"}}>
      <Todo/>  
      </div>
      <div className='fixed bottom-8 right-6'>
      <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-md cursor-pointer'>
      <MdEdit className='text-3xl' onClick={()=>setClose(false)}/>
      </div>
     </div>
    </div>   
     </>
  )
}

export default TodosPage