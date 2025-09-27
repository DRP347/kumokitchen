// src/app/about/page.tsx
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            The Soul of Japan, in Your Home
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            KumoKitchen began not in a restaurant, but with a memory—the taste of a perfect bowl of ramen on a rainy Tokyo evening. It's a memory of warmth, craft, and the simple joy of a meal made with purpose.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-96 max-w-5xl mx-auto my-16 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
          <Image
            src="/chef-portrait.jpg" // You'll need to find an image for this
            alt="A chef carefully preparing a dish"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg lg:prose-xl text-gray-300">
            <h2>Our Philosophy</h2>
            <p>
              We are a "cloud kitchen" in the truest sense—unbound by a physical dining room, we are free to focus on a singular goal: perfecting the art of Japanese cuisine for delivery. Our name, Kumo (雲), means 'cloud' in Japanese, reflecting our modern approach to a timeless culinary tradition.
            </p>
            <h2>Craft and Ingredient</h2>
            <p>
              Our journey starts with the ingredients. We partner with local purveyors and international suppliers to source the freshest fish for our sushi, the richest pork for our chashu, and the most authentic seasonings. Our broths simmer for hours, our rice is seasoned to perfection, and every dish is assembled with the precision and care of a master artisan.
            </p>
            <p>
              Thank you for inviting us into your home. We hope every bite brings you the same joy and comfort that inspired our journey.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;