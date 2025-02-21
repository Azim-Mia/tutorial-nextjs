'use client';
import {useState} from 'react';
import Heading from './Heading'
import MovieForm from './MovieForm'
import Filter from './Filter'
import MovieList from './MovieList'
const MovieWatch = ()=>{
  const [movies, setMovies] = useState([])
  const addMovie =({title, ott})=>{
    const newMovie={
      id:crypto.randomUUID(),
      title:title,
      ott:ott,
      rating:null,
      watched:false
    }
    setMovies([...movies,newMovie]);
  }
const ratingFun=(id, rating)=>{
setMovies(
  movies.map((movie)=> movie.id === id ? {...movie, rating}:movie)
  )
}
const toggleWatched = (id)=>{
  setMovies(
  movies.map((movie)=> movie.id === id ? {...movie, watched : !movie.watched}:movie)
  )
}
const deWatched =(id)=>{
setMovies(
  movies.filter((movie)=>movie.id !== id)
  )
}
  return (<div className="flex flex-col gap-2 m-1 bg-[#000] text-[#FFF] p-4 mt-4 rounded-sm">
 <Heading />
  <MovieForm onAddMovie = {addMovie}/>
   <Filter movies={movies} />
    <MovieList 
    movies={movies}
    ratingFun={ratingFun}
    toggleWatched={toggleWatched}
    deWatched={deWatched}
    />
  </div>)
}
export default MovieWatch