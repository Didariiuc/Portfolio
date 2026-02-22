import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa'


function Contact() {
    return (
        <div className='p-6 sm:p-10 text-white flex flex-col lg:flex-row gap-10'>
            {/* Left Section */}
            <div className='w-full lg:w-1/2 p-5  rounded-4xl'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">
                    Let's <br />
                    <span className="text-amber-500 mt-5">Connect</span>
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl mt-4 text-left">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </h1>

                {/* Email Box */}
                <div className='w-fit'>
                    <div className=' flex items-center gap-3 rounded-full px-6 sm:px-10 md:px-16 py-4 
                                bg-white/10 text-white font-bold text-sm sm:text-lg mt-8 
                                w-full sm:w-auto cursor-pointer'>
                        <FaEnvelope size={40} className="text-amber-500 text-xl sm:text-2xl" />
                        <span className="truncate">mdabubakarsiddikdidar@gmail.com</span>
                    </div>

                    {/* Location Box */}
                    <div className='flex items-center gap-3 rounded-full px-6 sm:px-10 md:px-16 py-4 
                                bg-white/10 text-white font-bold text-sm sm:text-lg mt-4 
                                w-full sm:w-auto cursor-pointer'>
                        <FaMapMarkerAlt size={40} className="text-amber-500 text-xl sm:text-2xl" />
                        <span className="truncate">Chattogram, Bangladesh</span>
                    </div>
                </div>

                {/* Icon portion */}
                <div className='p-2 flex justify-left space-x-4 mt-2'>
                    <FaGithub size={28} className="hover:text-black transition-colors duration-300" />
                    <FaLinkedin size={28} className="hover:text-blue-500 transition-colors duration-300" />
                    <FaTwitter size={28} className="hover:text-sky-400 transition-colors duration-300" />
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-1/2 p-5 bg-white/10 rounded-4xl'>

                {/* Name */}
                <div>
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>

                {/* Message */}
                <div className="mt-4">
                    <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"></textarea>
                </div>

                {/* Submit Button */}
                <button
                    className="mt-6 w-full py-3 bg-amber-600 rounded-lg font-bold text-white 
             hover:bg-white hover:text-amber-600 transition-all duration-300 
             flex items-center justify-center gap-2 group"
                >
                    <FaPaperPlane className="text-white group-hover:text-amber-600 transition-all duration-300" />
                    Send Message
                </button>


            </div>
        </div>
    )
}

export default Contact