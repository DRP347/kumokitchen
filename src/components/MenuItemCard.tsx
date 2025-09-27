// src/components/MenuItemCard.tsx
'use client';

import Image from 'next/image';
import { useCart, MenuItem } from '@/context/CartContext';

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden group">
      <div className="relative w-full h-56">
        <Image 
          src={item.imageUrl} 
          alt={item.name} 
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
        <p className="text-gray-400 mb-4 h-12 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-semibold text-lg text-red-500">${item.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(item)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;