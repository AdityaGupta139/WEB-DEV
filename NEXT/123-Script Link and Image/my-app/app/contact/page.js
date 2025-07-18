import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("welcome to contact page");`}
            </Script>
      i am contact
    </div>
  )
}

export default contact
export const metadata = {
  title: "Contact- FACEBOOK-Connect with the world",
  description: " Contact- platform which helps you to find friends across the world",
};