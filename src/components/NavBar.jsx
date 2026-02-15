import React from 'react'
import { CgNametag } from "react-icons/cg";

function NavBar() {
  return (
    <div>
      <div>
        <div className='flex items-center justify-between p-10 lg:flex-row'>
          <div >
            <a className='text-white font-mono text-3xl tracking-wider flex items-center' href="#"><CgNametag />Havaa Tech</a>
          </div>

          <div className='space-x-4'>
            <div className='ssm:hidden lg:block space-x-2'>
              <a className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl' href="#">Skills</a>
              <a className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl' href="#">Projects</a>
              <a className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl' href="#">Testimonial</a>
              <a className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl' href="#">Education</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar