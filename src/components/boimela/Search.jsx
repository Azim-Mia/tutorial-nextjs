'use client'; 
import React, {useState, useEffect} from 'react';
const Search = ({onSearch})=>{
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    onSearch(searchText)
  },[searchText]);
  return (<div>
  <form>
  <input type="text" name="Search" placeholder="Searcch Book" value={searchText} className="text-[#000] border-2 text-center cursor-pointer" onChange={(v)=>setSearchText(v.target.value)} />
  </form>
  </div>)
}
export default Search