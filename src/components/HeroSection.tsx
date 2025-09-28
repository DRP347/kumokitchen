// src/components/HeroSection.tsx
'use client'; // We need this for the animations

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- Import for animations

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      <Image 
        src="/hero-ramen.png"
        alt="A bowl of delicious ramen"
        fill
        className="-z-10 object-cover"
        priority
      />

      {/* --- Improvement 1: Gradient Overlay --- */}
      {/* This gradient is darker at the bottom, fading to transparent at the top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* --- Improvement 4: Entrance Animation --- */}
      {/* This `motion.div` will fade the text content in smoothly */}
      <motion.div 
        className="relative z-10 text-center text-white p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* --- Improvement 2: Typography & Emphasis --- */}
        {/* The Japanese text is now larger and more integrated */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 flex flex-col items-center">
          <span className="font-light text-4xl md:text-6xl text-gray-300 mt-2">雲 Kitchen</span> 
        </h1>

        {/* --- Improvement 2: Typography & Emphasis --- */}
        {/* The tagline is now larger and has better contrast */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          Experience the art of authentic Japanese cuisine, delivered from our cloud kitchen to you.
        </p>
        
        <Link href="/menu">
          {/* --- Improvement 3: Button Animation --- */}
          {/* Added a subtle shadow 'glow' effect on hover */}
          <button className="bg-red-600 text-white font-bold py-4 px-10 rounded-md text-lg 
            transition duration-300 ease-in-out 
            transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
            Explore Menu
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;