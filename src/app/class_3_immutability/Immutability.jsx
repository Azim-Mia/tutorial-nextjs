'use client';
import {useState} from 'react';
const Immutability =()=>{
  const [users,setUsers] = useState([{
    id:crypto.randomUUID(),
    name:"Md Rakib",
    age:29
  }])
  const handleEvent =(id,name)=>{
    //copy this user
    const copyUser = [...users];
 const found =copyUser.find((user)=>user.id === id);
  found.name = name;
 setUsers(copyUser);
  }
  const handleUser = () =>{
    const newUser = {
      id:crypto.randomUUID(),
      name:"Sabbir",
      age:10,
    }
    //return new Array
setUsers([...users,newUser]);
  }
  return (<div>
<ul>
{
users.map((user)=><li key={user.id} className="flex gap-4 p-2">
<p>Name : {user.name}</p>
<p>Age : {user.age}</p>
<button onClick={()=>handleEvent(user.id,"Milon")} className="bg-gray-light py-1 px-2 rounded-md hover:bg-pink-400">Change</button>
</li>)
}
</ul>
<button onClick={handleUser} className="bg-gray-light py-1 px-2 rounded-md hover:bg-pink-400">Add to User</button>
  </div>)
}
export default Immutability;