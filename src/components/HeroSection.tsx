// src/components/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  // We define the style object for our background image
  const heroStyle = {
  // This is a single, clean URL for a beautiful ramen photo
  backgroundImage: `url('https://images.unsplash.com/photo-1591814468924-caf88d1232e1')`
};

  return (
    // We apply the background image directly to the <section> tag
    <section 
  className="relative h-[calc(100vh-80px)] w-full bg-cover bg-top bg-no-repeat flex items-center justify-center"
  style={heroStyle}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content (remains the same) */}
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