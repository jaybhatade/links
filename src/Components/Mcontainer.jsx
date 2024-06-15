import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Mcontainer() {
  const [state1, setState1] = useState({
    value: '',
    copied: false,
  });

  const [state2, setState2] = useState({
    value: '',
    copied: false,
  });

  const [state3, setState3] = useState({
    value: '',
    copied: false,
  });

  const handleCopy1 = () => {
    setState1({ copied: true });
  };

  const handleCopy2 = () => {
    setState2({ copied: true });
  };

  const handleCopy3 = () => {
    setState3({ copied: true });
  };

  return (
    <div className='text-white bg-black w-[90%] max-w-[600px] h-fit flex flex-col items-center'>
      <div className='w-full h-fit flex flex-col items-center justify-center '>
        <img src="/jay.png" alt="" className='w-24 h-24 rounded-full mt-8 mb-4'/>
        <div className='text-center'>
          <h1 className='text-xl font-bold mb-1'>@jaybhatade7</h1>
          <h2 className='text-zinc-500 text-[17px] tracking-tight font-[700]'>Web Developer | Futurepreneur</h2>
        </div>
        <div className='text-white flex gap-6 my-5'>
          <a href='https://www.instagram.com/jaybhatade.ai/' className='hover:scale-110 transition-all ease-in-out duration-200'><FaInstagram size={30}/></a>
          <a href='https://x.com/jaybhatade' className='hover:scale-110 transition-all ease-in-out duration-200'><FaXTwitter size={30}/></a>
          <a href='mailto:jaybhatade7@gmail.com' className='hover:scale-110 transition-all ease-in-out duration-200'><MdMailOutline size={32}/></a>
          <a href='https://in.linkedin.com/in/jay-bhatade' className='hover:scale-110 transition-all ease-in-out duration-200'><FaLinkedinIn size={30}/></a>
        </div>
      </div>
      <div className='w-full h-fit flex flex-col items-center p-2'>
        <a href='https://jb7-portfolio.netlify.app' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
          
            <img src="/JayBhatade_Logo.png" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
            <h3 className='text-sm md:text-lg font-bold  '>Portfolio | Jay Bhatade</h3>
          <a href=''>
          <CopyToClipboard text="https://jb7-portfolio.netlify.app" onCopy={handleCopy1}>
            <button><TiArrowBackOutline size={25} /></button>
          </CopyToClipboard>
          {state1.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
          </a>
        </a>

        <a href='https://www.ztrendzindia.com' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
          <img src="/Ztrendz logo.webp" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
          <h3 className='text-sm md:text-lg font-bold  '>Ztrendz India (Clothing Brand)</h3>
          
          <a href=''>
          <CopyToClipboard text="https://www.ztrendzindia.com" onCopy={handleCopy2}>
            <button><TiArrowBackOutline size={25} /></button>
          </CopyToClipboard>
          {state2.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
          </a>
        </a>

        <a href='https://www.netspirecreatives.online' className='bg-zinc-900 w-full flex justify-between rounded-xl h-fit my-3 md:my-2 py-2 px-2 items-center hover:scale-105 transition-all ease-in-out duration-200'>
          <img src="/netspire logo.jpg" alt="Portfolio Logo" className='h-12 w-12 rounded-lg' />
          <h3 className='text-sm md:text-lg font-bold  '>Netspire Creatives Website </h3>
          
          <a href=''>
          <CopyToClipboard text="https://www.netspirecreatives.online" onCopy={handleCopy3}>
            <button><TiArrowBackOutline size={25} /></button>
          </CopyToClipboard>
          {state3.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
          </a>
        </a>
      </div>
    </div>
  );
}

export default Mcontainer;