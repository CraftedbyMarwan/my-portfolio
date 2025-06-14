'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Add this import

const projects = [
  {
    id: 1,
    name: 'ShopEase',
    description: 'E-commerce platform with a user-friendly interface with a login/register form.',
    icon:'/imgs/Shopease.webp',
    liveDemoLink: 'https://shopease-lemon.vercel.app/',
    sourceCodeLink: 'https://github.com/CraftedbyMarwan/E-comm-1',
  },
  {
    id: 2,
    name: 'Banking Dashboard',
    description: '**Under Development**: A modern banking dashboard with real-time data visualization.',
    icon:'/imgs/undermain.webp',
    liveDemoLink: null,
    sourceCodeLink: null,
  },
];

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id='projects' className="flex flex-col items-center justify-center h-screen px-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

        <div className="flex flex-col md:flex-row gap-18 justify-center items-center">
          {projects.map((project) => (
            <motion.div // Wrap with motion.div
              key={project.id}
              className="relative w-full md:w-1/2 lg:w-1/3 aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden perspective-1000 card-project-shadow card-project-hover-transform card-project-hover-shadow card-project-transition card-project-media-hover card-project-content-hover-transform"
              variants={cardVariants} // Apply variants
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.5 }} // Only animate once when 50% visible
              whileHover={{ scale: 1.03 }} // Add hover effect
              transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth transition
            >
              {typeof project.icon === 'string' ? (
                 <img
                   src={project.icon}
                   alt={`${project.name} icon`}
                   className="absolute inset-0 w-full h-full object-cover z-10 card-project-media"
                   onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x250/CCCCCC/333333?text=Error'; }}
                 />
              ) : (
                 <div className="w-20 h-20 flex items-center justify-center z-10 card-project-media">
                   {project.icon}
                 </div>
              )}

              <div className="card__content-styled absolute inset-0 p-5 box-border card-project-content-bg card-project-content-transform card-project-transition z-20 flex flex-col">
                <p className="mb-2 text-xl font-bold text-gray-800">{project.name}</p>
                <p className="flex-grow text-sm text-gray-600 leading-tight">{project.description}</p>
                <div className="flex gap-3 mt-auto">
                  {project.liveDemoLink && (
                    <motion.a // Add motion to buttons for individual effects
                      href={project.liveDemoLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition text-sm"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.sourceCodeLink && (
                    <motion.a // Add motion to buttons
                      href={project.sourceCodeLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-100 transition text-sm"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}