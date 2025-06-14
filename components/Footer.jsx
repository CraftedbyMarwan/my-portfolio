"use client"; // Mark this component as a client component if using App Router

import React from 'react';
// Import icons from react-icons
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="py-6 px-4 flex items-center justify-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Marwan Mohammed Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
