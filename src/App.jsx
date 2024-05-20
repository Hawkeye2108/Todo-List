import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-red-200 min-h-screen flex justify-evenly items-center'>
      <Link to="/todo">
      <div className='bg-white w-32 h-32 flex justify-center items-center rounded-xl shadow-xl shadow-slate-300 hover:scale-110'>
           <p className='font-bold'>Todos</p>
      </div>
      </Link>
      <Link to="/employee">
      <div className='bg-white w-32 h-32 flex justify-center items-center rounded-xl shadow-xl shadow-slate-300 hover:scale-110'>
           <p className='font-bold'>Employees</p>
      </div>
      </Link>
    </div>
  )
}

export default App