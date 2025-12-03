"use client";

import { useEffect } from "react";

const timelineItems = [
  {
    year: "Year 1",
    title: "Foundation & Standardization",
    description: "Establish governance, standardize SOPs for sample collection across India, Canada, and USA. Initiate pilot data exchange.",
    status: "active"
  },
  {
    year: "Year 2-3",
    title: "Clinical Validation",
    description: "Launch multi-center clinical trials for breast and cervical cancer. Integrate AI models for data analysis.",
    status: "upcoming"
  },
  {
    year: "Year 4+",
    title: "Global Expansion",
    description: "Expansion to additional tumor types and onboarding new international partners. Commercial translation of biosensor tech.",
    status: "future"
  }
];

export default function Timeline() {
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
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16 reveal-element">
        <h2 className="text-h2 font-bold text-slate-900">Operational Milestones</h2>
      </div>
      
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2 space-y-12">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-0 reveal-element">
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm ${
              item.status === 'active' ? 'bg-indigo-600' : 'bg-slate-300'
            }`}>
              {item.status === 'active' && <div className="pulse-ring"></div>}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12 items-start group">
              {index % 2 === 0 ? (
                <>
                  <div className="md:text-right md:pr-4">
                    <span className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full mb-2 ${
                      item.status === 'active' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-indigo-200 transition-colors">
                    <h4 className="text-h4 font-bold mb-2">{item.title}</h4>
                    <p className="text-[15px] text-slate-600">{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:block col-start-2 pl-4">
                    <span className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full mb-2 ${
                      item.status === 'active' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  <div className="md:col-start-1 md:row-start-1 md:text-right bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-indigo-200 transition-colors">
                    <h4 className="text-h4 font-bold mb-2">{item.title}</h4>
                    <p className="text-[15px] text-slate-600">{item.description}</p>
                  </div>
                  <div className="md:hidden mt-2">
                    <span className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full mb-2 ${
                      item.status === 'active' 
                        ? 'bg-indigo-50 text-indigo-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.year}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}