import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { AiModal } from './components/AiModal';
import { TemplateGallery } from './components/TemplateGallery';

function App() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <main className="min-h-screen text-white selection:bg-brand-primary selection:text-white w-full overflow-x-hidden">
      <Navbar />
      <Hero onOpenAi={() => setIsAiOpen(true)} />
      
      <TemplateGallery />
      
      <BentoGrid />
      
      <Footer />
      
      {/* AI Modal Overlay */}
      <AiModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </main>
  );
}

export default App;