import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layout, Box, Zap } from 'lucide-react';

interface TemplateGalleryProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const templates = [
  {
    title: "Mono Portfolio",
    category: "Creative",
    image: "bg-zinc-800",
    description: "A stark, black-and-white portfolio template for photographers and visual artists focused on typography.",
    tag: "Best Seller"
  },
  {
    title: "Venture SaaS",
    category: "Business",
    image: "bg-zinc-900",
    description: "High-conversion landing page designed for B2B startups. Includes pricing tables and feature grids.",
    tag: "New"
  },
  {
    title: "Luxe Commerce",
    category: "E-Commerce",
    image: "bg-neutral-900",
    description: "Minimalist storefront for premium fashion brands. Focuses on large imagery and clean checkout flow.",
    tag: null
  },
  {
    title: "Studio Agency",
    category: "Corporate",
    image: "bg-stone-900",
    description: "Professional digital agency website with case study CMS and team directory integration.",
    tag: "Popular"
  },
  {
    title: "Editorial Pro",
    category: "Content",
    image: "bg-slate-900",
    description: "A content-first theme for magazines and blogs, optimized for readability and ad placements.",
    tag: null
  },
  {
    title: "Horizon Estate",
    category: "Business",
    image: "bg-gray-900",
    description: "Real estate listing platform with map integration and gallery sliders for property showcases.",
    tag: null
  }
];

const categories = ["All", "Creative", "Business", "E-Commerce", "Corporate", "Content"];

const TemplateCard = ({ template }: { template: any; key?: React.Key }) => {
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
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
      className="group flex flex-col h-full w-full"
    >
      {/* Image Card with Spotlight */}
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 mb-5 group-hover:border-zinc-500/50 transition-colors duration-500 shadow-2xl shadow-black/20 z-0"
      >
        {/* Spotlight Effect */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`
          }}
        />

        {/* Background Image/Gradient */}
        <div className={`absolute inset-0 ${template.image} opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100`}></div>
        
        {/* Floating Mockup Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[75%] h-[75%] bg-[#050505] rounded-lg border border-white/5 shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-out z-10 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-black/50">
              <div className="h-4 md:h-5 border-b border-white/5 bg-white/5 flex items-center gap-1.5 px-3 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              </div>
              <div className="flex-1 p-4 relative">
                <div className="w-8 h-8 rounded-md border border-white/10 bg-white/5 mb-3"></div>
                <div className="space-y-2">
                    <div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
                    <div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
        </div>

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-[2px]" />

        {/* Live Preview Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <button className="pointer-events-auto bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-xl hover:scale-105 hover:shadow-white/20">
              Live Preview <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Tag */}
        {template.tag && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded z-30 shadow-sm">
              {template.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">{template.title}</h3>
        </div>
        
        <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {template.description}
        </p>
        
        {/* Meta Footer */}
        <div className="mt-auto flex items-center gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-wider pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Layout size={12} />
              <span>Layout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Box size={12} />
              <span>Components</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={12} />
              <span>Fast</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TemplateGallery = ({ selectedCategory = "All", onSelectCategory }: TemplateGalleryProps) => {
  
  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section className="px-4 md:px-6 w-full">
      <div id="gallery-start" className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Premium <span className="text-zinc-500">Digital Assets.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              Curated interfaces for the modern web. Built with precision for Framer and React.
            </p>
          </div>

          {/* Filter Tabs */}
          {onSelectCategory && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === cat
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.title} template={template} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTemplates.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="min-h-[300px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl mt-8"
            >
                <p className="text-zinc-500 mb-4 font-medium">No templates found in this category.</p>
                {onSelectCategory && (
                  <button 
                      onClick={() => onSelectCategory('All')}
                      className="text-white bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-medium text-sm"
                  >
                      Clear Filters
                  </button>
                )}
            </motion.div>
        )}

      </div>
    </section>
  );
};