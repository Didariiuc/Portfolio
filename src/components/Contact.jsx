import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ravlvzi", 
      "template_fwi8u9a", 
      form.current,
      "MxFzdkskjeR4oeZ-q" 
    ).then(
      (result) => {
        alert("Message Sent Successfully!");
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };

  return (
    <div className='relative min-h-screen p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto pt-24'>
      
      {/* --- LEFT SECTION (Info) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='w-full lg:w-1/2 space-y-8'
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Let's <br />
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className='space-y-4'>
          <div className='group flex items-center gap-4 rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-[#a855f7]/50 transition-all duration-300 backdrop-blur-md cursor-pointer'>
            <div className="p-3 bg-[#a855f7]/20 rounded-xl group-hover:bg-[#a855f7]/30 transition-colors">
               <FaEnvelope size={24} className="text-[#a855f7]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Email Me</span>
              <span className="text-sm sm:text-base font-medium break-all">mdabubakarsiddikdidar@gmail.com</span>
            </div>
          </div>

          <div className='group flex items-center gap-4 rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md cursor-pointer'>
            <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
               <FaMapMarkerAlt size={24} className="text-cyan-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Location</span>
              <span className="text-sm sm:text-base font-medium">Chattogram, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className='flex gap-6 pt-4'>
          {[
            { icon: FaGithub, link: "https://github.com/Didariiuc", color: "hover:text-white" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:text-[#0077b5]" },
            { icon: FaTwitter, link: "https://x.com/didduuuuu?s=21", color: "hover:text-[#1da1f2]" },
          ].map((social, i) => (
            <a key={i} href={social.link} className={`text-neutral-500 text-3xl transition-all hover:scale-125 ${social.color}`}>
              <social.icon />
            </a>
          ))}
        </div>
      </motion.div>

      {/* --- RIGHT SECTION (Form) --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className='w-full lg:w-1/2 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden'
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#a855f7]/10 blur-[80px]" />

        <form ref={form} onSubmit={sendEmail} className="space-y-5 relative z-10">
          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-500 uppercase ml-1">Full Name</label>
            <input 
              type="text" 
              name="user_name" 
              placeholder="John Doe" 
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#a855f7]/50 focus:border-[#a855f7]/50 transition-all" 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-500 uppercase ml-1">Email Address</label>
            <input 
              type="email" 
              name="user_email" 
              placeholder="john@example.com" 
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all" 
              required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-neutral-500 uppercase ml-1">Your Message</label>
            <textarea 
              name="message" 
              placeholder="Tell me about your project..." 
              rows={4} 
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#a855f7]/50 focus:border-[#a855f7]/50 transition-all resize-none" 
              required 
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#3b82f6] to-[#2dd4bf] rounded-2xl font-black text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
          >
            <FaPaperPlane className="text-white" />
            Send Transmission
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;