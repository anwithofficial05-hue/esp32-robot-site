"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import EmotionsSection from "./sections/EmotionsSection";
import ProductSection from "./sections/ProductSection";
import StorySection from "./sections/StorySection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

// Dynamically import 3D viewer to avoid SSR issues
const ViewerSection = dynamic(() => import("./sections/ViewerSection"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <div className="text-cyber-cyan font-orbitron animate-pulse">
        Loading 3D Viewer...
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020818] overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <ViewerSection />
      <FeaturesSection />
      <EmotionsSection />
      <ProductSection />
      <StorySection />
      <Footer />
    </main>
  );
}
