import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TodosPage from './pages/TodosPage.jsx'
import EmployeesPage from './pages/EmployeesPage.jsx'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/todo",
    element: <TodosPage/>
  },
  {
    path:"/employee",
    element: <EmployeesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster/>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
