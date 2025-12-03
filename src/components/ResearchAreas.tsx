"use client";

import { TestTube2, Activity, Dna, Baby, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

const researchCards = [
  {
    icon: TestTube2,
    title: "Breast Cancer",
    description: "Developing novel biomarkers for early-stage screening in high-risk populations.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500&auto=format&fit=crop",
    delay: 0
  },
  {
    icon: Activity,
    title: "Cervical Cancer",
    description: "Non-invasive monitoring and detection utilizing advanced TFET sensors.",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=500&auto=format&fit=crop",
    delay: 100
  },
  {
    icon: Dna,
    title: "Colorectal Cancer",
    description: "Analyzing ctDNA for post-operative recurrence monitoring.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    delay: 200
  },
  {
    icon: Baby,
    title: "Pediatric Tumors",
    description: "Specialized liquid biopsy panels for rare pediatric malignancies.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    delay: 300
  }
];

export default function ResearchAreas() {
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
    <section id="research" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-element">
        <div>
          <span className="text-indigo-600 font-mono text-xs tracking-wider uppercase font-bold">Consortium Focus</span>
          <h2 className="text-h2 font-bold mt-2 text-slate-900">Key Research Areas</h2>
        </div>
        <p className="max-w-md text-slate-600 text-base">
          We focus on high-impact cancers where early detection through minimally invasive methods can significantly improve survival rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {researchCards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 reveal-element"
            style={{ transitionDelay: `${card.delay}ms` }}
          >
            <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors"></div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-4 -mt-10 relative z-10 border-4 border-white">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="text-h4 font-bold mb-2">{card.title}</h3>
              <p className="text-[15px] text-slate-500 mb-4 line-clamp-2">{card.description}</p>
              <a href="#" className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1 group/link font-sans">
                View Studies <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}