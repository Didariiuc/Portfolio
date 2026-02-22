import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'

function Ending() {
    return (
        <div className=" p-6 sm:p-10 text-white ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center">
                Let's <span className='text-white'>Build Something</span>
            </h2>
            <h2 className="text-amber-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                amazing Together
            </h2>
            <p className="text-center text-lg sm:text-xl">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className='flex justify-center mt-6'>
                <button
                className="bg-amber-50 flex text-amber-600 items-center justify-center gap-2 border-2 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
            >
                <FaRegCommentDots size={20} className="hover:text-amber-300" />
                Say Hello
            </button>
            </div>
        </div>
    )
}

export default Ending
