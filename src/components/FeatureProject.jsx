import React from 'react'
import BehindPic from '../assets/didar.jpg'
import { FaDownload, FaRocket, FaEye, FaCode } from 'react-icons/fa'

function FeatureProject() {
    return (
        <div className="p-6 sm:p-10 text-white">

            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6">
                Featured <span className='text-amber-600'>Projects</span>
            </h2>

            <div className="space-y-6">
                {/* Project Card */}
                <div className='bg-white/20 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-4xl p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>
                    <img src={BehindPic} alt="Didar" className="w-full sm:w-3/4 md:w-1/2 h-48 sm:h-64 md:h-72 rounded-4xl object-cover" />
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            Beyond the lines of code, I am a passionate programmer with a love for problem-solving and creativity.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                            <button
                                className="bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition flex items-center justify-center gap-2"
                            >
                                <FaEye size={18} className="text-amber-700 hover:text-white" />
                                Live Demo
                            </button>
                            <button
                                className="flex items-center justify-center gap-2 bg-transparent border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
                            >
                                <FaCode size={20} className="hover:text-amber-300" />
                                View Code
                            </button>
                        </div>
                    </div>
                </div>

                {/* Repeat for other project cards */}
                <div className='bg-white/20 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-4xl p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            Beyond the lines of code, I am a passionate programmer with a love for problem-solving and creativity.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                            <button
                                className="bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition flex items-center justify-center gap-2"
                            >
                                <FaEye size={18} className="text-amber-700 hover:text-white" />
                                Live Demo
                            </button>
                            <button
                                className="flex items-center justify-center gap-2 bg-transparent border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
                            >
                                <FaCode size={20} className="hover:text-amber-300" />
                                View Code
                            </button>
                        </div>
                    </div>
                    <img src={BehindPic} alt="Didar" className="w-full sm:w-3/4 md:w-1/2 h-48 sm:h-64 md:h-72 rounded-4xl object-cover" />

                </div>

                {/* Third project card */}
                <div className='bg-white/20 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-4xl p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'>
                    <img src={BehindPic} alt="Didar" className="w-full sm:w-3/4 md:w-1/2 h-48 sm:h-64 md:h-72 rounded-4xl object-cover" />
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-sm sm:text-base md:text-lg mb-4">
                            Beyond the lines of code, I am a passionate programmer with a love for problem-solving and creativity.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                            <button
                                className=" bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition flex items-center justify-center gap-2"
                            >
                                <FaEye size={18} className="text-amber-700 hover:text-white" />
                                Live Demo
                            </button>
                            <button
                                className="flex items-center justify-center gap-2 bg-transparent border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
                            >
                                <FaCode size={20} className="hover:text-amber-300" />
                                View Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureProject