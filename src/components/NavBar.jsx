import React, { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router";

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
          Dev Portfolio
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
             className={({ isActive }) =>
              `text-white text-lg px-4 py-2 rounded-full transition duration-300 ${
                isActive ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-500"
        : "text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
             className={({ isActive }) =>
              `text-white text-lg px-4 py-2 rounded-full transition duration-300 ${
                isActive ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-500"
        : "text-gray-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
             className={({ isActive }) =>
              `text-white text-lg px-4 py-2 rounded-full transition duration-300 ${
                isActive ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-500"
        : "text-gray-400"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/testimonial"
            className={({ isActive }) =>
              `text-white text-lg px-4 py-2 rounded-full transition duration-300 ${
                isActive ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-500"
        : "text-gray-400"
              }`
            }
          >
            Contact
          </NavLink>

        </div>
        <button className="items-center justify-center flex text-white text-lg px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-600 transition duration-300">
          Hire Me
        </button>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-amber-300 text-xl hover:text-amber-500 transition duration-300 ${
                    isActive ? "text-amber-500" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-amber-300 text-xl hover:text-amber-500 transition duration-300 ${
                    isActive ? "text-amber-500" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-amber-300 text-xl hover:text-amber-500 transition duration-300 ${
                    isActive ? "text-amber-500" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonial"
                className={({ isActive }) =>
                  `text-amber-300 text-xl hover:text-amber-500 transition duration-300 ${
                    isActive ? "text-amber-500" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;