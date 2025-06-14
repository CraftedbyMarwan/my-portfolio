import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const SocialMedia = () => {
    const urlencodedtext = encodeURIComponent("Hello Marwan, I would like to connect with you regarding your portfolio. Looking forward to hearing from you!");
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Social Media Icons Container */}
        {/* Changed space-x-6 to space-x-10 for more horizontal spacing between icons */}
        <div className="flex space-x-28 mb-4">
          {/* Github Icon */}
          <motion.a
            href="https://github.com/CraftedbyMarwan" // Replace with your Github URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Github"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={30} /> {/* Adjust size as needed */}
          </motion.a>

          {/* Linkedin Icon */}
          <motion.a
            href="https://www.linkedin.com/in/marwanmmq" // Replace with your Linkedin URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Linkedin"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={30} /> {/* Adjust size as needed */}
          </motion.a>

          {/* Whatsapp Icon */}
          <motion.a
            href={`https://wa.me/00201553945552?text=${urlencodedtext}`} // Replace with your Whatsapp URL (e.g., https://wa.me/yourphonenumber)
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Whatsapp"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={30} /> {/* Adjust size as needed */}
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="https://www.instagram.com/marwan_mmq" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={30} /> {/* Adjust size as needed */}
          </motion.a>

          {/* Email Icon */}
          <motion.a
            href="mailto:marwanmmq2000@gmail.com" // Replace with your Email Address
            className=" hover:text-blue-500 transition-colors duration-300"
            aria-label="Email"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdEmail size={30} /> {/* Adjust size as needed */}
          </motion.a>
        </div>
    </div>
  );
};

export default SocialMedia;