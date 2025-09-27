// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import SignatureDishes from "@/components/SignatureDishes";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction"; // <-- Import it

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SignatureDishes />
      <OurStory />
      <Testimonials />
      <CallToAction /> {/* <-- Add it here */}
    </main>
  );
}