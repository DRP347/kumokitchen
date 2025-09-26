// src/components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      // We are only using a simple height class and the new gradient class
      className="relative h-screen w-full flex items-center justify-center bg-hero-gradient"
    >
      {/* Dark Overlay is NOT needed for a gradient */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4">
        {/* ... your h1, p, and button tags ... */}
      </div>
    </section>
  );
};

export default HeroSection;