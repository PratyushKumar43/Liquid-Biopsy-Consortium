"use client";

import { Play, Activity, Microscope } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8 reveal-element">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-indigo-900 uppercase tracking-wider">New Consortium Launch 2024</span>
          </div>

          <h1 className="text-h1 font-bold tracking-tight text-slate-900">
            Advancing <span className="text-indigo-500">Liquid Biopsy</span> for Early Cancer Detection.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
            Accelerating technologies for cancer detection and therapy through a global collaboration between NIT Rourkela, McGill, OU Health, AIIMS, and UdeM.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
            <button className="shiny-cta">
              <span>Join Consortium</span>
            </button>
            
            <a href="#about" className="group flex items-center gap-3 px-6 py-4 rounded-full hover:bg-slate-100 transition-all">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
              </div>
              <span className="font-semibold font-sans text-sm text-slate-900">Watch Video</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-slate-200/60">
            <p className="text-xs font-mono text-slate-400 mb-4 uppercase">Core Academic Partners</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-sans font-bold text-slate-800 text-[18px]">NIT Rourkela</span>
              <span className="font-sans font-bold text-slate-800 text-[18px]">McGill</span>
              <span className="font-sans font-bold text-slate-800 text-[18px]">UdeM</span>
              <span className="font-sans font-bold text-slate-800 text-[18px]">OU Health</span>
              <span className="font-sans font-bold text-slate-800 text-[18px]">AIIMS</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative reveal-element" style={{transitionDelay: '200ms'}}>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
              alt="Laboratory Research" 
              fill
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
            
            {/* Floating Data Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-h4 font-bold text-slate-900">Active Protocol</h4>
                  <p className="text-xs text-slate-500 font-sans">ctDNA Analysis v2.4</p>
                </div>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[75%] rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-semibold text-slate-500 font-sans">
                <span>Processing</span>
                <span>75%</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3000ms'}}>
            <Activity className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
      </div>
    </header>
  );
}