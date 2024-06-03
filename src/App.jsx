import { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div className="container_bg">
      <div className="container">
        <h1>Easy Tickets</h1>
        <button  className="btn" value="Login" onClick={()=>{navigate("/login")}}>Sign In</button>
        <button  className="btn btn-register" value="Register" onClick={()=>{navigate("/register")}}>Sign Up</button>
      </div>
      </div>
    </>
  )
}

export default App
