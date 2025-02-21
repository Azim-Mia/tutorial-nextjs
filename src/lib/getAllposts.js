export default async function getAllposts(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    cache:"no-store",
    next:{
      revalidate:30,
    },
  });
  return res.json();
};