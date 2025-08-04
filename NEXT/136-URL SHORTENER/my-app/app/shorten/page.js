"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState()

    const generate = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshorturl("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                console.log(result)
                alert(result.message)

            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-white/10 backdrop-blur-sm p-8 my-16 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-white '>Generate your short URL's</h1>
            <div className='flex flex-col gap-2'>
                <input value={url} className='bg-white rounded-md px-4 py-2' type="text" placeholder='Enter Your URL' onChange={e => { seturl(e.target.value) }} />
                <input value={shorturl} className='bg-white rounded-md px-4 py-2' type="text" placeholder='Enter Your Prefered Short URL' onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className="btn p-4 rounded-full my-3">Generate</button>

            </div>
            {generated && (
  <>
    <span className='font-bold text-lg text-white'>Your Link</span>
    <code className='text-white'>
      <Link href={generated} target="_blank" className="text-white underline">
        {generated}
      </Link>
    </code>
  </>
)}
        </div>
    )
}

export default Shorten