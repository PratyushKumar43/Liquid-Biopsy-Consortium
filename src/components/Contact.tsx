"use client";

import { Globe } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
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
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8 reveal-element">
          <div>
            <span className="text-indigo-600 font-mono text-xs tracking-wider uppercase font-bold">Get in Touch</span>
            <h2 className="text-h2 font-bold mt-2 text-slate-900">Join the Consortium</h2>
            <p className="text-slate-600 mt-4">Researchers, industry partners, and funding bodies are invited to collaborate.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold font-sans uppercase text-slate-500">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold font-sans uppercase text-slate-500">Institution</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold font-sans uppercase text-slate-500">Email</label>
              <input 
                type="email" 
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold font-sans uppercase text-slate-500">Interest</label>
              <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-600 font-serif">
                <option>Academic Partnership</option>
                <option>Industry Collaboration</option>
                <option>Media Inquiry</option>
              </select>
            </div>
            <button 
              type="button" 
              className="w-full bg-indigo-600 text-white font-bold font-sans py-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        <div className="bg-indigo-900 rounded-[32px] overflow-hidden relative min-h-[400px] reveal-element flex items-center justify-center">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 200 150 Q 400 50 600 200" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="5,5"
            />
          </svg>

          <div className="text-center relative z-10 p-8">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-h4 font-bold mb-2">Global Presence</h3>
            <p className="text-indigo-200 text-sm">Connecting labs in USA, Canada, and India.</p>
          </div>
          
          <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-indigo-400 rounded-full"></div>
          
          <div className="absolute top-[45%] right-[25%] w-3 h-3 bg-white rounded-full animate-ping animation-delay-2000"></div>
          <div className="absolute top-[45%] right-[25%] w-3 h-3 bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}