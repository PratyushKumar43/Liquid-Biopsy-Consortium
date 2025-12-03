"use client";

import { useEffect } from "react";

export default function Mission() {
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
    <section id="mission" className="py-16 bg-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-element">
        <h2 className="text-h2 font-medium leading-relaxed font-serif italic text-indigo-50">
          &ldquo;Our mission is to accelerate liquid biopsy technologies for cancer detection and therapy, advancing new assays to test patient fluids including blood, urine, and saliva.&rdquo;
        </h2>
      </div>
    </section>
  );
}