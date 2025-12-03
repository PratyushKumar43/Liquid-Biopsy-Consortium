"use client";

import { Dna, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md">
            <Dna className="w-4 h-4" />
          </div>
          <span className="font-sans font-semibold text-[18px] tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            ILB Consortium
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600 font-sans">
          <a href="#mission" className="hover:text-indigo-600 transition-colors">Mission</a>
          <a href="#partners" className="hover:text-indigo-600 transition-colors">Partners</a>
          <a href="#research" className="hover:text-indigo-600 transition-colors">Research</a>
          <a href="#resources" className="hover:text-indigo-600 transition-colors">Resources</a>
        </div>

        <button className="bg-indigo-50 font-sans text-indigo-700 px-5 py-2 rounded-full text-[14px] font-semibold hover:bg-indigo-100 transition-colors flex items-center gap-2">
          Member Login <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}