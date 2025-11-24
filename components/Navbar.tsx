import React, { useState, useEffect } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar = ({ onLogoClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div 
        className={`w-full max-w-7xl px-6 transition-all duration-500 ease-in-out pointer-events-auto ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled 
              ? 'bg-[#0f0f11]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] max-w-3xl mx-auto' 
              : 'bg-transparent py-2'
          }`}
        >
          {/* Logo */}
          <button 
            onClick={onLogoClick} 
            className="flex items-center gap-2 group outline-none"
            aria-label="Reset to Home"
          >
            <div className="bg-white text-black p-1.5 rounded-lg group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              <Layers size={18} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-zinc-300 transition-colors">Nebula</span>
          </button>

          {/* Center Links (Visible on Desktop) */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#gallery-start" className="hover:text-white transition-colors">Templates</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
             <a 
               href="https://twitter.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors"
             >
               Twitter
             </a>
             <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Get Started
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};