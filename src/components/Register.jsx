import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

function Register(){
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phone,setPhone] = React.useState(0);
    const [password,setPassword] = React.useState("");
    const [role,setRole] = React.useState("");
    const Base_URL = "https://securityboat-backend-1.onrender.com/";
    const navigate = useNavigate();
    
    async function addUser(){
        const userDetails = {
            name,
            email,
            phone,
            password,
            type : role
        }
        try{
            console.log(userDetails);
            const response = await fetch(`${Base_URL}add/user`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
              });
              const result = await response.json();
              console.log(result);
              if(result){
                navigate("/dashboard", { state: { user: email } });
              }
              
        }catch(err){
            console.log(err)
        }
    }

    function handleOptionChange(e){
       setRole(e.target.value);
       console.log(role);
    }

    return <>   
    <div className="registercontainer">
       <h2>SIGN-UP</h2>
        <form>
          <input type="text" name="username" placeholder="Username" onChange={(e)=>setName(e.target.value)} required/>
          <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="tel" name="Phone" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} required/>
          <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
          <label className="radio-label"><input type="radio"  value="user" checked={role === 'user'} onChange={handleOptionChange}/><span className="radio-custom"></span>USER</label>
          <label className="radio-label"><input type="radio"  value="admin" checked={role === 'admin'} onChange={handleOptionChange}/><span className="radio-custom"></span>ADMIN</label><br/>
          <button type="submit" className="btn" onClick={(e)=>{e.preventDefault();addUser()}}>Register</button>
        </form>
    </div>
    </>
}


export default Register;