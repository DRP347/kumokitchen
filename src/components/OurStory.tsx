// src/components/OurStory.tsx
import Image from 'next/image';
import Link from 'next/link';

const OurStory = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/our-story.jpg" // The image you just added to /public
                alt="Chef preparing Japanese cuisine"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Story <span className="font-light text-gray-400">| 私たちの物語</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              KumoKitchen was born from a simple idea: to bring the authentic, refined flavors of Japan from our kitchen to your home. We are a collective of passionate chefs dedicated to the art of Japanese cuisine, using only the freshest ingredients to craft dishes that are both traditional and innovative.
            </p>
            <Link href="/about">
              <button className="border border-red-600 text-red-600 font-bold py-3 px-8 rounded-md text-lg hover:bg-red-600 hover:text-white transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;