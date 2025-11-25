import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Smartphone, Headphones, Paintbrush } from 'lucide-react';

// Spotlight Card Component
const BentoCard = ({ title, desc, icon: Icon, delay, colSpan = 1 }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className={`relative rounded-3xl bg-[#080808] border border-white/5 overflow-hidden group ${colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'} flex flex-col h-full`}
    >
      {/* Spotlight Gradient Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      {/* Content */}
      <div className="relative h-full p-8 flex flex-col items-start z-10">
        <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-[90%]">{desc}</p>
        
        {/* Decorative Grid Lines inside card */}
        <div className="absolute bottom-4 right-4 opacity-10 scale-75 origin-bottom-right transition-transform group-hover:scale-90 duration-500">
           <Icon size={120} strokeWidth={0.5} />
        </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-32 px-6 relative scroll-mt-24" id="features">
       <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4 block"
                >
                    System Features
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Engineered for <br /><span className="text-zinc-600">Scale & Precision.</span>
                </motion.h2>
            </div>
            <div className="max-w-sm">
                <p className="text-zinc-500 leading-relaxed text-sm">
                    We obsess over every pixel so you don't have to. Built on modern foundations for the next generation of web applications.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
             <BentoCard 
                title="Adaptive Layouts" 
                desc="Fluid responsiveness that maintains harmony across 4K displays and mobile devices."
                icon={Smartphone}
                delay={1}
                colSpan={2}
             />
             <BentoCard 
                title="Lightning Fast" 
                desc="Zero-runtime CSS and optimized asset delivery for sub-second interactions."
                icon={Zap}
                delay={2}
                colSpan={1}
             />
             <BentoCard 
                title="24/7 Expert Support" 
                desc="Direct line to our engineering team for custom implementations."
                icon={Headphones}
                delay={3}
                colSpan={1}
             />
             <BentoCard 
                title="SEO Optimized" 
                desc="Semantic structure and automated meta-tag generation for peak visibility."
                icon={Globe}
                delay={4}
                colSpan={2}
             />
             <BentoCard 
                title="Brand Systems" 
                desc="Atomic design principles allow for infinite scalability of your brand assets."
                icon={Paintbrush}
                delay={5}
                colSpan={2}
             />
              <BentoCard 
                title="Bank-Grade Security" 
                desc="End-to-end encryption and compliance ready infrastructure."
                icon={ShieldCheck}
                delay={6}
                colSpan={1}
             />
          </div>
       </div>
    </section>
  );
};