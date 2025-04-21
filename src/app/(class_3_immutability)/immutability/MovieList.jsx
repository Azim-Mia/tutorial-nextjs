import MovieItems from './MovieItems';
const MovieList = ({movies,ratingFun,toggleWatched,deWatched})=>{
  return (<>
  <ul className="flex flex-col gap-4">
   {movies.map((movie)=><MovieItems key={movie.id} 
   movie={movie} 
   ratingFun ={ratingFun}
   toggleWatched={toggleWatched}
   deWatched={deWatched}/>)}
   </ul>
  </>)
}
export default MovieList;