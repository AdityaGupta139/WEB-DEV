import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full  relative'>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=2XoNFaHKobezslMvn4tj7xA6qgIPOBaiMNFvHpZ859g%3D&token-time=1754265600" alt="" />

        <div className='absolute -bottom-14 right-[47%] border border-white rounded-xl'>
          <img width={100} className='rounded-xl' height={100} src="https://i.pinimg.com/736x/e1/73/75/e17375bf4c32e27061867a191f350e96.jpg" alt="" />
        </div>

      </div>
      <div className="info relative flex justify-center items-center my-16 flex-col gap-1">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          19,212 members. 100 posts. $18,700/release
        </div>


        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-10 ">
            {/* Show the list of all the supporters */}
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 '>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="" />
                <span>Shubham Donate <span className='font-bold'>$30</span> with a message-"Full support bro..Lots of ❤️"</span>
                </li>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="" />
                <span>Shubham Donate <span className='font-bold'>$30</span> with a message-"Full support bro..Lots of ❤️"</span>
                </li>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="" />
                <span>Shubham Donate <span className='font-bold'>$30</span> with a message-"Full support bro..Lots of ❤️"</span>
                </li>
              <li className='my-2 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="" />
                <span>Shubham Donate <span className='font-bold'>$30</span> with a message-"Full support bro..Lots of ❤️"</span>
                </li>
              
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-10 ">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <form className='flex flex-col gap-3'>
              <input type="text" placeholder='Enter Name' className='p-2 rounded-lg bg-slate-800 text-white' />
              <input type="text" placeholder='Enter Amount' className='p-2 rounded-lg bg-slate-800 text-white' />
              <input type="text" placeholder='Enter Message' className='p-2 rounded-lg bg-slate-800 text-white' />
              <button className='"text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer"'>Pay Now</button>
            </form>
            {/* oR CHOOSE FROM THESE AMOUNTS */}
            <div className='flex gap-3 mt-5'>
              <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg'>₹100</button>
              <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg'>₹500</button>
              <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg'>₹1000</button>
              <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg'>₹5000</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
