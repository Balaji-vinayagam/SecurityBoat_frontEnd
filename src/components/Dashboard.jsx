import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AdminScreen from './AdminScreen';

function Dashboard(){
  const { state } = useLocation();
  const user = state?.user;
  const Base_URL = "http://localhost:3000";
  const [userdata,setUserdata] = React.useState({});
  const [data,setData] = React.useState([]);
  
  React.useLayoutEffect(()=>{
    fetchUserDetails();
  },[])

  async function fetchUserDetails(){
    try{
      const userInfo = await axios.get(`${Base_URL}/userDetails`);
      const movieInfo = await axios.get(`${Base_URL}/MovieDetails`);
      const res = userInfo.data;
      console.log("userInfo",res);
      console.log("movieInfo",movieInfo.data);
      setData(movieInfo.data);
      console.log("userInfo",data);
      const result = res.find((element)=>element.email == user);
      setUserdata(result);
      
      console.log("userInfo",userdata);
    }catch(err){
      console.log(err);
    }
  }

  console.log("user",user);
return <>
    <div className='dashboardContainer'>
      <div className='dashboard_header'>
      <h2>EasyTickets</h2>
      <div className='username'>Welcome {userdata.name}</div>
      </div>
      <span className='afterdiv'></span>
      {userdata.type == "admin" && 
        <AdminScreen />
        // <button>Add movies</button>
      }<br/>
       <div className='movielist_container'>
         {data.map((movie,index) => (
           <div key={index} className='individualMovie' >
             <img className='movieposter' src={movie.poster} alt={movie.title} />
             <span className='moviename'><strong>{movie.title}</strong></span>
             <span className='genrename'>{movie.genre}</span>
           </div>
         ))}     
         </div>
    </div>
</>    
}

export default Dashboard;
