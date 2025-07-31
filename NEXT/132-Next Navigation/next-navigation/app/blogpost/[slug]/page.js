"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const page = () => {
    const params=useParams()
    const router=useRouter()
  return (
    <>
    <div>
      {params.slug}
    </div>
    <div><button onClick={()=>router.push("/dashboard")}>Dashboard</button></div>
    </>
  )
}

export default page
