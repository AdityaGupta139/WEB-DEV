import React from 'react'

const Navbar = () => {
  return (
    <nav className=' text-white flex items-center justify-between px-4 h-16   	bg-slate-900 backdrop-blur-3xl  border border-pink-500/20'>
        <div className='logo text-lg font-bold'>GetmeAchai</div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
    
        </ul>
    </nav>
  )
}

export default Navbar
