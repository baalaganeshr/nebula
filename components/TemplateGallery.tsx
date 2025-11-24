import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
    description: "A content-first theme for magazines and blogs. optimized for readability and ad placements.",
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

export const TemplateGallery = ({ selectedCategory = "All", onSelectCategory }: TemplateGalleryProps) => {
  
  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section className="px-4 md:px-6">
      <div id="gallery-start" className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-brand-border pb-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight text-balance">
              Premium <span className="text-zinc-500">Digital Assets.</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
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
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 border ${
                    selectedCategory === cat
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-zinc-500 border-transparent hover:border-zinc-800 hover:text-white hover:bg-zinc-900'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template) => (
              <motion.div
                layout
                key={template.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="group flex flex-col h-full bg-transparent cursor-pointer"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-brand-card mb-5 transition-all duration-500 group-hover:border-zinc-700 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                  
                  {/* Background Image/Gradient - Scales Up Slowly */}
                  <div className={`absolute inset-0 ${template.image} opacity-80 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100`}></div>
                  
                  {/* Floating Mockup Element - Floats Up and Scales Slightly */}
                  <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] bg-[#050505] rounded-lg border border-white/5 shadow-2xl flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] z-10 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.03] group-hover:-translate-y-[calc(50%+16px)] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
                    <div className="h-4 md:h-5 border-b border-white/5 bg-white/5 flex items-center gap-1.5 px-2 md:px-3 shrink-0">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-zinc-600"></div>
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-zinc-600"></div>
                    </div>
                    <div className="flex-1 p-3 md:p-4 relative">
                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 mb-3"></div>
                       <div className="space-y-2">
                           <div className="h-1.5 md:h-2 w-2/3 bg-white/10 rounded-full"></div>
                           <div className="h-1.5 md:h-2 w-1/2 bg-white/10 rounded-full"></div>
                       </div>
                    </div>
                  </div>

                  {/* Dark Overlay for Button Contrast */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  {/* Button Container - Centered - Fades In */}
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <button className="pointer-events-auto bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 shadow-xl hover:shadow-2xl">
                        Live Preview <ArrowUpRight size={18} />
                    </button>
                  </div>

                  {/* Tag */}
                  {template.tag && (
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded z-30 shadow-sm pointer-events-none">
                        {template.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-1">
                  <div className="flex justify-between items-start mb-2.5">
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-zinc-300 transition-colors line-clamp-1">{template.title}</h3>
                  </div>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center gap-3 md:gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-wider mt-auto">
                     <span className="hover:text-zinc-400 transition-colors cursor-default">React</span>
                     <span className="w-0.5 h-0.5 rounded-full bg-zinc-700"></span>
                     <span className="hover:text-zinc-400 transition-colors cursor-default">Framer</span>
                     <span className="w-0.5 h-0.5 rounded-full bg-zinc-700"></span>
                     <span className="hover:text-zinc-400 transition-colors cursor-default">Tailwind</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTemplates.length === 0 && (
            <div className="min-h-[400px] flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-3xl mt-8">
                <p className="text-zinc-500 mb-4 font-medium">No templates found in this category.</p>
                {onSelectCategory && (
                  <button 
                      onClick={() => onSelectCategory('All')}
                      className="text-white bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-medium text-sm"
                  >
                      Clear Filters
                  </button>
                )}
            </div>
        )}

      </div>
    </section>
  );
};