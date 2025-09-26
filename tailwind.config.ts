// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // We're keeping the old one, just in case
        'hero-ramen': "url('https://images.unsplash.com/photo-1591814468924-caf88d1232e1')",
        // Adding a new gradient
        'hero-gradient': 'linear-gradient(to bottom, #111827, #030712)',
      },
    },
  },
  plugins: [],
};
export default config;