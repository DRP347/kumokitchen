// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { data: session } = useSession();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider hover:text-red-500 transition-colors">
          KumoKitchen <span className="text-sm font-light">雲</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
          <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link href="/cart">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ShoppingCart size={22} />
              <span className="bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </button>
          </Link>
          
          {/* Authentication Status */}
          {session ? (
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-gray-300">
                Hi, {session.user?.name?.split(' ')[0]}
              </span>
              <button
                onClick={() => signOut()}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="hidden md:flex items-center space-x-2 border border-gray-600 px-4 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <User size={20} />
              <span>Login</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="flex flex-col items-center space-y-6 py-6 text-lg">
            <Link href="/menu" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/about" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {/* Auth button for mobile */}
            {session ? (
                <button 
                  onClick={() => { signOut(); setIsMenuOpen(false); }} 
                  className="text-gray-300 hover:text-white"
                >
                    Logout
                </button>
            ) : (
                <button 
                  onClick={() => { signIn(); setIsMenuOpen(false); }} 
                  className="border border-gray-600 px-6 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                    Login
                </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;