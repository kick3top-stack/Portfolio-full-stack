import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TacticalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
}

export function TacticalCard({ children, className = "", delay = 0, title }: TacticalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`tactical-border bg-card/50 backdrop-blur-sm p-6 group hover:bg-card/80 transition-colors ${className}`}
    >
      {title && (
        <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-mono text-primary/70 tracking-widest uppercase border border-primary/20">
          {title}
        </div>
      )}
      
      {/* Decorative corner lines inside */}
      <div className="absolute top-2 right-2 w-8 h-[1px] bg-primary/20" />
      <div className="absolute top-2 right-2 h-8 w-[1px] bg-primary/20" />
      
      {children}
    </motion.div>
  );
}
