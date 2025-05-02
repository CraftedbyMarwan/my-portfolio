'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

const technologies = [
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
  { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
];

const TechCarousel = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();

  const radius = 100;
  const iconSize = 'w-10 h-10 sm:w-12 sm:h-12';

  // Animation loop
  const animate = () => {
    setAngle((prevAngle) => (prevAngle + 0.2) % 360);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Container for the carousel - adjust size and positioning as needed
    // This div acts as the center point for the circular arrangement
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto flex items-center justify-center mb-8">
      {technologies.map((tech, index) => {
        // Calculate the position of each icon around the circle
        // The angle for each item is determined by its index and the current rotation angle
        const itemAngle = (360 / technologies.length) * index + angle;
        // Convert angle to radians for Math.cos and Math.sin
        const angleInRadians = (itemAngle * Math.PI) / 180;
        const x = radius * Math.cos(angleInRadians);
        const y = radius * Math.sin(angleInRadians);

        return (
          <motion.div
            key={tech.name}
            className={`absolute flex items-center justify-center p-2 bg-zinc-700 rounded-full shadow-md ${iconSize}`}
            style={{
              // Position icons around the circle using Framer Motion's x/y properties
              // These automatically apply transform: translate(x, y)
              x: x,
              y: y,
            }}
            title={tech.name} // Tooltip on hover
            // Optional: Add hover effects with Framer Motion
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Render the icon component */}
            <tech.Icon className="w-full h-full" style={{ color: tech.color }} />
          </motion.div>
        );
      })}
      {/* Optional: Add a central static element if desired */}
      <div className="absolute w-18 h-18 bg-gray-800 rounded-full flex items-center justify-center text-xs text-center text-slate-300">Tech Stack:</div>
    </div>
  );
};

export default TechCarousel;
