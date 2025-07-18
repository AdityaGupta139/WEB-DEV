import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='container my-5'>
     <Image className='mx-auto ' width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" />
    </div>
  )
}

export default page
