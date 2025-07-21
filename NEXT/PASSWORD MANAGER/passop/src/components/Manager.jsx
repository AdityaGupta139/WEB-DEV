import React from 'react'
import { useRef, useState, useEffect } from 'react'
const Manager = () => {
    const ref = useRef()
    const passwordRef=useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }



    }, [])


    const showPassword = () => {
        passwordRef.current.type="text"
        if (ref.current.src.includes("/eyenot.png")) {
            ref.current.src = "/eye.png"
            passwordRef.current.type="password"
        }
        else {
            ref.current.src = "/eyenot.png"
            passwordRef.current.type="text"
        }

    }

    const savePassword = () => {
        const newPasswordArray = [...passwordArray, form];
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(newPasswordArray);
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }




    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]"></div>


            <div className="mycontainer bg-white/10 backdrop-blur-sm rounded-lg my-4 text-white border solid border-[#3a9ac756] shadow-4xl ">


                <h1 className="text-4xl font-bold text-center py-6"><span className=''>&lt;</span>
                    Pass
                    <span className='text-[#62d2ff]'>OP/&gt;</span></h1>
                <p className='text-[#62d2ff] text-center text-lg'>Your own Password Manager</p>


                <div className='text-black flex flex-col gap-8 p-4 items-center'>

                    <input value={form.site} onChange={handleChange} className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" name='site' placeholder='Enter Website URL' />

                    <div className='flex gap-8 w-full justify-between'>

                        <input value={form.username} onChange={handleChange} className=' border solid border-[#deeff7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="text" name='username' placeholder='Enter Username' />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} className=' border solid border-[#3a9bc7] bg-[#d7ebf5]  w-full p-4 py-1 rounded-xl' type="password" name='password' placeholder=' Enter Password' />
                            <span className="absolute right-[1px] top-[3px] hover:cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className='p-1 ' width={30} src="/eye.png" alt="" />
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
                        Add Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 &&
                    <table className="table-auto w-full rounded-md overflow-hidden border solid border-[#3a9ac756] shadow-4xl">
                        <thead className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] '>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-black/40 backdrop-blur-3xl '>
                        {passwordArray.map((item,index)=>{
                        return <tr key={index}>
                                <td className='text-center w-32 py-2 border solid border-[#3a9ac756] shadow-4xl'><a href={item.site} target='_blank'>{item.site}</a></td>
                                <td className='text-center w-32 py-2 border solid border-[#3a9ac756] shadow-4xl'>{item.username}</td>
                                <td className='text-center w-32 py-2 border solid border-[#3a9ac756] shadow-4xl'>{item.password}</td>
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
