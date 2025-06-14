'use client';
import TechCarousel from './TechCarousel';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    // Changed h-screen to py-24 for reduced vertical spacing
    <section id='about' className="flex flex-col items-center justify-center py-24 px-4">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="text-lg">
          <div className="relative w-full h-auto rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center card-styled-shadow p-2">
            <div className="absolute inset-0 z-[2]  backdrop-blur-lg rounded-[10px] overflow-hidden  p-9 relative z-[3] flex flex-col">
              <motion.div
                className="flex flex-col items-center md:flex-row md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="md:w-1/2 md:pr-4 flex flex-col gap-5">
                  <motion.p
                    className="mb-4"
                    variants={itemVariants}
                  >
                    Greetings! I'm Marwan Mohammed Youssef, a junior front-end developer with a deep-seated passion for coding.
                  </motion.p>
                  <motion.span
                    variants={itemVariants}
                  >
                    While my initial path was in mechatronics engineering, my love for creating and problem-solving through programming led me to the dynamic world of front-end development.
                  </motion.span>
                </div>

                <div className="md:w-1/2 md:pl-4 flex flex-col items-center">
                  <TechCarousel />
                </div>
              </motion.div>
            </div>
            <div className="absolute z-[1] top-1/2 left-1/2 w-dvh h-full rounded-full bg-blue-500 opacity-100 blob-styled">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}