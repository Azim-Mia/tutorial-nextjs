import React from 'react';
import Link from "next/link";
import getAllposts from '@/lib/getAllposts';
//import postComments from '@/lib/getComments'
export default async function Posts() {
const posts=await getAllposts();
  return (
    <main>
  {posts.map((todo)=><ul key={todo.id} className="mt-2 bg-green-300 text-[#000] p-4">
  <Link href = {`/posts/${todo.id}`}><li>{todo.title}</li></Link>
  </ul>)}  
this is posts pages
  </main>
  )
}