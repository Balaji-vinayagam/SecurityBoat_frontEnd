import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminScreen(){

    const [name,setName] = React.useState('');
    const [poster,setPoster] = React.useState('');
    const [plot,setPlot] = React.useState('');
    const [duration,setDuration] = React.useState('');
    const [actor,setActor] = React.useState(''); 
    const [genre,setGenre] = React.useState(''); 
    const [module,setModule] = React.useState(false); 
    const Base_URL = "https://securityboat-backend-1.onrender.com/";
    
    const notify = () => toast("Wow so easy!");

    async function InsertMovieDetails(){
        const arr = [];
        const arr1 = [];
        arr.push(actor);
        arr1.push(genre)
        const movieDetails = {
          title:name,
          actor:arr,
          poster,
          plot,
          genre: arr1,
          duration: duration
        };
        try{
            const response = await fetch(`${Base_URL}add/movielist`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(movieDetails)
            });
            const result = await response.json();
            if(result){
                toast("Successfully Added!");
                setModule(!module);
            }
            console.log(result);
        }catch(err){
            console.log(err);
        }
      }
    return <>
       <div className='Modulebuttondiv'>
       <button className='Modulebutton' onClick={(e)=>{e.preventDefault();setModule(!module)}}>Add movies</button>
       </div>
       {module && 
      <form className='form-container'>
        <div className='form-group'>
        <input type="text" name="title" id="name" placeholder='Movie Title' value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="text" name="actor" id="actor" placeholder='actor' value={actor} onChange={(e)=>setActor(e.target.value)} required/>
        <input type="text" name="genre" id="genre" placeholder='genre' value={genre} onChange={(e)=>setGenre(e.target.value)} required/>
        <input type="text" name="poster" id="poster"  placeholder='Poster' value={poster} onChange={(e)=>setPoster(e.target.value)}  required/>
        <input type="text" name="plot" id="plot"  placeholder='Plot' value={plot} onChange={(e)=>setPlot(e.target.value)}  required/>
        <input type="text" name="duration" id="duration"  placeholder='duration' value={duration} onChange={(e)=>setDuration(e.target.value)}  required/>
        <input id="addButton" type="submit" value="Add" onClick={(e)=>{e.preventDefault(); 
            InsertMovieDetails();
            }}/>
        </div>
        
    </form>
    
    }
    <ToastContainer />
    </>
}

export default AdminScreen;