// src/components/Testimonials.tsx
const Testimonials = () => {
  return (
    // Added a slightly lighter background to create separation
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">What Our Customers Say</h2>
        <p className="text-gray-400 mb-12">The finest praise from the finest palates.</p>
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="w-full max-w-md bg-black bg-opacity-20 p-8 rounded-lg border border-gray-800 shadow-lg">
            <p className="text-gray-300 italic mb-6">
              "The most authentic ramen I've had outside of Tokyo. The broth was rich and flavorful, and the delivery was surprisingly fast. KumoKitchen is my new go-to."
            </p>
            <p className="font-bold text-white text-lg">- Arjun Desai</p>
          </div>
          
          <div className="w-full max-w-md bg-black bg-opacity-20 p-8 rounded-lg border border-gray-800 shadow-lg">
            <p className="text-gray-300 italic mb-6">
              "Absolutely stunning sushi. The quality of the fish was incredible. It felt like a high-end restaurant experience, but in the comfort of my own home."
            </p>
            <p className="font-bold text-white text-lg">- Priya Sharma</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;