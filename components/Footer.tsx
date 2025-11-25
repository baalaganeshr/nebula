import React from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCategorySelect?: (category: string) => void;
}

export const Footer = ({ onCategorySelect }: FooterProps) => {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand/CTA Section - Spans 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white leading-[0.95]">
                Ready to build?
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-lg">
                Join thousands of developers crafting the future of the web with Nebula UI. Open source, accessible, and production-ready.
              </p>
              <button className="group inline-flex items-center gap-2 text-white text-lg font-medium border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all w-fit">
                Start a project 
                <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Links Section - Spans 5 cols - Grid for links */}
          <div className="lg:col-span-5 flex flex-col lg:items-end">
             <div className="grid grid-cols-2 gap-12 md:gap-24 text-left">
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Platform</h4>
                    <ul className="space-y-4 text-base text-zinc-400">
                        <li>
                            <button onClick={() => onCategorySelect?.('Creative')} className="hover:text-white transition-colors text-left">Portfolio</button>
                        </li>
                        <li>
                            <button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors text-left">SaaS</button>
                        </li>
                        <li>
                            <button onClick={() => onCategorySelect?.('E-Commerce')} className="hover:text-white transition-colors text-left">Commerce</button>
                        </li>
                    </ul>
                </div>
                
                 {/* Column 2 */}
                 <div className="flex flex-col gap-6">
                    <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Collections</h4>
                    <ul className="space-y-4 text-base text-zinc-400">
                        <li>
                            <button onClick={() => onCategorySelect?.('Corporate')} className="hover:text-white transition-colors text-left">Agency</button>
                        </li>
                        <li>
                            <button onClick={() => onCategorySelect?.('Content')} className="hover:text-white transition-colors text-left">Editorial</button>
                        </li>
                        <li>
                            <button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors text-left">All Components</button>
                        </li>
                    </ul>
                </div>
             </div>
          </div>
        </div>

        {/* Massive Brand Text */}
        <div className="w-full flex justify-center items-center border-t border-white/5 pt-16 pb-8">
             <h1 className="text-[13vw] md:text-[12vw] leading-none font-bold text-[#111] select-none tracking-tighter mix-blend-screen pointer-events-none">NEBULA</h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/5 gap-6">
          <div className="flex items-center gap-6 order-2 md:order-1">
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">© {new Date().getFullYear()} Nebula UI Inc.</p>
             <div className="hidden md:flex gap-6">
                <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-mono uppercase tracking-widest transition-colors">Privacy</a>
                <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-mono uppercase tracking-widest transition-colors">Terms</a>
             </div>
          </div>
          
          <div className="flex gap-4 order-1 md:order-2">
             <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Twitter size={16} /></a>
             <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Github size={16} /></a>
             <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"><Linkedin size={16} /></a>
          </div>
          
          {/* Mobile only legal links */}
          <div className="flex md:hidden gap-6 order-3">
             <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-mono uppercase tracking-widest transition-colors">Privacy</a>
             <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-mono uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};