"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ResearchAreas from "@/components/ResearchAreas";
import Partners from "@/components/Partners";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <Mission />
      <ResearchAreas />
      <Partners />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}