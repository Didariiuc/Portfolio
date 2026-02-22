import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ravlvzi",     // EmailJS থেকে পাওয়া Service ID
      "template_fwi8u9a",    // Template ID
      form.current,
      "MxFzdkskjeR4oeZ-q"      // Public Key
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
    <div className='p-6 sm:p-10 text-white flex flex-col lg:flex-row gap-10'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2 p-5 rounded-4xl'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">
          Let's <br />
          <span className="text-amber-500 mt-5">Connect</span>
        </h1>
        <h1 className="text-base sm:text-lg md:text-xl mt-4 text-left">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </h1>

        {/* Email Box */}
        <div className='w-fit'>
          <div className='flex items-center gap-3 rounded-full px-6 sm:px-10 md:px-16 py-4 bg-white/10 text-white font-bold text-sm sm:text-lg mt-8 w-full sm:w-auto cursor-pointer'>
            <FaEnvelope size={40} className="text-amber-500" />
            <span className="truncate">mdabubakarsiddikdidar@gmail.com</span>
          </div>

          {/* Location Box */}
          <div className='flex items-center gap-3 rounded-full px-6 sm:px-10 md:px-16 py-4 bg-white/10 text-white font-bold text-sm sm:text-lg mt-4 w-full sm:w-auto cursor-pointer'>
            <FaMapMarkerAlt size={40} className="text-amber-500" />
            <span className="truncate">Chattogram, Bangladesh</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className='p-2 flex justify-left space-x-4 mt-2'>
          <a href="https://github.com/Didariiuc">
            <FaGithub size={28} className="hover:text-black transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/md-abu-bakar-siddik-didar-704863330?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
            <FaLinkedin size={28} className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://x.com/didduuuuu?s=21npm run dev
          ">
            <FaTwitter size={28} className="hover:text-sky-400 transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className='w-full lg:w-1/2 p-5 bg-white/10 rounded-4xl'>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name */}
          <div>
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" required />
          </div>

          {/* Email */}
          <div className="mt-4">
            <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" required />
          </div>

          {/* Message */}
          <div className="mt-4">
            <textarea name="message" placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" required></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-amber-600 rounded-lg font-bold text-white 
                       hover:bg-white hover:text-amber-600 transition-all duration-300 
                       flex items-center justify-center gap-2 group"
          >
            <FaPaperPlane className="text-white group-hover:text-amber-600 transition-all duration-300" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;