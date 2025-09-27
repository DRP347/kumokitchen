// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Import it

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ... */ };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-200`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer /> {/* <-- Add it here */}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}