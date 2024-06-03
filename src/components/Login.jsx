import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const Base_URL = "http://localhost:3000";
    const navigate = useNavigate();

    async function checkUser(){
       const userDetails ={
        email,
        password
       }
        try{
            const response = await fetch(`${Base_URL}/check/user`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
              });
              const result = await response.json();
              console.log(result);
              if(result == "Valid user"){
                navigate("/dashboard", { state: { user: email } });
              }else{
                console.log("invalid user")
                toast("Incorrect Email or password")
              }
        }catch(err){
            console.log(err)
        }
    }

    return <>
       <div className="registercontainer">
       <h2>SIGN-IN</h2>
        <form>
          <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
          <button type="submit" className="btn" onClick={(e)=>{e.preventDefault();checkUser()}}>Sign In</button>
        </form>
        <ToastContainer />
    </div>
    </>
}


export default Login;