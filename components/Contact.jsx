'use client';
import React from 'react';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';

const Contact = () => {
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
    // Changed min-h-screen to py-24 for reduced vertical spacing
    <section id='contact' className="flex flex-col items-center justify-center py-24">
      <motion.div
        className="flex flex-col items-center justify-center rounded-lg w-full h-full px-8 py-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-center pb-5"
          variants={itemVariants}
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          className="mb-8 text-center text-lg"
          variants={itemVariants}
        >
          Feel free to reach out for collaborations, questions, or just a chat. I'm always open to new opportunities!
        </motion.p>

        <motion.p className="text-md mb-4" variants={itemVariants}>
          Or find me on social media:
        </motion.p>

        <motion.div variants={itemVariants}>
          <SocialMedia />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;