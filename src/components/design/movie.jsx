import React, { useState } from 'react'
import './movie.css'
import search_icon from '../assets/search.png'
import movie_image from '../assets/movie.png'
import MovieCom from './movieComponent'
import axios from 'axios'
import Movieinfo from './movieinfo'
export const API_KEY="f5e4ca8";
const Movie = () => {
   const [searchQuery,update]=useState();
   const [timeoutid,updatetimeout]=useState();
   const [movielist,updateMovielist]=useState([]);
   const [selectmovie,onmovieselect]=useState();
   const fetchdata=async (MOVIE_STRING)=>{
   const response= await axios.get(`https://www.omdbapi.com/?s=${MOVIE_STRING}&apikey=${API_KEY}`);
   console.log(response);
   updateMovielist(response.data.Search)
   };
   const ontextchange=(event)=>
   {
    clearTimeout(timeoutid);
    update(event.target.value);
    const timeout=setTimeout(()=>fetchdata(event.target.value),500)
    updatetimeout(timeout);
   }
  return (
    <div className='container'>
        <div className="header">
           <div className="appName"><img src={movie_image} alt="" height="48px" width="48px"/>Jenny app</div>
           <div className="searchBox">
            <img src={search_icon} alt="" height="32px" width="32px"/>
            <input type="text" className='searchInput' placeholder='Search movie' onChange={ontextchange} value={searchQuery}/>
           </div> 
        </div>
           { selectmovie && <Movieinfo selectmovie={selectmovie} onmovieselect={onmovieselect} />}
          <div className="movieContainer">
            {movielist?.length?movielist.map((movie,index)=><MovieCom key={index} movie={movie} onmovieselect={onmovieselect} />):"no movie search"}

          </div>
        </div>
  )
}

export default Movie