import React from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCategorySelect?: (category: string) => void;
}

export const Footer = ({ onCategorySelect }: FooterProps) => {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* Top Section: CTA & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          
          {/* CTA Section - Left Aligned */}
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
              Ready to build?
            </h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
              Join thousands of developers crafting the future of the web with Nebula UI. Open source, accessible, and production-ready.
            </p>
            <button className="group inline-flex items-center gap-2 text-white text-lg border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all">
              Start a project 
              <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Links Section - Right Aligned on Desktop */}
          <div className="flex flex-col justify-start md:items-end">
            <div className="flex flex-col gap-6 text-left md:text-right">
              <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Product</h4>
              <ul className="space-y-4 text-lg text-zinc-400">
                <li>
                  <button onClick={() => onCategorySelect?.('Creative')} className="hover:text-white transition-colors duration-200">Portfolio</button>
                </li>
                <li>
                  <button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors duration-200">SaaS</button>
                </li>
                <li>
                  <button onClick={() => onCategorySelect?.('E-Commerce')} className="hover:text-white transition-colors duration-200">Commerce</button>
                </li>
                <li>
                  <button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors duration-200">Components</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Brand Text */}
        <div className="w-full flex justify-center items-center border-t border-white/5 pt-16 pb-8 overflow-hidden">
             <h1 className="text-[15vw] leading-[0.8] font-bold text-[#111] select-none tracking-tighter mix-blend-screen">NEBULA</h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/5 gap-6">
          <div className="flex gap-4 order-2 md:order-1">
             <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Twitter size={18} /></a>
             <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Github size={18} /></a>
             <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Linkedin size={18} /></a>
          </div>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">Privacy Policy</p>
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">Terms of Service</p>
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">© {new Date().getFullYear()} Nebula UI Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};