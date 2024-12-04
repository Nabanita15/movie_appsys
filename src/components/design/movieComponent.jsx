import './movie.css' 
const MovieCom =(props)=>{
const{Title,Year,imdbID,Type,Poster}=props.movie
    return(
     <div className="movieCon" onClick={()=>props.onmovieselect(imdbID)}>
        <img src={Poster} alt='' height="385px"></img>
        <div className="movieName">{Title}</div>
        <div className="infocolumn">
           <div className="movieinfos">{Year}</div>
           <div className="movieinfos">{Type}</div>
        </div>
        </div>)
    
        
}
export default MovieCom
