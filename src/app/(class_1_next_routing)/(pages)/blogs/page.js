import React from 'react';
import Link from "next/link";
const blogsData = [
{id:1, title:"blogs 1", description:"news paper bangladesh"},
{id:2, title:"blogs 2", description:"news paper Pakisthan"}
];
export default function Blogs() {
  return (
    <main>
{blogsData.map((blog)=><ul key={blog.id} className="mt-4 p-2">
<li><Link href={`/blogs/posts/${blog.id}`}>{blog.title}</Link></li>
</ul>)}
  </main>
  )
}
  //This page is modify static optimise
  export function generateStaticParams(){
    return blogsData.map((blog)=>({
      id:blog.id.toString(),
    }));
  };