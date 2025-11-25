import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const cursor = useRef({ x: 0, y: 0 });
  const lastCursor = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      addParticles(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Fire Palette
    const colors = ['#FF4500', '#FF8C00', '#FFD700', '#FFFFFF']; // Red, Dark Orange, Gold, White

    const addParticles = (x: number, y: number) => {
      // Calculate velocity based on mouse speed
      const dx = x - lastCursor.current.x;
      const dy = y - lastCursor.current.y;
      const dist = Math.hypot(dx, dy);
      
      lastCursor.current = { x, y };

      // Only spawn if moving fast enough or randomly
      if (dist < 2 && Math.random() > 0.1) return;

      const count = Math.min(5, Math.floor(dist * 0.5) + 1);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        
        particles.current.push({
          x: x,
          y: y,
          vx: (Math.cos(angle) * speed) + (dx * 0.1), // Combine radial burst with mouse inertia
          vy: (Math.sin(angle) * speed) + (dy * 0.1),
          life: 1.0,
          decay: Math.random() * 0.03 + 0.02,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2 + 1
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Composite operation for glowing effect
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        // Draw "Tail Line" Spark
        ctx.beginPath();
        ctx.lineWidth = p.size * p.life;
        ctx.strokeStyle = p.color;
        
        // The line stretches opposite to velocity to look like a spark trail
        const tailX = p.x - p.vx * 4; 
        const tailY = p.y - p.vy * 4;

        ctx.moveTo(p.x, p.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        
        // Optional: Add a small glow dot at the head
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5 * p.life, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="ghost-cursor fixed inset-0 pointer-events-none z-[9999]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};