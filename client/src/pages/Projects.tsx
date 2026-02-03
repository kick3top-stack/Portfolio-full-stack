import { TacticalCard } from "@/components/TacticalCard";
import { MOCK_PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-24 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-2">MISSION_LOGS</h2>
          <div className="h-1 w-24 bg-primary mt-4 mb-2" />
          <p className="font-mono text-muted-foreground text-sm max-w-xl">
            // ARCHIVE OF DEPLOYED SYSTEMS AND EXPERIMENTAL PROTOTYPES.
            ACCESS LEVEL: UNRESTRICTED.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {MOCK_PROJECTS.map((project, idx) => (
            <TacticalCard key={project.id} delay={idx * 0.2} className="group overflow-hidden p-0">
               <div className="flex flex-col md:flex-row h-full">
                 <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-primary/20">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTYsIDE4OSwgMjQ4LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48L3N2Zz4=')] opacity-50 z-20 pointer-events-none" />
                 </div>

                 <div className="w-full md:w-3/5 p-8 flex flex-col justify-between relative bg-card/40">
                    <div className="absolute top-4 right-4 text-xs font-mono text-primary/30">
                       ID: #{project.id.toString().padStart(3, '0')}
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/20 pl-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-secondary text-primary/80 text-xs font-mono border border-primary/10">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold text-sm hover:bg-white transition-colors"
                        >
                           <ExternalLink size={14} /> CHECK IT
                        </a>
                      </div>
                    </div>
                 </div>
               </div>
            </TacticalCard>
          ))}
        </div>
      </div>
    </div>
  );
}