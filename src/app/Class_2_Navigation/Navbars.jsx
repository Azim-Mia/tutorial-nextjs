import Link from 'next/link';
const Navbars = ()=>{
  return (<div className="flex sticky top-0 mt-0 w-full bg-[#000] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
  <div className="flex flex-start py-4 px-4 gap-4 text-white font-semibold text-md xs:text-sm xs:py-2 xs:px-1">
  <Link href="/home" ><p>Home</p></Link>
  <Link href="/about" ><p>About</p></Link>
   <Link href="/contruct" ><p>Contract</p></Link>
     <Link href="/blogs" ><p>Blogs</p></Link>
  </div>
  </div>)
}
export default Navbars;