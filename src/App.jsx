import React from 'react'
import './App.css'
import Mcontainer from './Components/Mcontainer'

function App() {
  return (
    <>
      <div className='bg-black w-full h-screen min-h-screen  flex flex-col justify-between items-center  text-white '>
        <div className="w-full h-[95%] flex justify-center mt-10 md:mt-0 md:items-center">
        <Mcontainer />
        </div>

        <h3 className='text-sm text-white h-[5%] w-full text-center py-6'> Deisgned & Developed by Jay Bhatade</h3>
      </div>
    </>
  )
}

export default App
