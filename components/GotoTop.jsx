"use client";

import React, { useState, useEffect } from 'react';

// The Button component you provided
const Button = () => {
  return (
    <button className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-text-nowrap after:scale-0 hover:after:scale-100 after:duration-200
      w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16  // Responsive base size
      rounded-full border-2 border-blue-400 bg-black
      pointer flex items-center justify-center duration-300
      hover:rounded-[50px]
      hover:w-28 md:hover:w-32 lg:hover:w-36 // Responsive hover size
      group/button overflow-hidden active:scale-90">
      <svg className="
        w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 // Responsive SVG size
        fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
}

const Gototop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Ensure window is defined before accessing pageYOffset
    if (typeof window !== 'undefined' && window.pageYOffset > 300) { // Adjust 300 to the desired scroll depth
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    // Ensure window is defined before accessing scrollTo
     if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
     }
  };

  useEffect(() => {
    // Ensure window is defined before adding event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
    }


    return () => {
      // Ensure window is defined before removing event listener
      if (typeof window !== 'undefined') {
         window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  return (
    // Apply transition classes and control visibility via opacity and pointer-events
    <div
      className={`z-[2000]
        fixed bottom-8 right-8
        transition-opacity duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={scrollToTop} // Attach click handler here
    >
      <Button /> {/* Always render the Button */}
    </div>
  );
};

export default Gototop;