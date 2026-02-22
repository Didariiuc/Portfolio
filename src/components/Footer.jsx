import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#020205]/80 backdrop-blur-xl py-12">
      {/* Decorative Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Branding & Mission */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-black tracking-tighter text-white">
            DIDAR<span className="text-[#a855f7]">.</span>
          </h2>
          <p className="text-sm text-neutral-500 font-medium italic">
            Building reliable software with precision and passion.
          </p>
        </div>

        {/* Social Links - Clean & Hover-Animated */}
        <div className="flex space-x-6">
          {[
            { Icon: FaGithub, link: "https://github.com/Didariiuc", color: "hover:text-white" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:text-[#0077b5]" },
            { Icon: FaTwitter, link: "https://x.com/didduuuuu?s=21", color: "hover:text-[#1da1f2]" },
            { Icon: FaFacebook, link: "https://www.facebook.com/share/1EC5NwSCrN/?mibextid=wwXIfr", color: "hover:text-[#1877f2]" },
            { Icon: FaYoutube, link: "https://youtube.com/@diva_tune?si=IfjX1caapzn50es9", color: "hover:text-red-500" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`text-neutral-500 text-2xl transition-all duration-300 ${item.color}`}
            >
              <item.Icon />
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-neutral-600">
          <p>© 2026 Md Abu Bakar Siddik Didar</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <p>Handcrafted by <span className="text-white">Didar</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;