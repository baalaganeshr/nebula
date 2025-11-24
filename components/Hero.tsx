import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      
      {/* High-End Aurora Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[20%] w-[70vw] h-[70vw] bg-brand-primary/5 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-[60vw] h-[60vw] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full text-center z-10 flex flex-col items-center justify-center flex-1">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 hover:bg-white/10 transition-colors cursor-pointer group"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">v2.0 Available Now</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white mb-8 leading-[0.9] text-balance"
        >
          Crafting <span className="text-zinc-600">Digital</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">Perfection.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          An ecosystem of high-fidelity components and templates. <br className="hidden md:block"/> Designed for the modern web, optimized for scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
        >
          <button 
            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            className="group h-14 px-10 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Library
            <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};