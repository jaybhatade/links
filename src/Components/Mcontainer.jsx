import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Mcontainer() {
  return (
    <div className='text-white bg-black w-[90%] max-w-[600px] h-fit flex flex-col items-center'>
        <div className='w-full h-fit flex flex-col items-center justify-center '>
          <img src="/jay.png" alt="" className='w-24 h-24 rounded-full mt-8 mb-4'/>
          <div className='text-center'>
            <h1 className='text-xl font-bold mb-1'>@jaybhatade7</h1>
            <h2 className='text-zinc-500 text-[17px] tracking-tight font-[700]'>Web Developer | Entreprenuer</h2>
          </div>
          <div className='text-white flex gap-6 my-5'>
            <a href='https://www.instagram.com/jaybhatade.ai/' className='hover:scale-110 transition-all ease-in-out duration-200'><FaInstagram size={30}/></a>
            <a href='https://x.com/jaybhatade' className='hover:scale-110 transition-all ease-in-out duration-200'><FaXTwitter size={30}/></a>
            <a href='mailto:jaybhatade7@gmail.com' className='hover:scale-110 transition-all ease-in-out duration-200'><MdMailOutline size={32}/></a>
            <a href='https://x.com/jaybhatade' className='hover:scale-110 transition-all ease-in-out duration-200'><FaLinkedinIn size={30}/></a>


          </div>
        </div>
        <div className='w-full h-fit flex flex-col items-center p-2'>
          
          <a href='https://jb7-portfolio.netlify.app' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
            <img src="/JayBhatade_Logo.png" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
            <h3 className='text-sm md:text-lg font-bold  '>Portfolio | Jay Bhatade</h3>
            <TiArrowBackOutline size={25} />
          </a>

          <a href='https://www.ztrendzindia.com' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
            <img src="/Ztrendz logo.webp" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
            <h3 className='text-sm md:text-lg font-bold  '>Ztrendz India (Clothing Brand)</h3>
            <TiArrowBackOutline size={25} />
          </a>

          <a href='hhtps://www.netspirecreatives.online' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
            <img src="/netspire logo.jpg" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
            <h3 className='text-sm md:text-lg font-bold  '>Netspire Creatives Website </h3>
            <TiArrowBackOutline size={25} />
          </a>
        </div>
        
    </div>
  )
}

export default Mcontainer
