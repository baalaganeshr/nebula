import React from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCategorySelect?: (category: string) => void;
}

export const Footer = ({ onCategorySelect }: FooterProps) => {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden relative border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* Left: Brand & CTA */}
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-md">
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

          {/* Right: Links - Replaced Company with Website Combinations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 w-full">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-white">Templates</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                        <li><button onClick={() => onCategorySelect?.('Creative')} className="hover:text-white transition-colors">Portfolio</button></li>
                        <li><button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors">Startup</button></li>
                        <li><button onClick={() => onCategorySelect?.('E-Commerce')} className="hover:text-white transition-colors">Commerce</button></li>
                        <li><button onClick={() => onCategorySelect?.('Corporate')} className="hover:text-white transition-colors">Agency</button></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-white">Categories</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                        <li><button onClick={() => onCategorySelect?.('Content')} className="hover:text-white transition-colors">Blog</button></li>
                        <li><button onClick={() => onCategorySelect?.('Business')} className="hover:text-white transition-colors">SaaS</button></li>
                        <li><button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors">Landing Page</button></li>
                        <li><button onClick={() => onCategorySelect?.('All')} className="hover:text-white transition-colors">Mobile App</button></li>
                    </ul>
                </div>
                
                 {/* Column 3 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-white">Resources</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    </ul>
                </div>
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} Nebula UI Inc. All rights reserved.</p>
          
          <div className="flex gap-6 items-center">
             <div className="flex gap-4">
                 <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={18} /></a>
                 <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
                 <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};