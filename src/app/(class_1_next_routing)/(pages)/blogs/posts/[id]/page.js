//Link this page description
import Link from 'next/link';
import { Suspense } from "react";
import singlePost  from '@/lib/singlePost';
import postComments from '@/lib/getComments'
import getAllposts from '@/lib/getAllposts';
import Comments from "@/components/comments"
export async function generateMetadata({params}){
  const  id  = (await params).id;
  const post =  await singlePost(id);
//this is metadata is title 
return {
  title:post.title,
  description:post.body
};
}

export default async function PostDetails({params}) {
const  id  = (await params).id;
const postPromise = singlePost(id);
const postCommentsPromiss = postComments(id);

//peralal api use something problem..
//const [post,comments] = await Promise.all([postsPromis, postCommentsPromiss]);

const post = await postPromise;
return (
<div><ul className="p-2 bg-pink-100 font-semibold text-sm">
<li>ID: {post.id}</li>
<li>Title: {post.title}</li>
<li>Body: {post.body}</li>
</ul>
<Suspense fallback={<p>Loading comments..</p>}>
   <Comments promise={postCommentsPromiss} /> 
    </Suspense>
<Link href="/posts" className="bg-green-600 px-4 py-1 mt-6 center">Back now</Link> 
</div>
)
  };
  
  //This page is modify static optimise
  export async function generateStaticParams(){
    const posts =await getAllposts()
    return posts.map((post)=>({
      id:post.id.toString(),
    }));
  };