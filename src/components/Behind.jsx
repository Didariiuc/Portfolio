import React from 'react'
import BehindPic from '../assets/didar.jpg'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'

function Behind() {
  return (
    <div className="p-6 sm:p-10 text-white">

      <div className='bg-white/10 flex flex-col lg:flex-row justify-between rounded-4xl p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>

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
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <a href="https://github.com/Didariiuc">
                <FaGithub size={28} className="hover:text-black transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
                <FaLinkedin size={28} className="cursor-pointer hover:text-amber-300" />
              </a>

              <a href="https://x.com/didduuuuu?s=21npm run dev
                                     ">
                <FaTwitter size={28} className="cursor-pointer hover:text-amber-300" />
              </a>

              <a href="https://www.facebook.com/share/1EC5NwSCrN/?mibextid=wwXIfr">
                <FaFacebook size={28} className="cursor-pointer hover:text-amber-300" />
              </a>

              <a href="https://youtube.com/@diva_tune?si=IfjX1caapzn50es9">
                <FaYoutube size={28} className="cursor-pointer hover:text-amber-300" />
              </a>

            </div>
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