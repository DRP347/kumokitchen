// src/components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  // We REMOVED the style object from here

  return (
    // We REMOVED the style prop and ADDED the new 'bg-hero-ramen' class
   <section 
  className="relative h-screen w-full bg-hero-texture"
  // ...
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white p-4">
        {/* ... your h1, p, and button tags ... */}
      </div>
    </section>
  );
};

export default HeroSection;