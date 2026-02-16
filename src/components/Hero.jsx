import React from 'react'
import HeroPic from '../assets/didar.jpg'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <div className=' flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 items-center ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Md <br />Abu Bakar <br />Siddik Didar</h1>
        </div>
        <div className='lg:w-1/3 items-center ssm:w-fit'>
           <p className='mt-10 text-xl text-slate-300 font-sans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel consequuntur veritatis fuga ad quis earum rem sapiente quam culpa laborum maiores alias molestiae omnis, iste sequi animi tempore atque.
           </p>
        </div>
        <div className='lg:w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="" width={350} height={350} className='rounded-full w-full border-8 border-white'/>

        </div>
        <div className='lg:w-1/3 items-center ssm:w-fit'>
          <p className='text-4xl mb-4'>About Me</p>
          <p className='text-slate-300 mb-4' >Let's build quality in programming</p>
          <button className='bg-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded'>
            Show More...
          </button>
          <div className='cursor-pointer flex mt-5'>
            <FaTwitter size={30} className='inline-block mx-2 text-2xl cursor-pointer hover:text-amber-500' />
            <FaFacebook size={30} className='inline-block mx-2  text-2xl cursor-pointer hover:text-amber-500' />
            <FaInstagram size={30} className='inline-block mx-2  text-2xl cursor-pointer hover:text-amber-500' />
            <FaYoutube size={30} className='inline-block mx-2  text-2xl cursor-pointer hover:text-amber-500' />
          </div>
        </div>
    </div>
  )
}

export default Hero