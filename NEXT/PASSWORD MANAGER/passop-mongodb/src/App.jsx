import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[83vh]'>
<div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#62d2ff_100%)]">


      <Manager />
</div>
      </div>
      <Footer/>
    </>
  )
}

export default App
