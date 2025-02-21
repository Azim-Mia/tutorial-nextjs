'use client'
import React from 'react';
import {useFormStatus} from 'react-dom';
async function handleSubmit(query){
  await new Promise((res)=>setTimeout(res,1000));
};
const Submit =()=>{
const {pending} = useFormStatus()
  return ( <button type="submit" className="bg-green-700" disabled={pending}>{pending ? "submiting...":"submit"}</button>
  )
}
export default function UseFormStatus() {
  return (
    <main className="mt-10">
  <form action={handleSubmit}>
  <Submit />
  </form>
  </main>
  )
}