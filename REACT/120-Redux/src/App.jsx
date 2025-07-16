// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently  {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
