import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <nav className='flex justify-between bg-black/30 backdrop-blur-md h-16 items-center px-3 text-white'>
    <div className="logo font-bold ">
      
      <Link href="/">Bitlinks</Link>
      </div>
    <ul className='flex gap-4 items-center '>
      <Link href="/about"><li>About</li></Link>
      <Link href="/"><li>Home</li></Link>
      <Link href="/shorten"><li>Shorten</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
      <li className='flex gap-3 '>
        <Link href="/shorten"><button className='btn bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 font-bold px-2 rounded-lg py-1'>Try Now</button></Link>
        <Link href="github"><button className='btn bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 font-bold px-2 rounded-lg py-1'>GitHub</button></Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar
