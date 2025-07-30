// "use client"
// import React, { useEffect, useState } from 'react'
// import { useSession } from "next-auth/react"
// import { useRouter } from 'next/navigation'
// import { fetchuser, updateProfile } from '@/actions/useractions'
// import { Slide, ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Dashboard = () => {
//     const { data: session } = useSession()
//     const router = useRouter()
//     const [form, setform] = useState({})

//     useEffect(() => {
//         if (!session) router.push('/login')
//         else getData()
//         // eslint-disable-next-line
//     }, [session])

//     const getData = async () => {
//         let u = await fetchuser(session.user.name)
//         setform(u)
//     }

//     const handleChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await updateProfile(form, session.user.name)
//         toast.success('Profile Updated', {
//             position: "top-center",
//             autoClose: 5000,
//             theme: "dark",
//             transition: Slide,
//         });
//     }

//     return (
//         <>
//             <ToastContainer
//                 position="top-center"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 pauseOnHover
//                 closeOnClick={false}
//                 draggable
//                 theme="dark"
//                 transition={Bounce}
//             />

//             <div className='container mx-auto py-6 px-2 sm:px-4 md:px-6 lg:px-8'>
//                 <h1 className='text-center my-6 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
//                     Welcome to your Dashboard
//                 </h1>

//                 <form 
//                     className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-slate-800/40 border border-slate-600 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-md"
//                     onSubmit={handleSubmit}
//                 >
//                     {/* Name */}
//                     <div className='my-3'>
//                         <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-100">Name</label>
//                         <input
//                             value={form.name || ""}
//                             onChange={handleChange}
//                             type="text"
//                             name='name'
//                             id="name"
//                             placeholder="Your name"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Email */}
//                     <div className="my-3">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">Email</label>
//                         <input
//                             value={form.email || ""}
//                             onChange={handleChange}
//                             type="email"
//                             name='email'
//                             id="email"
//                             placeholder="your@email.com"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Username */}
//                     <div className='my-3'>
//                         <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-100">Username</label>
//                         <input
//                             value={form.username || ""}
//                             onChange={handleChange}
//                             type="text"
//                             name='username'
//                             id="username"
//                             placeholder='your username'
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Profile pic */}
//                     <div className="my-3">
//                         <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-100">Profile Picture URL</label>
//                         <input
//                             value={form.profilepic || ""}
//                             onChange={handleChange}
//                             type="text"
//                             name='profilepic'
//                             id="profilepic"
//                             placeholder="Paste your profile image URL"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Cover pic */}
//                     <div className="my-3">
//                         <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-100">Cover Picture URL</label>
//                         <input
//                             value={form.coverpic || ""}
//                             onChange={handleChange}
//                             type="text"
//                             name='coverpic'
//                             id="coverpic"
//                             placeholder="Paste your cover image URL"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Razorpay id */}
//                     <div className="my-3">
//                         <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-100">Razorpay Id</label>
//                         <input
//                             value={form.razorpayid || ""}
//                             onChange={handleChange}
//                             type="password"
//                             name='razorpayid'
//                             id="razorpayid"
//                             placeholder="Your Razorpay ID"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
//                     {/* Razorpay secret */}
//                     <div className="my-3">
//                         <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-100">Razorpay Secret</label>
//                         <input
//                             value={form.razorpaysecret || ""}
//                             onChange={handleChange}
//                             type="password"
//                             name='razorpaysecret'
//                             id="razorpaysecret"
//                             placeholder="Your Razorpay Secret"
//                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                         />
//                     </div>
                    
//                     {/* Submit Button */}
//                     <div className="my-6">
//                         <button
//                             type="submit"
//                             className="w-full py-2.5 px-5 rounded-lg font-medium text-sm text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 shadow-md shadow-pink-500/10 transition-all duration-200 focus:ring-2 focus:ring-pink-500/30"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Dashboard



"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { Slide, ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) router.push('/login')
        else getData()
        // eslint-disable-next-line
    }, [session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(form, session.user.name)
        toast.success('Profile Updated', {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
            transition: Slide,
        });
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                pauseOnHover
                closeOnClick={false}
                draggable
                theme="dark"
                transition={Bounce}
            />

            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8'>
                    Welcome to your Dashboard
                </h1>

                <form 
                    className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-slate-800/40 border border-slate-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-md space-y-6"
                    onSubmit={handleSubmit}
                >
                    {/* Form Fields */}
                    {[
                        { label: "Name", type: "text", name: "name", placeholder: "Your name" },
                        { label: "Email", type: "email", name: "email", placeholder: "your@email.com" },
                        { label: "Username", type: "text", name: "username", placeholder: "your username" },
                        { label: "Profile Picture URL", type: "text", name: "profilepic", placeholder: "Paste your profile image URL" },
                        { label: "Cover Picture URL", type: "text", name: "coverpic", placeholder: "Paste your cover image URL" },
                        { label: "Razorpay ID", type: "password", name: "razorpayid", placeholder: "Your Razorpay ID" },
                        { label: "Razorpay Secret", type: "password", name: "razorpaysecret", placeholder: "Your Razorpay Secret" }
                    ].map((field, index) => (
                        <div key={index}>
                            <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-100">{field.label}</label>
                            <input
                                value={form[field.name] || ""}
                                onChange={handleChange}
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                    ))}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-br from-pink-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 shadow-md shadow-pink-500/20 transition-all duration-200 focus:ring-2 focus:ring-pink-500/40"
                        >
                            Save Profile
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard