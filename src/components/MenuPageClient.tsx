// src/components/MenuPageClient.tsx
'use client';

import { useState } from 'react';
import MenuItemCard from '@/components/MenuItemCard';
import { MenuItem } from '@/context/CartContext';

const MenuPageClient = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-white">Our Full Menu</h1>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mb-2 rounded-full font-semibold transition-colors text-sm md:text-base ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Item Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items found.</p>
      )}
    </div>
  );
};

export default MenuPageClient;