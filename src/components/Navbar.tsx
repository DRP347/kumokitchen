// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Menu, X, User, Soup } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { cartItems } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`sticky top-0 z-50 text-white transition-colors duration-300 ${hasScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
        <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          <Link href="/" className="text-3xl font-bold tracking-wider hover:text-red-500 transition-colors">
            雲
          </Link>
        </motion.div>

        <motion.div 
          className="hidden md:flex items-center space-x-10 text-gray-300 font-semibold text-lg"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link href="/menu" className="hover:text-white transition-colors relative group py-2">Menu<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/about" className="hover:text-white transition-colors relative group py-2">Our Story<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/contact" className="hover:text-white transition-colors relative group py-2">Contact<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden md:flex items-center space-x-6"
          variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
        >
          <Link href="/cart" className="relative text-gray-300 hover:text-white transition-colors">
            <Soup size={28} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">{totalItems}</span>
            )}
          </Link>
          <div className="w-px h-6 bg-gray-700"></div>
          {session ? (
            <div className="flex items-center space-x-3">
              <span className="font-medium">{session.user?.name?.split(' ')[0]}</span>
              <button onClick={() => signOut()} className="text-gray-400 hover:text-white text-sm">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              <User size={24} />
            </Link>
          )}
        </motion.div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none z-50 relative">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <motion.div 
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-black"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <Link href="/menu" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <Link href="/about" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          {session ? (
              <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white">Logout</button>
          ) : (
              <Link href="/login">
                <button onClick={() => setIsMenuOpen(false)} className="bg-gray-800 text-gray-300 px-6 py-3 rounded-md hover:bg-gray-700 hover:text-white">Login</button>
              </Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;