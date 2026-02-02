import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 border border-destructive/50 p-12 bg-destructive/5 relative">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-destructive" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-destructive" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-destructive" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-destructive" />

        <AlertTriangle className="mx-auto h-20 w-20 text-destructive animate-pulse" />
        
        <h1 className="text-6xl font-display font-bold text-destructive tracking-wider">
          404
        </h1>
        
        <div className="space-y-2 font-mono text-sm text-destructive/80">
          <p>CRITICAL ERROR: SIGNAL LOST</p>
          <p>COORDINATES NOT FOUND IN DATABASE</p>
        </div>

        <Link href="/">
          <button className="mt-8 px-8 py-3 bg-destructive text-white font-mono tracking-widest hover:bg-destructive/80 transition-colors">
            RETURN TO BASE
          </button>
        </Link>
      </div>
    </div>
  );
}
