'use client'
import {useState} from 'react'
const MovieForm = ({onAddMovie})=>{
  const [movieData, setMovieData] = useState({
   title:'',
   ott:'',
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
    onAddMovie(movieData);
  }
  const handleChange =(e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({...movieData, [key]:value});
  }
  return (<div className="flex flex-col items-center justify-center">
  <form onSubmit={handleSubmit} className="flex rounded-md gap-1">
  <input type="text" name="title" placeholder="movie title name" value={movieData?.title}  onChange={handleChange} className="border ring-1 ring-black rounded-md text-center text-[#000] bg-pink-200 w-2/3 px-1 py-2 text-2xl "/>
  <select name="ott" value={movieData?.ott} onChange={handleChange} className="text-1xl w-1/5 px-1 py-2 text-[#000]">
  <option value="">OTT</option>
   <option value="netfilsx">Netfilx</option>
   <option value="amazon prime">Amazon Prime</option>
   <option value="hostar">Hostar</option>
  <option value="sonyLIV"> SoniLIV</option>
    <option value="hoichoi">HoiChoi</option>
     <option value="others">Others</option>
  </select>
  <button className="flex rounded-md py-2 px-4 bg-pink-600 text-2xl text-[#FFF]">Add</button>
  </form>
  </div>)
}
export default MovieForm;