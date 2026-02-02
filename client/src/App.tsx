import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { RadarCursor } from "@/components/RadarCursor";
import { BinaryRain } from "@/components/BinaryRain";
import { AnimatePresence } from "framer-motion";

import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function AnimatedRouter() {
  const [location] = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-body relative overflow-x-hidden">
        {/* Global Effects */}
        <div className="scanline" />
        <BinaryRain />
        <RadarCursor />
        
        {/* Navigation Layer */}
        <Navigation />

        {/* Main Content Area */}
        <main className="relative z-10">
          <AnimatedRouter />
        </main>

        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
