import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Type, Image as ImageIcon, Layers, Settings, Play, Move, Box } from 'lucide-react';

export const UiMockup = () => {
  const [selectedLayer, setSelectedLayer] = useState('Hero Section');
  const [accentColor, setAccentColor] = useState('#8b5cf6');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const layers = ['Hero Section', 'Navigation', 'Feature Grid', 'Testimonials', 'Footer'];

  return (
    <motion.div 
      initial={{ y: 60, opacity: 0, rotateX: 10 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full perspective-1000"
      style={{ perspective: '2000px' }}
    >
      {/* Main App Window - Responsive Aspect Ratio */}
      <div className="bg-[#0b0f19] rounded-xl md:rounded-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] min-h-[400px] max-h-[800px] relative z-10 mx-auto">
        
        {/* Toolbar */}
        <div className="h-10 md:h-12 shrink-0 border-b border-white/5 flex items-center justify-between px-3 md:px-5 bg-[#0f172a]">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5 md:gap-2" aria-hidden="true">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ef4444]"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#eab308]"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#22c55e]"></div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-lg border border-white/5" role="toolbar" aria-label="Editor Tools">
            <button aria-label="Select Tool" className={`p-1 md:p-1.5 rounded-md transition-colors ${!isDragging ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}><MousePointer2 size={14} /></button>
            <button aria-label="Move Tool" className={`p-1 md:p-1.5 rounded-md transition-colors ${isDragging ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}><Move size={14} /></button>
            <button aria-label="Type Tool" className="p-1 md:p-1.5 rounded-md text-slate-500 hover:text-white transition-colors"><Type size={14} /></button>
            <button aria-label="Image Tool" className="p-1 md:p-1.5 rounded-md text-slate-500 hover:text-white transition-colors"><ImageIcon size={14} /></button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
            </div>
            <button className="bg-brand-primary px-3 py-1 md:py-1.5 rounded-md text-white hover:bg-violet-600 transition-colors flex items-center gap-2 text-[10px] md:text-xs font-bold shadow-lg shadow-brand-primary/20">
                <Play size={10} fill="currentColor" /> Preview
            </button>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Sidebar (Layers) */}
          <div className="w-48 lg:w-60 border-r border-white/5 bg-[#0b0f19] hidden md:flex flex-col shrink-0">
            <div className="p-3 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between shrink-0">
                Layers <Layers size={12} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1 px-2 overflow-y-auto custom-scrollbar flex-1" role="list">
              {layers.map((layer, i) => (
                <button 
                  key={i} 
                  role="listitem"
                  onClick={() => setSelectedLayer(layer)}
                  className={`flex items-center gap-3 p-2 rounded-lg text-xs md:text-sm cursor-pointer transition-all w-full text-left ${
                    selectedLayer === layer ? 'bg-brand-primary/20 text-brand-primary font-medium' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                   <div className={`w-1 h-3 rounded-full ${selectedLayer === layer ? 'bg-brand-primary' : 'bg-transparent'}`}></div>
                   {layer}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 bg-[#020617] relative overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8 cursor-crosshair">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* The "Design" being edited */}
            <motion.div 
              drag
              dragMomentum={false}
              dragElastic={0}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              onDrag={(event, info) => setPosition({ x: Math.round(info.point.x), y: Math.round(info.point.y) })}
              onClick={() => setSelectedLayer('Hero Section')}
              className="bg-brand-bg border border-white/10 rounded-xl w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] aspect-[9/18] md:aspect-[3/4] shadow-2xl relative overflow-hidden cursor-grab active:cursor-grabbing group"
              style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -20px ${accentColor}44` }}
              whileHover={{ scale: 1.01 }}
            >
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-4 md:h-5 bg-black rounded-b-xl z-20 flex justify-center items-center">
                   <div className="w-6 md:w-8 h-1 rounded-full bg-white/20"></div>
               </div>

               {/* Fake content inside the canvas */}
               <div 
                 className="h-1/2 flex flex-col items-center justify-center transition-colors duration-500 relative"
                 style={{ 
                   background: `radial-gradient(circle at 50% 0%, ${accentColor}33 0%, transparent 70%)`
                 }}
               >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-md border border-white/20 shadow-xl mb-3 md:mb-5 flex items-center justify-center">
                    <Box className="text-white/50 w-5 h-5 md:w-auto md:h-auto" />
                  </div>
                  <div className="w-3/4 h-4 md:h-5 bg-white/10 rounded-lg mb-2"></div>
                  <div className="w-1/2 h-2.5 md:h-3 bg-white/5 rounded-lg"></div>
               </div>

               <div className="p-4 md:p-5 space-y-3 md:space-y-4 bg-brand-bg relative z-10">
                 <div className="flex gap-2 md:gap-3">
                     <div className="h-14 md:h-20 flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                     <div className="h-14 md:h-20 flex-1 bg-white/5 rounded-xl border border-white/5"></div>
                 </div>
                 <div className="space-y-2">
                   <div className="h-2.5 w-full bg-white/5 rounded"></div>
                   <div className="h-2.5 w-5/6 bg-white/5 rounded"></div>
                   <div className="h-2.5 w-4/6 bg-white/5 rounded"></div>
                 </div>
                 <div className="pt-2">
                    <div 
                        className="h-9 md:h-10 w-full rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center text-[10px] md:text-xs font-bold text-white uppercase tracking-wider"
                        style={{ backgroundColor: accentColor }}
                    >
                        Get Started
                    </div>
                 </div>
               </div>

               {/* Selection indicators */}
               <div className={`absolute inset-0 border-2 pointer-events-none transition-all duration-200 z-30 ${selectedLayer === 'Hero Section' ? 'border-brand-primary opacity-100' : 'border-transparent opacity-0'}`}>
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-brand-primary rounded-full shadow"></div>
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-brand-primary rounded-full shadow"></div>
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-brand-primary rounded-full shadow"></div>
                  <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-brand-primary rounded-full shadow"></div>
               </div>
            </motion.div>

          </div>

          {/* Right Sidebar (Properties) */}
          <div className="w-56 lg:w-64 border-l border-white/5 bg-[#0b0f19] hidden lg:flex flex-col shrink-0">
             <div className="p-3 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between items-center border-b border-white/5 shrink-0">
               Properties <Settings size={12} aria-hidden="true" />
             </div>
             <div className="p-4 space-y-6 overflow-y-auto custom-scrollbar flex-1">
                
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-medium">Selected Element</div>
                  <div className="bg-white/5 rounded-lg p-2 text-xs md:text-sm text-white font-medium flex items-center gap-2 border border-white/5">
                    <Layers size={12} className="text-brand-primary" aria-hidden="true" />
                    {selectedLayer}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-medium">Layout</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-lg p-2 text-[10px] md:text-xs text-slate-300 flex justify-between items-center border border-white/5">
                      <span className="text-slate-500">X</span> 
                      <span className="font-mono">{position.x}</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-[10px] md:text-xs text-slate-300 flex justify-between items-center border border-white/5">
                      <span className="text-slate-500">Y</span> 
                      <span className="font-mono">{position.y}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 font-medium">Style</div>
                  <div className="space-y-2">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] text-slate-500" id="accent-label">Accent</span>
                         <div className="flex items-center gap-2">
                            <input 
                                aria-labelledby="accent-label"
                                type="color" 
                                value={accentColor} 
                                onChange={(e) => setAccentColor(e.target.value)}
                                className="w-4 h-4 rounded border-none p-0 bg-transparent cursor-pointer" 
                            />
                            <span className="text-[10px] font-mono text-slate-300 uppercase">{accentColor}</span>
                         </div>
                      </div>
                      <div className="h-px bg-white/5 w-full"></div>
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] text-slate-500">Opacity</span>
                         <span className="text-[10px] font-mono text-slate-300">100%</span>
                      </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Glow behind */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] blur-[100px] -z-10 rounded-full transition-colors duration-1000 opacity-20 pointer-events-none"
        style={{ 
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 60%)` 
        }}
      ></div>
    </motion.div>
  );
};