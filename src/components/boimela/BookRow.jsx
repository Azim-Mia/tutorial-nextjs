const BookRow = ({books})=>{
  return (<div className="relative flex justify-between gap-24 p-4 bg-gray-400 mt-2 rounded-md">
  <ul className="font-semibold text-[#000]">
  <li className="p-2">Book Name : {books.title}</li>
  <li className="p-2">Writer : {books.authur}</li>
  </ul>
  <p className="relative mt-8 font-semibold">Star</p>
  </div>)
}
export default BookRow;