import React from 'react'

const Navbar = () => {
    return (
        <nav className='  bg-black-800  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] '>
            <div className="mycontainer display flex justify-between items-center text-white gap-4">

                <div className='logo font-bold text-2xl [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] p-4 rounded-full '>
                    <span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] p-5' href="">Home</a>
                        <a className='hover:font-bold hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] p-5' href="">About</a>
                        <a className='hover:font-bold hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] p-5' href="">Contact</a>
                    </li>
                </ul>
                <button className='text-white [background:radial-gradient(125%_125%_at_50%_10%,#000,#62d2ff_100%)] p-4 rounded-full flex justify-between items-center'>
                    
                    <img width={30} className='invert  ' src="/github.svg" alt="" />
                    <span className='font-bold px-2'>GitHub</span>




                </button>
            </div>
        </nav>

    )
}

export default Navbar
