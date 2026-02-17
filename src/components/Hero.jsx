import React from 'react'
import HeroPic from '../assets/didar.jpg'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Hero() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../public/CV.pdf';
    link.download = 'CV-Abu Bakar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="p-10 text-white ">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">

        {/* Left Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <p className="text-4xl mb-5 text-slate-200">I'm</p>
          <h1 className="text-5xl font-bold">Md Abu Bakar Siddik Didar</h1>
          <hr className="mt-4 w-full border-t border-slate-300" />
          <p className="mt-6 text-lg text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel consequuntur veritatis fuga ad quis earum rem sapiente quam culpa laborum maiores alias molestiae omnis, iste sequi animi tempore atque.
          </p>
        </div>

        {/* Middle Section (Image) */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={HeroPic}
            alt="Hero"
            width={350}
            height={350}
            className="rounded-full border-8 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <p className="text-4xl mb-4 font-bold">About Me</p>
          <p className="text-slate-200 mb-4">Let's build quality in programming</p>
          <button
            onClick={handleDownload}
            className="bg-white text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-6 rounded-full transition"
          >
            Download CV
          </button>
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <FaTwitter size={30} className="cursor-pointer hover:text-amber-300" />
            <FaFacebook size={30} className="cursor-pointer hover:text-amber-300" />
            <FaInstagram size={30} className="cursor-pointer hover:text-amber-300" />
            <FaYoutube size={30} className="cursor-pointer hover:text-amber-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
