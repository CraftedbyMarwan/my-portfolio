// 'use client';
// import React from 'react';
// import SocialMedia from './SocialMedia';
// import { motion } from 'framer-motion'; // Add this import

// const Contact = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2 // Delays children animations
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
//   };

//   return (
//     <section id='contact' className="flex flex-col items-center justify-center h-screen px-4">
//       <motion.div
//         className="flex flex-col items-center justify-center"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }} // Animate once when 50% of the component is in view
//       >
//         <motion.h2
//           className="text-3xl font-bold mb-8 text-center"
//           variants={itemVariants}
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           className="mb-4 text-center"
//           variants={itemVariants}
//         >
//           Feel free to reach out for collaborations or just a chat!
//         </motion.p>

//         {/* SocialMedia component already has Framer Motion animations applied within it */}
//         <SocialMedia />
//       </motion.div>
//     </section>
//   );
// }

// export default Contact;
'use client';
import React from 'react';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';
// Removed MdEmail import as the email button is no longer present

const Contact = () => {
  // Variants for staggered entrance animation (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variants for individual item entrance animation (slide up and fade in) (unchanged)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id='contact' className="flex flex-col items-center justify-center min-h-screen py-12">
      {/* Main container with card-like styling and entrance animation */}
      <motion.div
        // Styling adjusted:
        // - bg-white for lightest background
        // - removed max-w-lg and added w-full, h-full, max-w-6xl, mx-auto for screen-matching size
        // - px-8 py-10 for internal padding within the card
        // - shadow-md for a subtle border/definition
        className="flex flex-col items-center justify-center bg-white rounded-lg w-full h-full text-gray-800 px-8 py-10 shadow-md max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Heading with animation (text color adjusted for visibility on white background) */}
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-center text-blue-700"
          variants={itemVariants}
        >
          Let's Connect!
        </motion.h2>

        {/* Tagline with animation (unchanged text color) */}
        <motion.p
          className="mb-8 text-center text-lg text-gray-700"
          variants={itemVariants}
        >
          Feel free to reach out for collaborations, questions, or just a chat. I'm always open to new opportunities!
        </motion.p>

        {/* Removed the 'Send Me an Email' button section as requested */}

        {/* Text prompting social media contact (text color adjusted for subtlety) */}
        <motion.p className="text-md mb-4 text-gray-600" variants={itemVariants}>
          Or find me on social media:
        </motion.p>

        {/* SocialMedia component (retains its own Framer Motion animations) */}
        <motion.div variants={itemVariants}>
          <SocialMedia />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;