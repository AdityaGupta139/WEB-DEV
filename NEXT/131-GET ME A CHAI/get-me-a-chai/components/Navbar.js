// "use client"
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { useSession, signIn, signOut } from "next-auth/react"



// const Navbar = () => {
//   const { data: session } = useSession()
//   const [showdropdown, setShowropdown] = useState(false)
//   // if (session) {
//   //   return <>
//   //       Signed in as {session.user.email} <br />
//   //       <button onClick={()=>signOut}>Sign out</button>
//   //     </>

//   // }
//   return (
//     <nav className='relative z-30 overflow-visible text-white flex items-center justify-between px-4 h-16 bg-slate-900 backdrop-blur-3xl border border-pink-500/20 '>

//       <Link href={"/"} className='logo text-lg font-bold flex justify-center items-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>

//         <img width={44} src="tea.gif" alt="" />
//         <span>ChaiChain</span>
//       </Link>

//       {/* <ul className='flex justify-between gap-4'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Projects</li>
//             <li>Sign Up</li>
//             <li>Login</li>
    
//         </ul> */}

//       <div className='relative'>
//         {session && <>

//           <button onClick={() => setShowropdown(!showdropdown)} onBlur={() => {
//             setTimeout(() => {
//               setShowropdown(false)
//             }, 100);
//           }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" type="button">
//             Welcome {session.user.email}
//             <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//             </svg>
//           </button>

//           <div id="dropdown" className={` ${showdropdown ? "" : "hidden"} absolute left-[125px] z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
//             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//               <li>
//                 <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//               </li>
//               <li>
//                 <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
//               </li>

//               <li>
//                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => signOut()}>Sign out</Link>
//               </li>
//             </ul>
//           </div>

//         </>
//         }


//         {session && <button type="button" className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" onClick={() => { signOut() }} >Logout</button>}

//         {!session && <Link href={"/login"}>
//           <button type="button" className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer" >Login</button></Link>}
//       </div>
//     </nav>
//   )
// }

// export default Navbar


"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='relative z-30 w-full bg-slate-900 text-white border-b border-pink-500/20 shadow-sm'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>

        {/* Logo */}
        <Link href="/" className='flex items-center space-x-2 text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          <img width={40} src="/tea.gif" alt="Logo" />
          <span>ChaiChain</span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-4'>
          {session ? (
            <>
              {/* Dropdown Button */}
              <div className='relative'>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                  className="bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 text-sm px-5 py-2.5 rounded-lg shadow-md font-medium inline-flex items-center transition-all duration-200"
                >
                  Welcome {session.user.email}
                  <svg className="w-2.5 h-2.5 ml-2" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-sm z-50 ${showDropdown ? '' : 'hidden'}`}>
                  <ul className="py-2 text-gray-700 dark:text-gray-200">
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                    </li>
                    <li>
                      <button onClick={() => signOut()} className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 px-5 py-2.5 rounded-lg text-sm font-medium shadow-md transition-all duration-200">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-slate-800 px-4 py-4 space-y-4 text-sm'>
          {session ? (
            <>
              <Link href="/dashboard" className="block text-white hover:text-pink-300" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link href={`/${session.user.name}`} className="block text-white hover:text-pink-300" onClick={() => setMenuOpen(false)}>Your Page</Link>
              <button onClick={() => { signOut(); setMenuOpen(false); }} className="block text-left w-full text-white hover:text-pink-300">Sign Out</button>
            </>
          ) : (
            <Link href="/login" className="block text-white hover:text-pink-300" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
