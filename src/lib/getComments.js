export default async function postComments(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return res.json();
};