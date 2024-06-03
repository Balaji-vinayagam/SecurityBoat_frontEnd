import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
