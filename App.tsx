import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { AiModal } from './components/AiModal';
import { TemplateGallery } from './components/TemplateGallery';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const element = document.getElementById('gallery-start');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleReset = () => {
    setSelectedCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen text-white bg-brand-bg font-sans selection:bg-indigo-500/30 selection:text-indigo-200 w-full overflow-x-hidden">
      <CustomCursor />
      
      <Navbar onLogoClick={handleReset} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Template Gallery Section */}
      <div className="py-24 scroll-mt-24" id="templates">
        <TemplateGallery 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
      </div>
      
      {/* Feature Grid Section */}
      <BentoGrid />
      
      <Footer onCategorySelect={handleCategorySelect} />
      
      {/* AI Modal Overlay */}
      <AiModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </main>
  );
}

export default App;
