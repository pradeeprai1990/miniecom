import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import MainContext from './context/MainContext.jsx'

let routing=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContext>
        <RouterProvider router={routing}/>
    </MainContext>
  </React.StrictMode>,
)
