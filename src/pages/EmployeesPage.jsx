import React, { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployees } from '../store/slices/employeesSlice'
import EmployeeCard from '../components/EmployeeCard'

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state)=>state.employees);

  const fetchAllEmployees = async()=>{
    try {
        const {data }= await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);
        dispatch(addEmployees(data));
        toast.success("Employees Loaded Successfully!");
    } catch (error) {
        toast.error(error.message);
    }
  }
  useEffect(()=>{
     fetchAllEmployees();
  },[]);

  return (
    <div className='bg-red-200 min-h-screen px-32 py-7'  style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,300px)", gap:"30px"}}>
    {employees.map((emp,ind)=>{
      return <EmployeeCard key={ind} emp={emp}/>
    })}
    </div>
  )
}

export default EmployeesPage