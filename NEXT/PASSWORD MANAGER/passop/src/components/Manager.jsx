import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }



    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/eyenot.png")) {
            ref.current.src = "/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "/eyenot.png"
            passwordRef.current.type = "text"
        }

    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log(newPasswordArray);
            setform({ site: "", username: "", password: "" })
            toast.success('Pasword Saved', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        else {
            

                toast.error('Minimum length should be 3 ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });

            
        }
    }
    const deletePassword = (id) => {
        toast.success('Password Deleted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
        console.log("Deleting Password with id", id)

        setPasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

    }
    const editPassword = (id) => {
        console.log("Editing Password with id", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        // // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        // // console.log(newPasswordArray);
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast.success('Copied to Clipboard!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });

        navigator.clipboard.writeText(text)
    }



    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]"></div>


            <div className="px-2 mx-4 md: md:mycontainer min-h-[80vh] bg-white/10 backdrop-blur-sm rounded-lg my-4 pb-4 text-white border solid border-[#3a9ac756] shadow-4xl ">


                <h1 className="text-4xl font-bold text-center py-6"><span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span></h1>
                <p className='text-[#62d2ff] text-center text-lg'>Your own Password Manager</p>


                <div className='text-black flex flex-col gap-8 p-4 items-center'>

                    <input value={form.site} onChange={handleChange} className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" name='site' placeholder='Enter Website URL' id='site' />

                    <div className='flex flex-col md:flex-row gap-8 w-full justify-between'>

                        <input value={form.username} onChange={handleChange} className=' border solid border-[#deeff7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" name='username' placeholder='Enter Username' id='username' />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="password" name='password' placeholder=' Enter Password' />
                            <span className="absolute right-[1px] top-[3px] hover:cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className='p-1 ' width={30} src="/eye.png" alt="" id='password' />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex items-center gap-2 justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] text-white p-2 rounded-xl hover:font-bold transition-all  w-fit px-8  border solid border-[#3a9ac756]'>
                        <lord-icon
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                        >
                        </lord-icon>
                        Save
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 &&
                        <table className=" md:w-full table-auto  rounded-md overflow-hidden  border solid border-[#3a9ac756] shadow-4xl mb-8">
                            <thead className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] '>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-black/40 backdrop-blur-3xl '>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='   py-2 border solid border-[#3a9ac756] shadow-4xl'>
                                            <div className='flex flex-col md:flex-row justify-center items-center'>

                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <img className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' onClick={() => copyText(item.site)} src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className=' py-2 border solid border-[#3a9ac756] shadow-4xl'>
                                            <div className='flex flex-col md:flex-row justify-center items-center'>
                                                <span>{item.username}</span>
                                                <img className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' onClick={() => copyText(item.username)} src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className=' py-2 border solid border-[#3a9ac756] shadow-4xl'>
                                            <div className='flex flex-col md:flex-row justify-center items-center'>
                                                <span>{item.password}</span>
                                                <img className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' onClick={() => copyText(item.password)} src="/copy.svg" alt="" />
                                            </div>
                                        </td>
                                        <td className='text-center py-2 border solid border-[#3a9ac756] shadow-4xl'>
                                            <span className='cursor-pointer mx-1' onClick={() => deletePassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/jzinekkv.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => editPassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>

                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div >




        </>
    )
}

export default Manager
