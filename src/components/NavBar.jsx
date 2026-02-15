import React, { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-linear-to-r from-black via-amber-600 to-black shadow-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-3xl tracking-wide flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          <CgNametag className="text-amber-400" />
          Havaa Tech
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#skills"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition duration-300"
          >
            Projects
          </a>
          <a
            href="#testimonial"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition duration-300"
          >
            Testimonial
          </a>
          <a
            href="#education"
            className="text-white text-lg px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black transition duration-300"
          >
            Education
          </a>
        </div>

        {/* Mobile Toggle */}
        <div onClick={handleToggle} className="lg:hidden cursor-pointer">
          {isOpen ? (
            <AiOutlineClose size={30} className="text-white" />
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
              <a
                href="#skills"
                className="text-amber-300 text-xl hover:text-amber-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-amber-300 text-xl hover:text-amber-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="text-amber-300 text-xl hover:text-amber-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-amber-300 text-xl hover:text-amber-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
