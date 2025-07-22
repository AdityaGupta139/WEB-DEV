
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getPasswords = async () => {
        try {
            let req = await fetch("http://localhost:3000/")
            if (req.ok) {
                let passwords = await req.json();
                console.log(passwords)
                setPasswordArray(passwords)
            } else {
                console.error("Failed to fetch passwords");
                toast.error('Failed to load passwords');
            }
        } catch (error) {
            console.error("Error fetching passwords:", error);
            toast.error('Error loading passwords');
        }
    }

    useEffect(() => {
        getPasswords()
    }, [])

    const showPassword = () => {
        if (!ref.current || !passwordRef.current) return;
        
        if (ref.current.src.includes("/eyenot.png")) {
            ref.current.src = "/eye.png"
            passwordRef.current.type = "password"
        } else {
            ref.current.src = "/eyenot.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            try {
                const passwordId = form.id || uuidv4();

                // If editing existing password, delete the old one first
                if (form.id) {
                    await fetch("http://localhost:3000/", { 
                        method: "DELETE", 
                        headers: { "Content-Type": "application/json" }, 
                        body: JSON.stringify({ id: form.id }) 
                    })
                }

                // Save new password
                const newPassword = { ...form, id: passwordId };
                await fetch("http://localhost:3000/", { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(newPassword) 
                })

                // Update local state - refresh from server to ensure consistency
                await getPasswords();

                setform({ site: "", username: "", password: "" })
                toast.success('Password Saved', {
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
            } catch (error) {
                console.error("Error saving password:", error);
                toast.error('Failed to save password');
            }
        } else {
            toast.error('Minimum length should be 3', {
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

    const deletePassword = async (id) => {
        const confirmDelete = window.confirm("Do you really want to delete this password?");
        
        if (confirmDelete) {
            try {
                await fetch("http://localhost:3000/", { 
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify({ id }) 
                })

                setPasswordArray(passwordArray.filter(item => item.id !== id))
                
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
            } catch (error) {
                console.error("Error deleting password:", error);
                toast.error('Failed to delete password');
            }
        }
    }

    const editPassword = (id) => {
        const passwordToEdit = passwordArray.find(i => i.id === id);
        if (passwordToEdit) {
            setform({ ...passwordToEdit });
            setPasswordArray(passwordArray.filter(item => item.id !== id))
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success('Copied to Clipboard!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                toast.error('Failed to copy to clipboard');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                toast.success('Copied to Clipboard!');
            } catch (err) {
                toast.error('Failed to copy to clipboard');
            }
            document.body.removeChild(textArea);
        }
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

            <div className="px-2 mx-4 md: md:mycontainer min-h-[80vh] bg-white/10 backdrop-blur-sm rounded-lg my-4 pb-4 text-white border border-[#3a9ac756] shadow-4xl ">
                <h1 className="text-4xl font-bold text-center py-6">
                    <span className=''>&lt;</span>
                    LOC
                    <span className='text-[#62d2ff]'>KR/&gt;</span>
                </h1>
                <p className='text-[#62d2ff] text-center text-lg'>Your own Password Manager</p>

                <div className='text-black flex flex-col gap-8 p-4 items-center'>
                    <input 
                        value={form.site} 
                        onChange={handleChange} 
                        className='border border-[#3a9bc7] bg-[#d7ebf5] w-full p-4 py-1 rounded-xl' 
                        type="text" 
                        name='site' 
                        placeholder='Enter Website URL' 
                        id='site' 
                    />

                    <div className='flex flex-col md:flex-row gap-8 w-full justify-between'>
                        <input 
                            value={form.username} 
                            onChange={handleChange} 
                            className='border border-[#deeff7] bg-[#d7ebf5] w-full p-4 py-1 rounded-xl' 
                            type="text" 
                            name='username' 
                            placeholder='Enter Username' 
                            id='username' 
                        />
                        <div className="relative">
                            <input 
                                ref={passwordRef} 
                                value={form.password} 
                                onChange={handleChange} 
                                className='border border-[#3a9bc7] bg-[#d7ebf5] w-full p-4 py-1 rounded-xl' 
                                type="password" 
                                name='password' 
                                placeholder='Enter Password' 
                            />
                            <span 
                                className="absolute right-[1px] top-[3px] hover:cursor-pointer" 
                                onClick={showPassword}
                            >
                                <img 
                                    ref={ref} 
                                    className='p-1' 
                                    width={30} 
                                    src="/eye.png" 
                                    alt="Toggle password visibility" 
                                />
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={savePassword} 
                        className='flex items-center gap-2 justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)] text-white p-2 rounded-xl hover:font-bold transition-all w-fit px-8 border border-[#3a9ac756]'
                        type="button"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                        >
                        </lord-icon>
                        {form.id ? 'Update' : 'Save'}
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="md:w-full table-auto rounded-md overflow-hidden border border-[#3a9ac756] shadow-4xl mb-8">
                            <thead className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-black/40 backdrop-blur-3xl'>
                                {passwordArray.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className='py-2 border border-[#3a9ac756] shadow-4xl'>
                                                <div className='flex flex-col md:flex-row justify-center items-center'>
                                                    <a 
                                                        href={item.site} 
                                                        target='_blank' 
                                                        rel="noopener noreferrer"
                                                        className="break-all"
                                                    >
                                                        {item.site}
                                                    </a>
                                                    <img 
                                                        className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' 
                                                        onClick={() => copyText(item.site)} 
                                                        src="/copy.svg" 
                                                        alt="Copy site URL" 
                                                    />
                                                </div>
                                            </td>
                                            <td className='py-2 border border-[#3a9ac756] shadow-4xl'>
                                                <div className='flex flex-col md:flex-row justify-center items-center'>
                                                    <span className="break-all">{item.username}</span>
                                                    <img 
                                                        className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' 
                                                        onClick={() => copyText(item.username)} 
                                                        src="/copy.svg" 
                                                        alt="Copy username" 
                                                    />
                                                </div>
                                            </td>
                                            <td className='py-2 border border-[#3a9ac756] shadow-4xl'>
                                                <div className='flex flex-col md:flex-row justify-center items-center'>
                                                    <span>{"*".repeat(item.password.length)}</span>
                                                    <img 
                                                        className='copybutton size-7 cursor-pointer w-[25px] h-[25px] md:mx-3' 
                                                        onClick={() => copyText(item.password)} 
                                                        src="/copy.svg" 
                                                        alt="Copy password" 
                                                    />
                                                </div>
                                            </td>
                                            <td className='text-center py-2 border border-[#3a9ac756] shadow-4xl'>
                                                <span 
                                                    className='cursor-pointer mx-1' 
                                                    onClick={() => deletePassword(item.id)}
                                                >
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jzinekkv.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#ffffff,secondary:#ffffff"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                                <span 
                                                    className='cursor-pointer mx-1' 
                                                    onClick={() => editPassword(item.id)}
                                                >
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
                                    );
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager