"use client"; // Mark this component as a client component if using App Router

import React from 'react';
// Import icons from react-icons
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const urlencodedtext = encodeURIComponent("Hello Marwan, I would like to connect with you regarding your portfolio. Looking forward to hearing from you!");
  return (
    <footer className="py-6 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Media Icons Container */}
        <div className="flex space-x-6 mb-4">
          {/* Github Icon */}
          <a
            href="https://github.com/CraftedbyMarwan" // Replace with your Github URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Github"
          >
            <FaGithub size={30} /> {/* Adjust size as needed */}
          </a>

          {/* Linkedin Icon */}
          <a
            href="https://www.linkedin.com/in/marwanmmq" // Replace with your Linkedin URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Linkedin"
          >
            <FaLinkedin size={30} /> {/* Adjust size as needed */}
          </a>

          {/* Whatsapp Icon */}
          <a
            href={`https://wa.me/00201553945552?text=${urlencodedtext}`} // Replace with your Whatsapp URL (e.g., https://wa.me/yourphonenumber)
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Whatsapp"
          >
            <FaWhatsapp size={30} /> {/* Adjust size as needed */}
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/marwan_mmq" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={30} /> {/* Adjust size as needed */}
          </a>

          {/* Email Icon */}
          <a
            href="mailto:marwanmmq2000@gmail.com" // Replace with your Email Address
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Email"
          >
            <MdEmail size={30} /> {/* Adjust size as needed */}
          </a>
        </div>

        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Marwan Mohammed Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
