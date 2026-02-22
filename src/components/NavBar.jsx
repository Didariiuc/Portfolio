import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { FaHandshake, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techVariants = (duration, delay, yDist) => ({
    animate: {
      y: [0, yDist, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.03, 0.08, 0.03],
      transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
    },
  });

  return (
    <>
      {/* 1. NEON EDGE PROGRESS */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-[#a855f7] z-[100] origin-left shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />

      {/* --- BACKGROUND ASSETS (RETAINED & ENHANCED) --- */}
      <div className="fixed inset-0 -z-10 bg-[#020205] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-cyan-600/5 blur-[140px]" />

        <motion.div variants={techVariants(12, 0, -40)} animate="animate" className="absolute top-[15%] left-[8%] text-white text-8xl"><FaReact /></motion.div>
        <motion.div variants={techVariants(15, 2, 30)} animate="animate" className="absolute top-[55%] left-[12%] text-white text-5xl"><FaPython className="opacity-20" /></motion.div>
        <motion.div variants={techVariants(18, 1, -60)} animate="animate" className="absolute top-[20%] right-[12%] text-white text-7xl"><FaNodeJs /></motion.div>
        <motion.div variants={techVariants(14, 0.5, 40)} animate="animate" className="absolute bottom-[15%] right-[8%] text-white text-9xl"><SiTailwindcss /></motion.div>
        <motion.div variants={techVariants(20, 3, -20)} animate="animate" className="absolute top-[40%] right-[25%] text-white text-6xl"><SiMongodb className="opacity-20" /></motion.div>
      </div>

      {/* --- THE ULTIMATE TECH NAVBAR --- */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? "pt-2" : "pt-8"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className={`relative flex items-center justify-between rounded-[24px] border px-4 py-2.5 backdrop-blur-3xl transition-all duration-500 ${scrolled
              ? "bg-black/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              : "bg-white/5 border-white/5"
            }`}>

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 pl-2 group">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping opacity-20" />
                <div className="relative z-10 h-9 w-9 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center border border-white/10 group-hover:rotate-[180deg] transition-all duration-700">
                  <CgNametag className="text-xl text-white" />
                </div>
              </div>
              <div className=" sm:flex flex-col">
                <h1 className="text-xl font-black tracking-tighter text-white italic">Bismillah<span className="text-cyan-400">.</span></h1>
                {/* <span className="text-[8px] font-mono font-bold text-neutral-500 uppercase tracking-[0.4em] -mt-1">Keep_Me_In_Your_Prayer</span> */}

              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1 bg-black/20 rounded-full p-1 border border-white/5">
              {["Home", "About", "Projects", "Publications", "Contact",].map((label) => (
                <NavLink
                  key={label}
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className={({ isActive }) => `
                    relative px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-full
                    ${isActive ? "text-white" : "text-neutral-500 hover:text-white"}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="pill"
                          className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ACTION BUTTON */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34,211,238,0.4)",
                  backgroundColor: "#22d3ee" // This matches the cyan-400 hover color
                }}
                whileTap={{ scale: 0.95 }}
                /* 1. Updated href with your email and a subject line */
                href="mailto:mdabubakarsiddikdidar@gmail.com"
                className=" sm:flex items-center gap-2 px-6 py-2.5 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-black transition-all"
              >
                <FaHandshake size={14} />
                Hire Me
              </motion.a>

              {/* MOBILE TRIGGER */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
              >
                <HiMenuAlt1 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 z-[100] lg:hidden bg-black/90 flex flex-col items-center justify-center"
            >
              {/* CLOSE ICON - Positioned for ergonomics */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <AiOutlineClose size={24} />
              </button>

              <div className="flex flex-col gap-10">
                {["Home", "About", "Projects", "Publications", "Contact"].map((label, i) => (
                  <Link
                    key={label}
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-center"
                  >
                    <span className="text-cyan-500 font-mono text-[10px] mb-2 tracking-[0.5em] opacity-50">0{i + 1} //</span>
                    <span className="text-5xl font-black text-white group-hover:text-cyan-400 group-hover:italic transition-all duration-300 tracking-tighter uppercase">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Decorative System Footer */}
              <div className="absolute bottom-10 text-[8px] font-mono text-white/20 tracking-[0.8em] uppercase">
                System_Interface_v2.4
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default NavBar;