import { Globe } from "@/components/Globe";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  const { displayedText } = useTypingEffect(
    "SYSTEM ONLINE.\nFULL-STACK ENGINEER ACTIVE.\nSPECIALTY: MODERN WEB APPLICATIONS.\nLET'S BUILD SOMETHING.",
    30
  );

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pt-20 md:pt-0">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 z-10 space-y-8 order-2 md:order-1 pb-20 md:pb-0">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-mono text-primary/50 text-sm tracking-widest mb-4"
        >
          // FULL_STACK_ENGINEER • REACT • NODE • TYPESCRIPT
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none tracking-tight">
          VICTOR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            VALDES
          </span>
        </h1>

        <p className="text-muted-foreground font-mono tracking-wide max-w-md">
          I design and build fast, scalable web applications with a focus on
          performance, clarity, and real-world impact.
        </p>

        <div className="h-32 font-mono text-sm md:text-base text-muted-foreground whitespace-pre-line leading-relaxed border-l-2 border-primary/30 pl-4 py-2 bg-primary/5 rounded-r-sm">
          {displayedText}
          <span className="animate-pulse inline-block w-2 h-4 bg-primary ml-1 align-middle" />
        </div>

        <div className="flex gap-4 pt-4">
          <Link href="/projects">
            <button className="group relative px-8 py-3 bg-primary/10 border border-primary text-primary font-mono tracking-widest overflow-hidden hover:bg-primary hover:text-background transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                VIEW_PROJECTS <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-3 border border-muted-foreground/30 text-muted-foreground font-mono tracking-widest hover:border-primary/50 hover:text-primary transition-colors">
              CONTACT_ME
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/50 pt-12">
          <Terminal size={14} />
          <span>SYS.STATUS: OPEN_TO_OPPORTUNITIES</span>
          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Right Globe */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 hidden md:block" />
        <Globe className="w-full h-full" />
      </div>
    </div>
  );
}
