import ReactStars from 'react-stars';
const MovieItems = ({movie,ratingFun,toggleWatched,deWatched})=>{
  const ratingChange =(newRating)=>{
    ratingFun(movie.id, newRating)
  }
  const toggleChange =(id)=>{
    toggleWatched(id)
  }
  const delMovieWatch =(id)=>{
    deWatched(id)
  }
  return ( <li className="flex  gap-2 justify-between items-center bg-gray-800 rounded-lg shadow-md sm:flex-cols sm:text-1xl sm:m-0">
  <span className={`flex-1 ${movie.watched ? "line-through text-gray-400":"text-[#FFF] py-1 ml-2"}`}>
  {movie.title} on {movie.ott} {movie.rating && `Star :${movie.rating}/5`}
  </span>
    <div className="flex gap-3"><ReactStars
    count={5}
    value={movie?.rating}
    onChange={ratingChange}
    size={24}
    color2={"#ffd700"}
    /></div>
    <button onClick ={()=>toggleChange(movie.id)}>
    {movie.watched ? "Watched":"Unwatched"}
    </button>
   <button onClick={()=>delMovieWatch(movie.id)}>Remove</button>
  </li>)
}
export default MovieItems;