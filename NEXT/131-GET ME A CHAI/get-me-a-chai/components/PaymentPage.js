// "use client"
// import React, { useEffect, useState } from 'react'
// import Script from 'next/script'
// import { initiate } from '@/actions/useractions'
// import { useSession } from 'next-auth/react'
// import { fetchuser, fetchpayments } from '@/actions/useractions'
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/navigation'
// import notFound from "next/navigation"
// const PaymentPage = ({ username }) => {

//   const [paymentform, setPaymentform] = useState({namme:"",message:"",amount:""})
//   const [currentUser, setcurrentUser] = useState([])
//   const [payments, setPayments] = useState([])
//   const searchParams=useSearchParams()
//   const router=useRouter()

//   useEffect(() => {
//     getData()
//   }, [])

// useEffect(() => {
//   if(searchParams.get("paymentdone")=="true" ){
// toast.success('Payment has been made', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//             transition: Slide,
//         });
//         router.push(`/${username}`)
//       }
// }, [])


//   const handleChange = (e) => {
//     setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
//   }

//   const getData = async () => {
//     let u = await fetchuser(username)
//     setcurrentUser(u)
//     let dbpayments = await fetchpayments(username)
//     setPayments(dbpayments)
//   }

//   const pay = async (amount) => {
//     // Get the Order Id
//     let a = await initiate(amount, username, paymentform)
//     let orderId = a.id

//     var options = {
//       "key": currentUser.razorpayid,// Enter the Key ID generated from the Dashboard
//       "amount": amount, // Amount is in currency subunits. 
//       "currency": "INR",
//       "name": "Get Me A Chai", //your business name
//       "description": "Test Transaction",
//       "image": "https://example.com/your_logo",
//       "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
//       "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//         "name": "Gaurav Kumar", //your customer's name
//         "email": "gaurav.kumar@example.com",
//         "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
//       },
//       "notes": {
//         "address": "Razorpay Corporate Office"
//       },
//       "theme": {
//         "color": "#3399cc"
//       }
//     }
//     var rzp1 = new Razorpay(options);
//     rzp1.open();

//   }

//   return (
//     <>
//   <ToastContainer
//                 position="top-center"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
                
//             />
//       <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>





//       <div className='cover w-full  relative'>
//         <img className='object-cover w-full h-[350]' src={currentUser.coverpic} alt="" />

//         <div className='absolute -bottom-14 right-[47%] border border-white rounded-xl'>
//           <img width={100} className='rounded-xl' height={100} src={currentUser.profilepic} alt="" />
//         </div>

//       </div>
//       <div className="info relative flex justify-center items-center my-16 flex-col gap-1">
//         <div className='font-bold text-lg'>
//           @{username}
//         </div>
//         <div className='text-slate-400'>
//           Let's help {username} to get some money!!
//         </div>
//         <div className='text-slate-400'>
//           {payments.length} Payments . {currentUser.name} has received ₹{payments.reduce((acc, curr) => acc + curr.amount, 0)}
//         </div>


//         <div className="payment flex gap-3 w-[80%] mt-11">
//           <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-10 ">
//             {/* Show the list of all the supporters */}
//             <h2 className='text-2xl font-bold my-5'>Supporters</h2>
//             <ul className='mx-5 '>
//               {payments.length==0 && <li>No Payments Yet</li>}
//               {payments.map((p, i) => {

//                 return <li key={i} className='my-2 flex gap-2 items-center'>


//                   <img width={33} src="/avatar.gif" alt="" />
//                   <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
//                 </li>
//               })}

//             </ul>
//           </div>
//           <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-10 ">
//             <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
//             <form className='flex flex-col gap-3'>
//               <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Enter Name' className='p-2 rounded-lg bg-slate-800 text-white' />
//               <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Enter Message' className='p-2 rounded-lg bg-slate-800 text-white' />
//               <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder='Enter Amount' className='p-2 rounded-lg bg-slate-800 text-white' />
//               <button type='button'  onClick={() => pay(paymentform.amount*100)} className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-pink-500/10 transition-all duration-200 hover:cursor-pointer disabled:bg-slate-600 disabled:from-fuchsia-200" disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}>Pay Now</button>
//             </form>
//             {/* oR CHOOSE FROM THESE AMOUNTS */}
//             <div className='flex gap-3 mt-5'>
//               <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg' onClick={() => pay(10000)}>₹100</button>
//               <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg' onClick={() => pay(50000)}>₹500</button>
//               <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg' onClick={() => pay(100000)}>₹1000</button>
//               <button className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg' onClick={() => pay(500000)}>₹5000</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// export default PaymentPage

"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments } from '@/actions/useractions'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setcurrentUser] = useState([])
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast.success('Payment has been made', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      router.push(`/${username}`)
    }
  }, [])

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id

    var options = {
      key: currentUser.razorpayid,
      amount,
      currency: "INR",
      name: "ChaiChain",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name,
        email: "gaurav.kumar@example.com",
        contact: "+919876543210"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <ToastContainer theme="dark" position="top-center" autoClose={5000} />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='w-full relative'>
        <img className='object-cover w-full h-[350px]' src={currentUser.coverpic} alt="cover" />
        <div className='absolute -bottom-14 left-1/2 transform -translate-x-1/2 border border-white rounded-xl'>
          <img width={100} height={100} className='rounded-xl' src={currentUser.profilepic} alt="profile" />
        </div>
      </div>

      <div className="flex justify-center items-center my-16 flex-col gap-1 text-center px-4">
        <div className='font-bold text-lg'>@{username}</div>
        <div className='text-slate-400'>Let's help {username} to get some money!!</div>
        <div className='text-slate-400'>
          {payments.length} Payments · {currentUser.name} has received ₹{payments.reduce((acc, curr) => acc + curr.amount, 0)}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 w-full max-w-6xl mt-11">
          <div className="w-full lg:w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-6">
            <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
            <ul className='space-y-3'>
              {payments.length === 0 && <li>No Payments Yet</li>}
              {payments.map((p, i) => (
                <li key={i} className='flex items-center gap-2'>
                  <img width={33} src="/avatar.gif" alt="avatar" />
                  <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 bg-slate-900 rounded-lg text-white backdrop-blur-3xl p-6">
            <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
            <form className='flex flex-col gap-3'>
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Enter Name' className='p-2 rounded-lg bg-slate-800 text-white' />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Enter Message' className='p-2 rounded-lg bg-slate-800 text-white' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder='Enter Amount' className='p-2 rounded-lg bg-slate-800 text-white' />
              <button type='button' onClick={() => pay(paymentform.amount * 100)}
                className="text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-600 disabled:from-fuchsia-200"
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>
                Pay Now
              </button>
            </form>
            <div className='flex flex-wrap gap-3 mt-5'>
              {[10000, 50000, 100000, 500000].map((amt, i) => (
                <button key={i} className='bg-slate-700 hover:bg-slate-800 p-2 rounded-lg' onClick={() => pay(amt)}>₹{amt / 100}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage;
