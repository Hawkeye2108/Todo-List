import React from 'react'
import { FaUser } from "react-icons/fa";

const EmployeeCard = ({emp}) => {
  const {name, email, address} = emp;
  return (
    <div className='flex justify-center items-center'>
    <div className='bg-white shadow-2xl rounded-xl w-64 flex flex-col items-center px-6'>
       <h1 className='font-bold text-black my-4'>{name}</h1>
       <p className='text-white font-bold bg-green-300 rounded-full p-2 my-2'>{email}</p>
       <p className='text-sm'>{address.suite}, {address.street}</p>
       <p className='text-sm'> {address.city}</p>
       <div className='bg-blue-300 h-20 my-12 w-20 rounded-full flex justify-center items-center text-3xl'>
        <FaUser className='h-44 '/>
       </div>
    </div>
    </div>
  )
}

export default EmployeeCard