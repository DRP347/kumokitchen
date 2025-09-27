// src/components/SignatureDishes.tsx
import MenuItemCard from '@/components/MenuItemCard';
import { MenuItem } from '@/context/CartContext';

async function getSignatureDishes(): Promise<MenuItem[]> {
  try {
    // Add { cache: 'no-store' } here
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`, {
      cache: 'no-store', 
    });
    if (!res.ok) {
      console.error("Failed to fetch menu items, status:", res.status);
      return [];
    }
    const data = await res.json();
    return data.data.slice(0, 3);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }
}

const SignatureDishes = async () => {
  const dishes = await getSignatureDishes();

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Signature Dishes</h2>
        <p className="text-gray-400 mb-12">Crafted with passion, served with pride.</p>
        
        {dishes && dishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map(dish => (
              <MenuItemCard key={dish._id} item={dish} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Could not load signature dishes at this time.</p>
        )}
      </div>
    </section>
  );
};

export default SignatureDishes;