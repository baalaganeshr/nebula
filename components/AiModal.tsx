import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, CheckCircle2, ArrowRight, Terminal } from 'lucide-react';

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiModal = ({ isOpen, onClose }: AiModalProps) => {
  const [step, setStep] = useState<'input' | 'generating' | 'success'>('input');
  const [prompt, setPrompt] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setPrompt('');
      setProgress(0);
    }
  }, [isOpen]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setStep('generating');
    
    // Simulate generation progress
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setStep('success'), 400);
      }
      setProgress(p);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#0b0f19] border border-white/10 rounded-3xl shadow-2xl shadow-brand-primary/20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0f172a]">
              <div className="flex items-center gap-3 text-white font-medium">
                <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Terminal size={18} />
                </div>
                <span>Start Your Project</span>
              </div>
              <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {step === 'input' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tell us your vision</h3>
                    <p className="text-slate-400 text-sm">Describe the website you need. Our AI will analyze your requirements and prepare a preliminary project roadmap.</p>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. I need a modern e-commerce site for handmade jewelry. It should have a dark aesthetic, a blog section, and integration with Instagram..."
                      className="relative w-full h-40 bg-[#020617] rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button 
                      onClick={handleGenerate}
                      disabled={!prompt.trim()}
                      className="bg-white text-black font-bold py-3 px-8 rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                    >
                      <Sparkles size={16} className="text-brand-primary" />
                      Generate Proposal
                    </button>
                  </div>
                </div>
              )}

              {step === 'generating' && (
                <div className="py-12 flex flex-col items-center text-center space-y-8">
                  <div className="relative w-20 h-20">
                     <svg className="animate-spin text-brand-primary w-full h-full" viewBox="0 0 24 24">
                        <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center text-xs font-bold font-mono text-white">{Math.round(progress)}%</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Analyzing Requirements...</h3>
                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-slate-400 text-sm">Structuring site architecture</p>
                        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-brand-secondary" 
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 'success' && (
                <div className="py-8 flex flex-col items-center text-center space-y-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border border-green-500/20 mb-2 shadow-[0_0_30px_-10px_rgba(34,197,94,0.4)]"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Proposal Ready!</h3>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto">We've generated a project roadmap based on your vision. Our team will review it and contact you shortly.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    View Dashboard
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Footer gradient line */}
            <div className="h-1 w-full bg-cosmos-gradient"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};