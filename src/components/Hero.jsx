import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi';

function Hero() {
  return (
    <div className=' flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Md <br />Abu Bakar <br />Siddik Didar</h1>
        </div>
        <div>
           <p className='mt-10 text-xl text-slate-300 font-sans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel consequuntur veritatis fuga ad quis earum rem sapiente quam culpa laborum maiores alias molestiae omnis, iste sequi animi tempore atque.
           </p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Hero