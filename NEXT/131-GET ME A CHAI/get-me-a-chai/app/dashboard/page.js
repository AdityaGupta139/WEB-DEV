"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'
const DashboardPage = () => {
   
  return (
    // <div>
    //   {/* A full form of dashboard where you can fill all the details of user before that there has to be heading of Welcome to your dashboard form should also contain razorpay credentials
    //    */}
    //   <div className='text-center text-2xl font-bold my-10'>Welcome to your Dashboard</div>
    //   <div className='flex justify-center items-center flex-col gap-5'> 
        
    //     <form className='flex flex-col gap-5 w-[50%] my-2'>
    //       <input type="text" placeholder='Enter your Name' className='p-2 rounded-lg bg-slate-800 text-white my-2' />
    //       <input type="email" placeholder='Enter your Email' className='p-2 rounded-lg bg-slate-800 text-white my-2' />
    //       <input type="text" placeholder='Enter your Username' className='p-2 rounded-lg bg-slate-800 text-white my-2' />
    //       <input type="text" placeholder='Enter your Razorpay Key ID' className='p-2 rounded-lg bg-slate-800 text-white my-2' />
    //       <input type="text" placeholder='Enter your Razorpay Secret Key' className='p-2 rounded-lg bg-slate-800 text-white my-2' />
    //       <button className='"text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" p-2  my-2'>Submit</button>
    //     </form>

    // </div>
    //     </div>
<Dashboard />

  )
}

export default DashboardPage
