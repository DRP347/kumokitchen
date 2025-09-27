// src/components/Footer.tsx
import Link from 'next/link';
import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand Section */}
                    <div>
                        <Link href="/" className="flex items-center justify-center md:justify-start space-x-2 text-2xl font-bold tracking-wider text-white mb-4 hover:text-red-500 transition-colors">
                            <span className="text-3xl">雲</span>
                            <span>Kitchen</span>
                        </Link>
                        <p className="text-sm">Bringing the art of Japanese cuisine from our cloud kitchen to your home.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-bold text-white uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/menu" className="hover:text-red-500 transition-colors">Menu</Link></li>
                            <li><Link href="/about" className="hover:text-red-500 transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="font-bold text-white uppercase mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:text-red-500 transition-colors"><Instagram /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><Twitter /></a>
                        </div>
                    </div>

                </div>

                {/* Copyright notice at the bottom */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} KumoKitchen. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;