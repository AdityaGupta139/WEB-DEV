import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: true })}  type="text" />
          <br />
          <input {...register("password", { required: true })}  type="password"/>
          <br />
          <input type="submit" value='submit'/>
        </form>
      </div>
    </>
  )
}

export default App
