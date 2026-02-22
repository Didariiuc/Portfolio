import React from 'react'
import BehindPic from '../assets/didar.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Behind() {
  return (
    <div className="p-6 sm:p-10 text-white">

      <div className='bg-white/20 flex flex-col lg:flex-row justify-between rounded-4xl p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>
        
        {/* Written portion */}
        <div className='w-full lg:w-1/2 text-base sm:text-lg text-slate-300 p-2 sm:p-4'>
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-6">
            Behind the <span className='text-amber-600'>Code</span>
          </h2>
          <p>
            Beyond the lines of code, I am a passionate programmer with a love for problem-solving and creativity. <br /><br />
            I thrive on challenges and enjoy exploring new technologies to create innovative solutions. When I'm not coding, you can find me indulging in my hobbies, which include competitive programming, data structures and algorithms, C++, videography, and more.
            <br /><br />
            I believe that programming is not just a profession but a way of life, and I am committed to continuously learning and growing in this ever-evolving field.
          </p>
          <div className='flex space-x-4 mt-5'>
            <FaGithub size={28} className="hover:text-amber-500 transition-colors duration-300" />
            <FaLinkedin size={28} className="hover:text-blue-500 transition-colors duration-300" />
            <FaTwitter size={28} className="hover:text-sky-400 transition-colors duration-300" />
          </div>
        </div>

        {/* Image portion */}
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <img 
            src={BehindPic} 
            alt="Didar's behind the scenes image" 
            width={220}
            height={220} 
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_#ff8834]' 
          />
        </div>
      </div>
    </div>
  )
}

export default Behind