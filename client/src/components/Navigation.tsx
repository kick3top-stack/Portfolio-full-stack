import { Link, useLocation } from "wouter";
import { NAV_ITEMS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 hidden md:flex items-center justify-between px-8 py-6 pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="font-display font-bold text-2xl tracking-widest text-primary group-hover:text-white transition-colors">
                CMD_PORTFOLIO
              </span>
              <span className="text-[10px] text-primary/50 font-mono tracking-[0.3em]">
                {"SYS.VER.2.0.4" + "(Delta Force)"}
              </span>
            </div>
          </Link>
        </div>

        <div className="pointer-events-auto flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div 
                  className={`
                    relative px-6 py-2 cursor-pointer font-mono text-sm tracking-widest transition-all duration-300
                    hover:bg-primary/10
                    ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
                  `}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-highlight"
                      className="absolute inset-0 border border-primary/50 bg-primary/5"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                    </motion.div>
                  )}
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Header & Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <Link href="/">
           <span className="font-display font-bold text-xl tracking-widest text-primary">CMD_SYS</span>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary p-2 border border-primary/30 rounded-sm active:bg-primary/20"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[65px] left-0 right-0 z-30 bg-background/95 border-b border-primary/20 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div 
                    onClick={() => setIsOpen(false)}
                    className={`
                      font-mono text-lg tracking-widest py-3 border-l-2 pl-4 cursor-pointer
                      ${location === item.href 
                        ? 'border-primary text-primary bg-primary/5' 
                        : 'border-transparent text-muted-foreground hover:text-primary hover:border-primary/50'}
                    `}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
