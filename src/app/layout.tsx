// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KumoKitchen - Modern Japanese Cuisine",
  description: "Experience the art of Japan, from our cloud kitchen to you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-200`}>
                <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}