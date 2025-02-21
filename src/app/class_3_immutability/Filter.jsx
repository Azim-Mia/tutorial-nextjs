const Filter = ()=>{
  return (<div className="flex gap-4 items-center justify-center">
  <button className="bg-yellow px-4 py-1 rounded-md text-[#000]">All</button>
  <button className="bg-gray-light px-4 py-1 rounded-md text-[#000]">Watched</button>
   <button className="bg-gray-600 px-4 py-1 rounded-md text-[#FFF]">Unwatched</button>
  </div>)
}
export default Filter;