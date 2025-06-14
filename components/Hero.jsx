'use client';
import { Styles } from "@/styles/hero";
import { motion } from 'framer-motion'; //

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Delays children animations
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="hero"
      className={Styles.section}
    >
      <motion.div
        className={Styles.sectioncontent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section for Profile Image */}
        <motion.div
          className={Styles.profileImage}
          variants={itemVariants} // Apply animation to image container
        >
          <img
            src="imgs/profile.webp"
            alt="Marwan Mohammed"
            className={Styles.profileImageStyle}
          />
        </motion.div>

        {/* Section for Text Content */}
        <div className={Styles.textContent}>
          {/* Headline */}
          <motion.h1
            className={Styles.headline}
            variants={itemVariants} // Apply animation to headline
          >
            Marwan Mohammed <span className="flex"> Junior Front-End Developer </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className={Styles.tagline}
            variants={itemVariants} // Apply animation to tagline
          >
            Crafting engaging and responsive web experiences.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            href="#projects"
            className={Styles.awesomeButton}
            variants={itemVariants} // Apply animation to button
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}