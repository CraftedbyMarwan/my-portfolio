'use client';
import React from 'react';

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
    liveDemoLink: '#', // Keeping '#' as it's under development
    sourceCodeLink: '#', // Keeping '#' as it's under development
  },


];

export default function Projects() {
  return (
    <section id='projects' className="flex flex-col items-center justify-center h-screen px-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

        {/* Project Cards */}

        <div className="flex flex-col md:flex-row gap-18 justify-center items-center"> {/* Changed justify-between to justify-center */}
          {projects.map((project) => (

            // Project Card Container
            <div
              key={project.id}
              className="relative w-full md:w-1/2 lg:w-1/3 aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden perspective-1000 card-project-shadow card-project-hover-transform card-project-hover-shadow card-project-transition card-project-media-hover card-project-content-hover-transform" // Adjusted sizing classes
            >
              {/* Icon/Image Display Area */}
              {typeof project.icon === 'string' ? (
                 <img
                   src={project.icon}
                   alt={`${project.name} icon`}
                   className="absolute inset-0 w-full h-full object-cover z-10 card-project-media" // Applied styling directly to img
                   onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/250x250/CCCCCC/333333?text=Error'; }} // Placeholder on error
                 />
              ) : (

                 <div className="w-20 h-20 flex items-center justify-center z-10 card-project-media">
                   {project.icon}
                 </div>
              )}

              {/* Card Content (Appears on Hover) */}

              <div className="card__content-styled absolute inset-0 p-5 box-border card-project-content-bg card-project-content-transform card-project-transition z-20 flex flex-col">
                {/* Project Title */}

                <p className="mb-2 text-xl font-bold text-gray-800">{project.name}</p>

                {/* Project Description */}

                <p className="flex-grow text-sm text-gray-600 leading-tight">{project.description}</p>

                {/* Buttons Container */}

                <div className="flex gap-3 mt-auto">
                  {/* Live Demo Button - Only show if liveDemoLink exists */}
                  {project.liveDemoLink && ( // Removed the condition && project.liveDemoLink !== '#'
                    <a href={project.liveDemoLink} target='_blank' rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition text-sm">
                      Live Demo
                    </a>
                  )}

                  {/* Source Code Button - Only show if sourceCodeLink exists */}
                  {project.sourceCodeLink && ( // Removed the condition && project.sourceCodeLink !== '#'
                    <a href={project.sourceCodeLink} target='_blank' rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-100 transition text-sm">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
