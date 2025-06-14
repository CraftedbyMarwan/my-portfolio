'use client';
import React, { use } from 'react';
import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
    <section id='contact'>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="mb-4 text-center">Feel free to reach out for collaborations or just a chat!</p>

        <SocialMedia />
      </div>
    </section>
  );
}

export default Contact;
