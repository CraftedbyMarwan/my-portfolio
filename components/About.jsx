'use client';
import TechCarousel from './TechCarousel';
import { motion } from 'framer-motion'; // Add this import

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delays children animations
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id='about' className="flex flex-col items-center justify-center h-screen px-4">
      <div className="container">
        {/* Heading for the section */}
        <motion.h2 // Wrap with motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        {/* Content container */}
        <div className="text-lg">
          {/* Main card container */}
          <div className="relative w-full h-auto rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center card-styled-shadow p-2">

            {/* Background layer - Covers the parent card */}
            <div className="absolute inset-0 z-[2]  backdrop-blur-lg rounded-[10px] overflow-hidden  p-9 relative z-[3] flex flex-col">
              {/* Content Container within Background Layer */}
              {/* This div holds both the text and the Tech Stack section */}
              <motion.div // Wrap the main content div
                className="flex flex-col items-center md:flex-row md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Animate when 30% in view
              >
                {/* Text Content Section*/}
                <div className="md:w-1/2 md:pr-4 flex flex-col gap-5">
                  <motion.p // Wrap with motion.p
                    className="mb-4"
                    variants={itemVariants}
                  >
                    Greetings! I'm Marwan Mohammed, a junior front-end developer with a deep-seated passion for coding.
                  </motion.p>
                  <motion.span // Wrap with motion.span
                    variants={itemVariants}
                  >
                    While my initial path was in mechatronics engineering, my love for creating and problem-solving through programming led me to the dynamic world of front-end development.
                  </motion.span>
                </div>

                {/* Tech Stack Section */}
                <div className="md:w-1/2 md:pl-4 flex flex-col items-center">
                  {/* Tech Stack heading (if you decide to uncomment it) */}
                  {/* <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack:</h3> */}
                  <TechCarousel />
                </div>
              </motion.div> {/* End of content container within background layer */}
            </div> {/* End of Background layer */}
            <div className="absolute z-[1] top-1/2 left-1/2 w-dvh h-full rounded-full bg-blue-500 opacity-100 blob-styled">
            </div>
          </div> {/* End of Main card container */}
        </div> {/* End of single content container */}
      </div>
    </section>
  );
}