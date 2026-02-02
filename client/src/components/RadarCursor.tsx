import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function RadarCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      <motion.div
        className="absolute w-8 h-8 -ml-4 -mt-4 border border-primary/40 rounded-full"
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(56, 189, 248, 0.8)" : "rgba(56, 189, 248, 0.4)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        {/* Rotating inner ring */}
        <motion.div 
          className="w-full h-full border-t border-primary/60 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Center dot */}
      <motion.div 
        className="absolute w-1 h-1 bg-primary rounded-full -ml-0.5 -mt-0.5"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "tween", duration: 0 }}
      />
      
      {/* Crosshair lines */}
      <motion.div
        className="absolute w-screen h-[1px] bg-primary/10 top-0 left-0"
        style={{ y: position.y }}
      />
      <motion.div
        className="absolute h-screen w-[1px] bg-primary/10 top-0 left-0"
        style={{ x: position.x }}
      />
    </div>
  );
}
