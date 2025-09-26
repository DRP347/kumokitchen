// src/components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    // 1. The parent container is relative and has a defined height.
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 2. A standard <img> tag is positioned absolutely to fill the container. */}
      {/* This bypasses any Next.js <Image> component bugs. */}
      <img 
        src="/hero-ramen.jpg" // Make sure this exact file is in your /public folder
        alt="" 
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* 3. The dark overlay goes on top of the image. */}
      <div className="absolute inset-0 "></div>

      {/* 4. The text content goes on top of the overlay. */}
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          KumoKitchen <span className="font-light">雲キッチン</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experience the art of authentic Japanese cuisine, delivered from our cloud kitchen to you.
        </p>
        <Link href="/menu">
          <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
            Explore Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;