// src/app/cart/page.tsx
'use client';

import { useCart } from '@/context/CartContext';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!session) {
      signIn();
      return;
    }

    setIsLoading(true);
    // This is the placeholder for the real checkout API call
    alert('Checkout functionality is not yet fully implemented.');
    // In a real scenario, you would redirect to a payment page or confirmation page.
    setIsLoading(false);
  };

  return (
    <div className="bg-black min-h-screen py-12 text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-10">Your Order</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center bg-gray-800 p-10 rounded-lg">
            <p className="text-xl text-gray-400">Your order is empty.</p>
            <Link href="/menu">
              <button className="mt-6 bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition duration-300">
                Browse Menu
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center p-4 border-b border-gray-700 last:border-b-0">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="flex-grow ml-4">
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))} className="w-16 text-center bg-gray-700 border border-gray-600 rounded-md mx-4" />
                    <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="ml-4 text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
              <button onClick={clearCart} className="mt-4 text-sm text-gray-500 hover:text-red-500">
                Clear Order
              </button>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 h-fit">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2 text-gray-300">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <button onClick={handleCheckout} disabled={isLoading} className="mt-6 w-full bg-red-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-red-700 transition duration-300 disabled:bg-gray-500">
                {isLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;