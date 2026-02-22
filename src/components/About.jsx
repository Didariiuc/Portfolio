import React from 'react'
import AboutPic from '../assets/didar.jpg'
import { FaDownload, FaEnvelope, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Skills from './Skills';

function About() {
    return (
        <div>
            {/* About Section */}
            <div className='p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center gap-10'>
                {/* Image */}
                <div className='w-full sm:w-2/3 lg:w-1/3 flex items-center justify-center'>
                    <img src={AboutPic} alt="About Me" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_#ff8834]" />
                </div>

                {/* Text */}
                <div className='w-full lg:w-1/2 flex justify-center items-center flex-col gap-6'>
                    <p className='text-center lg:text-left text-sm sm:text-base md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam libero consequuntur minima delectus, sequi eius, quibusdam suscipit eum tempora ut error aspernatur placeat beatae, modi possimus ipsum! Dolor?
                    </p>

                    {/* Stats */}
                    <div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'>
  <div className='flex-1 p-6 border-2 rounded-2xl bg-white/20 text-center'>
    <span className='flex flex-col items-center text-amber-500 font-bold text-2xl sm:text-3xl md:text-4xl'>0</span>
    Year Experience
  </div>
  <div className='flex-1 p-6 border-2 rounded-2xl bg-white/20 text-center'>
    <span className='flex mt-3 flex-col items-center text-amber-500 font-bold text-2xl sm:text-3xl md:text-4xl'>20+</span>
    Projects
  </div>
  <div className='flex-1 p-6 border-2 rounded-2xl bg-white/20 text-center'>
    <span className='flex mt-3 flex-col items-center text-amber-500 font-bold text-2xl sm:text-3xl md:text-4xl'>100%</span>
    Commitment
  </div>
</div>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'>
                        <button
                            className="flex items-center gap-2 bg-white border-2 hover:bg-amber-700 text-amber-600 hover:text-white font-bold py-2 px-6 rounded-full transition"
                        >
                            <FaDownload size={20} className="hover:text-amber-300" />
                            Download CV
                        </button>
                        <button
                            className="flex items-center gap-2 bg-transparent border-2 hover:bg-white hover:text-amber-600 font-bold py-2 px-6 rounded-full transition"
                        >
                            <FaEnvelope size={20} className="hover:text-amber-300" />
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <Skills />

            {/* Experience & Education */}
            <div className='w-full p-6 sm:p-10 text-white flex flex-col md:flex-row gap-10'>
                {/* Experience */}
                <div className='flex flex-col gap-6 w-full md:w-1/2'>
                    <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                        <FaBriefcase size={24} className="text-amber-500" /> Experience
                    </h1>
                    <div className='bg-white/10 flex flex-col items-start justify-between rounded-2xl p-4 lg:p-8 gap-4 lg:gap-6'>
                        <h2 className='text-amber-600 text-lg sm:text-xl font-bold'>Web Developer</h2>
                        <h2 className="text-sm sm:text-base">2020 - Present</h2>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam libero consequuntur minima delectus, sequi eius, quibusdam suscipit eum tempora ut error aspernatur placeat beatae, modi possimus ipsum! Dolor?
                        </p>
                    </div>
                </div>

                {/* Education */}
                <div className='flex flex-col gap-6 w-full md:w-1/2'>
                    <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                        <FaGraduationCap size={30} className="text-amber-500" /> Education
                    </h1>
                    <div className='bg-white/10 flex flex-col items-start justify-between rounded-2xl p-4 lg:p-8 gap-4 lg:gap-6'>
                        <h2 className='text-amber-600 text-lg sm:text-xl font-bold'>BSc in Computer Science</h2>
                        <h2 className="text-sm sm:text-base">2022 - 2026</h2>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ipsam libero consequuntur minima delectus, sequi eius, quibusdam suscipit eum tempora ut error aspernatur placeat beatae, modi possimus ipsum! Dolor?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About