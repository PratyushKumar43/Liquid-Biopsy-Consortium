"use client";

import { Dna, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <Dna className="w-3 h-3" />
              </div>
              <span className="font-sans font-bold text-slate-900">ILBCCR</span>
            </div>
            <p className="text-sm text-slate-500">Accelerating liquid biopsy technologies for a world without late-stage cancer detection.</p>
          </div>
          
          <div className="flex gap-16 text-[15px]">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 font-sans">Consortium</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600">Governance</a></li>
                <li><a href="#" className="hover:text-indigo-600">Partners</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 font-sans">Research</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">Publications</a></li>
                <li><a href="#" className="hover:text-indigo-600">Clinical Trials</a></li>
                <li><a href="#" className="hover:text-indigo-600">Data Portal</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 font-sans">Legal</h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-mono">© 2024 International Liquid Biopsy Consortium. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}