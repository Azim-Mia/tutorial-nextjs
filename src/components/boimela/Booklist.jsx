'use client';
import React,{useState, useEffect} from 'react';
import BookRow from './BookRow';
import Search from './Search'
const Booklist = ({AllBookData})=>{
  const [books, setBooks] =useState([]);
  const [filterBooks,setFilterBooks] = useState(books);
const handleSearch =(searchValue)=>{
let value=searchValue.toLowerCase();
   const filter = books.filter((book)=>{
    const bookNames= book.title.toLowerCase();
    return bookNames.startsWith(value)
    })
    
    setFilterBooks(filter);
}
useEffect(()=>{
  setBooks(AllBookData);
  setFilterBooks(AllBookData);
},[]);
  return (<>
  <div className="mt-4 text-center"> <Search  onSearch={handleSearch} /></div>
  {filterBooks.map((data)=><BookRow books ={data} key={data.id} />
  )}
  </>)
}
export default Booklist