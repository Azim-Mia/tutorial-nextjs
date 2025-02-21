import bookData from '@/lib/bookData';
import Booklist from '@/components/boimela/Booklist'
const BookmelaPages =()=>{
  const AllBookData= bookData();
  return(<div className="text-1xl sm:text-3xl lg:text-4xl">
  <h2>Boimela all Book Search</h2>
<Booklist AllBookData ={AllBookData}/>
  </div>)
}
export default BookmelaPages;