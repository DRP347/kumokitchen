// src/components/CallToAction.tsx
import Link from 'next/link';

const CallToAction = () => {
  return (
    // Using a different dark background for contrast
    <section className="bg-black">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ready for an Unforgettable Meal?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Our full menu of authentic Japanese dishes is waiting for you. Order now and savor the art of cuisine.
        </p>
        <Link href="/menu">
          <button className="bg-red-600 text-white font-bold py-4 px-10 rounded-md text-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">
            Explore The Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;