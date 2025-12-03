"use client";

import { useEffect } from "react";

const partners = [
  {
    acronym: "NIT",
    name: "NIT Rourkela",
    location: "Rourkela, India",
    description: "Lead in biosensor development and TFET-based detection technologies.",
    delay: 0
  },
  {
    acronym: "MUHC",
    name: "McGill University",
    location: "Montreal, Canada",
    description: "Leading pediatric projects and diverse liquid-biopsy test validation.",
    delay: 100
  },
  {
    acronym: "OU",
    name: "University of Oklahoma",
    location: "Oklahoma, USA",
    description: "Stephenson Cancer Center driving biomarker-driven clinical trials.",
    delay: 200
  },
  {
    acronym: "CR",
    name: "Université de Montréal",
    location: "Montreal, Canada",
    description: "Clinical trials with focus on colorectal and gynecologic cohorts.",
    delay: 0
  },
  {
    acronym: "AIIMS",
    name: "AIIMS New Delhi",
    location: "New Delhi, India",
    description: "High patient volume studies and cost-effective technology implementation.",
    delay: 100
  }
];

export default function Partners() {
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
    <section id="partners" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center reveal-element">
          <span className="text-indigo-600 font-mono text-xs tracking-wider uppercase font-bold">Global Network</span>
          <h2 className="text-h2 font-bold mt-2 text-slate-900">Academic & Clinical Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 reveal-element"
              style={{ transitionDelay: `${partner.delay}ms` }}
            >
              <div className="w-12 h-12 shrink-0 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold font-mono">
                {partner.acronym}
              </div>
              <div>
                <h4 className="text-h4 font-bold text-slate-900">{partner.name}</h4>
                <p className="text-xs font-mono text-indigo-500 mb-2">{partner.location}</p>
                <p className="text-[15px] text-slate-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}