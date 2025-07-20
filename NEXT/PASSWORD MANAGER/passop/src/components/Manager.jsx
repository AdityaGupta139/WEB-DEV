import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]"></div>


            <div className="mycontainer bg-white/10 backdrop-blur-sm rounded-lg my-4 text-white border solid border-[#3a9ac756] shadow-4xl ">


                <h1 className="text-4xl font-bold text-center py-6"><span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span></h1>
                <p className='text-[#62d2ff] text-center text-lg'>Your own Password Manager</p>


                <div className='text-black flex flex-col gap-8 p-4 items-center'>

                    <input className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" placeholder='Enter Website URL' />

                    <div className='flex gap-8 w-full justify-between'>

                        <input className=' border solid border-[#deeff7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" placeholder='Enter Username'/>
                        <input className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" placeholder=' Enter Password'/>
                    </div>
                    <button className='flex items-center gap-2 justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] text-white p-2 rounded-xl hover:font-bold transition-all  w-fit px-8  border solid border-[#3a9ac756]'>
                        <lord-icon
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div >



        </>
    )
}

export default Manager
