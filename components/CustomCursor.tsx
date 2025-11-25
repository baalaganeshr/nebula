import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor = () => {
  const [sparkles, setSparkles] = useState<{id: number; x: number; y: number; size: number; rotation: number; color: string}[]>([]);
  const sparkleId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);
      
      // Spawn density check
      if (dist > 25) {
        lastPos.current = { x: clientX, y: clientY };
        addSparkle(clientX, clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addSparkle = (x: number, y: number) => {
    const id = sparkleId.current++;
    // High visibility neon palette
    const colors = ['#FFFFFF', '#08F7FE', '#FE53BB', '#F5D300', '#00FF9C']; 
    const newSparkle = {
      id,
      x,
      y,
      // Larger size for better visibility: 12px to 28px
      size: Math.random() * 16 + 12,
      rotation: Math.random() * 180,
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    setSparkles(prev => {
      const next = [...prev, newSparkle];
      if (next.length > 25) return next.slice(next.length - 25);
      return next;
    });
    
    // Cleanup time matches animation duration
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== id));
    }, 1000);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0.2, rotate: sparkle.rotation }}
            animate={{ 
              opacity: [1, 1, 0], // Stay visible for most of the duration
              scale: [0.2, 1.2, 0.5], 
              rotate: sparkle.rotation + 90 
            }}
            transition={{ 
              duration: 0.8, 
              times: [0, 0.6, 1], // Fade out only in the last 40%
              ease: "easeOut" 
            }}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              x: "-50%",
              y: "-50%"
            }}
          >
            <StarIcon color={sparkle.color} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const StarIcon = ({ color }: { color: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill={color} 
    className="w-full h-full"
    style={{ 
        // Intense glow for visibility on dark backgrounds
        filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color})` 
    }}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);