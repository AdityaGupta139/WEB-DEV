import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='text-white flex flex-col justify-center items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] fixed bottom-0 w-full'>
<div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_20%,#62d2ff_100%)] rounded-full flex flex-col justify-center items-center py-1 px-4'>

    <div className='logo font-bold text-2xl  '>
                    <span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span>
                </div>
    <div className='flex justify-center items-center'>
      Created with <img className='w-7 mx-2' src="heart.png" alt="" />by The OGAG
    </div>
</div>
    </div>
    </>
  )
}

export default Footer
