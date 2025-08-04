"use client"
import React from 'react'
import { useState } from 'react'
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

  
    return (
        <div className='mx-auto max-w-lg bg-white/10 backdrop-blur-sm p-8 my-16 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-white '>Generate your short URL's</h1>
            <div className='flex flex-col gap-2'>
                <input value={url} className='bg-white rounded-md px-4 py-2' type="text" placeholder='Enter Your URL' onChange={e=>{seturl(e.target.value)}} />
                <input value={shorturl} className='bg-white rounded-md px-4 py-2' type="text" placeholder='Enter Your Prefered Short URL' onChange={e=>{setshorturl(e.target.value)}} />
                <button className="btn p-4 rounded-full my-3">
  Generate
</button>

</div>
        </div>
    )
}

export default Shorten