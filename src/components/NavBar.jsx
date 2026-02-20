import React, { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className=" bg-linear-to-r from-black via-amber-600 to-black shadow-xl w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-3xl tracking-wide flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          <CgNametag className="text-amber-400" />
          Havaa Tech
        </Link>

        {/* Desktop Menu */}
        
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/testimonial"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Testimonial
          </Link>
          <Link
            to="/education"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Education
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div onClick={handleToggle} className="lg:hidden cursor-pointer">
          {isOpen ? (
            < AiOutlineClose size={30} className="text-white" />
          ) : (
            <HiMenuAlt1 size={30} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-sm py-6 transition-all duration-500 ease-in-out">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                className="text-amber-300 text-xl hover:text-amber-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-amber-300 text-xl hover:text-amber-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-amber-300 text-xl hover:text-amber-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="text-amber-300 text-xl hover:text-amber-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-amber-300 text-xl hover:text-amber-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;