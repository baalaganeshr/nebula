import React from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCategorySelect?: (category: string) => void;
}

export const Footer = ({ onCategorySelect }: FooterProps) => {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden relative border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Main Grid: 4 Columns on Tablet/Desktop for strict alignment */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & CTA - Spans 2 Columns */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="max-w-sm">
               <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                Start your next project.
              </h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                The ultimate starting point for your next big idea. 
                Designed for speed, built for scale.
              </p>
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                Get Started <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Templates Column */}
          <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Templates</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                  <li><button onClick={() => onCategorySelect?.('Creative')} className="hover:text-white transition-colors text-left">Portfolio</button></li>
                  <li><button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors text-left">Startup</button></li>
                  <li><button onClick={() => onCategorySelect?.('E-Commerce')} className="hover:text-white transition-colors text-left">Commerce</button></li>
                  <li><button onClick={() => onCategorySelect?.('Corporate')} className="hover:text-white transition-colors text-left">Agency</button></li>
              </ul>
          </div>

          {/* Categories Column */}
          <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Categories</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                  <li><button onClick={() => onCategorySelect?.('Content')} className="hover:text-white transition-colors text-left">Blog</button></li>
                  <li><button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors text-left">SaaS</button></li>
                  <li><button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors text-left">Landing Page</button></li>
                  <li><button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors text-left">Mobile App</button></li>
              </ul>
          </div>

        </div>

        {/* Bottom Bar - Centered */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/5 gap-6 text-center w-full">
          <div className="flex gap-6 items-center justify-center">
             <a href="#" className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Twitter size={20} /></a>
             <a href="#" className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Github size={20} /></a>
             <a href="#" className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Linkedin size={20} /></a>
          </div>
          <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} Nebula UI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};