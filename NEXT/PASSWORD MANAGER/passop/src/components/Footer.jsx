import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='text-white flex flex-col justify-center items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]  bottom-0 w-full'>
<div className='m-1 [background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#62d2ff_100%)] rounded-full flex flex-col justify-center items-center py- px-4'>

    <div className='logo font-bold text-xl  '>
                    <span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span>
                </div>
    <div className='flex justify-center items-center'>
      Created with <img className='w-5 mx-2' src="heart.png" alt="" />by The OGAG
    </div>
</div>
    </div>
    </>
  )
}

export default Footer
