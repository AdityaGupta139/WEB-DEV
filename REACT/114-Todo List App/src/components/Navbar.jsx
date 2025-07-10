import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-[#111213ff] text-white py-4'>
        <span className='font-bold text-xl mx-8'>OgTask</span>
      <ul className="flex gap-8 mx-9 ">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all hov'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
