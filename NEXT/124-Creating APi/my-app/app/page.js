"use client"
import Image from "next/image"

export default function Home() {
  const handleClick = async () => {
    let data= { name: "The OGAG", age: 20 };
    let a = await fetch("/api/add", { method: "POST", headers: { "Content-Type": "application/json",

     }, 
     body: JSON.stringify(data),
     });
    let res = await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1 className='text-xl font-bold'>

        next.js api route demo
      </h1>
      <button onClick={handleClick} className='bg-white text-black '>Click me</button>
    </div>
  )
}


