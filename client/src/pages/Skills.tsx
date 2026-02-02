import { TacticalCard } from "@/components/TacticalCard";
import { MOCK_SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = Array.from(new Set(MOCK_SKILLS.map(s => s.category)));

  return (
    <div className="min-h-screen pt-32 px-6 md:px-24 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-primary/20 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-3">
              CORE_CAPABILITIES
            </h2>
            <p className="font-mono text-primary/60 text-sm tracking-widest mb-4">
              // SYSTEMS_I_USE_TO_BUILD_AND_SCALE_PRODUCTS
            </p>
            <p className="text-muted-foreground max-w-xl">
              These are the tools and technologies I use to design, build, and
              deliver production-ready digital products for clients — from
              polished frontends to scalable backend systems.
            </p>
          </div>

          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            STATUS: DEPLOYMENT_READY
          </div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <TacticalCard
              key={category}
              delay={idx * 0.1}
              title={`DIVISION: ${category.toUpperCase()}`}
              className="h-full"
            >
              <div className="space-y-6 pt-4">
                {MOCK_SKILLS
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.id} className="group">
                      <div className="flex justify-between text-sm font-mono mb-2 text-muted-foreground group-hover:text-primary transition-colors">
                        <span>{skill.name}</span>
                        <span className="text-primary/80">
                          {skill.level}
                        </span>
                      </div>

                      <div className="h-1 w-full bg-secondary/40 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-full bg-primary/80 relative"
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </TacticalCard>
          ))}

          {/* Decorative / Authority Panel */}
          <div className="hidden lg:flex relative border border-dashed border-primary/20 p-6 flex-col justify-center items-center opacity-60">
            <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center animate-spin-slow">
              <div className="w-16 h-16 border-t border-b border-primary/50 rounded-full" />
            </div>
            <p className="mt-6 font-mono text-xs text-primary/60 tracking-widest text-center">
              PERFORMANCE VERIFIED
            </p>
            <p className="mt-2 text-xs text-muted-foreground text-center max-w-[200px]">
              Tools selected for reliability, scalability, and long-term
              maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
