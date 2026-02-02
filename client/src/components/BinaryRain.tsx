import { useEffect, useRef } from "react";

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const columns = Math.floor(width / 20);
    const drops: number[] = new Array(columns).fill(1);
    
    // Characters: Binary + some Katakana for matrix feel
    const chars = "01010101010101アイウエオカキクケコサシスセソ01"; 

    const draw = () => {
      // Trail effect
      ctx.fillStyle = "rgba(11, 12, 16, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#38bdf8"; // Primary color
      ctx.font = "14px 'JetBrains Mono'";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        // Add some random opacity variation
        ctx.globalAlpha = Math.random() * 0.5 + 0.1; 
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        // Reset drop to top randomly
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      ctx.globalAlpha = 1.0;
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
    />
  );
}
