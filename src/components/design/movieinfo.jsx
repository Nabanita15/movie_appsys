import { useEffect, useState } from 'react'
import './movie.css'
import axios from 'axios'
import {API_KEY} from './movie'
const Movieinfo=(props)=>{
    const [movieinfo,setmovieinfo]=useState()
    const {selectmovie}=props;
    useEffect(()=>{
        axios
        .get(`https://www.omdbapi.com/?i=${selectmovie}&apikey=${API_KEY}`)
        .then((response)=>setmovieinfo(response.data));
    },[selectmovie]);
    return(<div className='containerinfo'>
        {movieinfo?<> <img src={movieinfo?.Poster} alt=""  height="350px" width="250px"/>
        <div className="info_column">
            <div className="movienamedata">{movieinfo?.Type}: {movieinfo?.Title}</div>
            <div className="moviedata">IMBD Rating: <span>{movieinfo?.imdbRating}</span></div>
            <div className="moviedata">Year: <span>{movieinfo?.Year}</span></div>
            <div className="moviedata">Language: <span>{movieinfo?.Language}</span></div>
            <div className="moviedata">Rated: <span>{movieinfo?.Rated}</span></div>
            <div className="moviedata">Release: <span>{movieinfo?.Release}</span></div>
            <div className="moviedata">Runtime: <span>{movieinfo?.Runtime}</span></div>
            <div className="moviedata">Genre: <span>{movieinfo?.Genre}</span></div>
            <div className="moviedata">Director: <span>{movieinfo?.Director}</span></div>
            <div className="moviedata">Actors: <span>{movieinfo?.Actors}</span></div>
            <div className="moviedata">Plot: <span>{movieinfo?.Plot}</span></div>
        </div> 
        <div className="close"  onClick={()=>props.onmovieselect()}>X</div>
        </>:"Loading..."}    
    </div>)
}
export default Movieinfo