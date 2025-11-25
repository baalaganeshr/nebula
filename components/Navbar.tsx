import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar = ({ onLogoClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small delay to allow menu to close visually
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
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
              <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors focus:outline-none">Features</button>
              <button onClick={() => scrollToSection('templates')} className="hover:text-white transition-colors focus:outline-none">Templates</button>
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
               <button className="hidden md:flex bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors items-center gap-2">
                  Get Started
               </button>

               {/* Mobile Hamburger Button */}
               <button 
                  className="md:hidden p-2 text-white/90 hover:text-white transition-colors bg-white/10 rounded-lg backdrop-blur-md"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open Menu"
               >
                  <Menu size={20} />
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col p-6 md:hidden overflow-y-auto"
          >
             {/* Header */}
             <div className="flex justify-between items-center mb-12">
                 <div className="flex items-center gap-2">
                    <div className="bg-white text-black p-1.5 rounded-lg">
                        <Layers size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">Nebula</span>
                 </div>
                 <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Close Menu"
                 >
                    <X size={20} />
                 </button>
             </div>

             {/* Navigation Links */}
             <div className="flex flex-col gap-6">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-3xl font-bold text-zinc-400 hover:text-white text-left transition-colors flex items-center justify-between group"
                >
                  Features
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                </button>
                <div className="h-px bg-white/5 w-full"></div>
                
                <button 
                  onClick={() => scrollToSection('templates')} 
                  className="text-3xl font-bold text-zinc-400 hover:text-white text-left transition-colors flex items-center justify-between group"
                >
                  Templates
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                </button>
                <div className="h-px bg-white/5 w-full"></div>

                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-3xl font-bold text-zinc-400 hover:text-white text-left transition-colors flex items-center justify-between group"
                >
                  Contact
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                </button>
             </div>

             {/* Bottom Action */}
             <div className="mt-auto pt-12">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                    Get Started Now
                </button>
                <p className="text-center text-zinc-600 text-xs mt-6">
                  © 2024 Nebula UI Inc.
                </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};