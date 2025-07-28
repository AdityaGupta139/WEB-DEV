"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"



const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowropdown] = useState(false)
  // if (session) {
  //   return <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={()=>signOut}>Sign out</button>
  //     </>

  // }
  return (
    <nav className='relative z-30 overflow-visible text-white flex items-center justify-between px-4 h-16 bg-slate-900 backdrop-blur-3xl border border-pink-500/20'>

      <Link href={"/"} className='logo text-lg font-bold flex justify-center items-center'>

        <img width={44} src="tea.gif" alt="" />
        <span>GetmeAchai</span>
      </Link>

      {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
    
        </ul> */}

      <div className='relative'>
        {session && <>

          <button onClick={() => setShowropdown(!showdropdown)} onBlur={() => {
            setTimeout(() => {
              setShowropdown(false)
            }, 100);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" type="button">
            Welcome {session.user.email}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" className={` ${showdropdown ? "" : "hidden"} absolute left-[125px] z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>

              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => signOut()}>Sign out</Link>
              </li>
            </ul>
          </div>

        </>
        }


        {session && <button type="button" className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" onClick={() => { signOut() }} >Logout</button>}

        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" >Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
