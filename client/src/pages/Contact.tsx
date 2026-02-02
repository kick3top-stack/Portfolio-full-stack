import { TacticalCard } from "@/components/TacticalCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid frequency"),
  message: z.string().min(10, "Transmission too short"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Transmission sent:", data);
    toast({
      title: "TRANSMISSION SUCCESSFUL",
      description: "Message encrypted and dispatched to HQ.",
      variant: "default",
      className: "border-primary text-primary bg-background font-mono",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 px-6 md:px-24 pb-20 flex items-center justify-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Info Column */}
        <div className="space-y-8">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <h2 className="text-5xl md:text-6xl text-white mb-6">INITIATE<br/><span className="text-primary">UPLINK</span></h2>
              <p className="font-mono text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4">
                SECURE CHANNEL OPEN.<br/>
                AWAITING INPUT...<br/>
                ENCRYPTION: AES-256
              </p>
           </motion.div>

           <div className="space-y-4 font-mono text-sm">
             <div className="p-4 border border-primary/20 bg-primary/5">
                <p className="text-primary/70 text-xs mb-1">LOCATION_DATA</p>
                <p className="text-white">37.7749° N, 122.4194° W</p>
             </div>
             <div className="p-4 border border-primary/20 bg-primary/5">
                <p className="text-primary/70 text-xs mb-1">CONTACT_FREQ</p>
                <p className="text-white">kick.3top@gmail.com</p>
             </div>
           </div>
        </div>

        {/* Form Column */}
        <TacticalCard title="TRANSMISSION_FORM" className="bg-black/40">
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-2">
             <div className="space-y-2">
               <label className="text-xs font-mono text-primary/70 uppercase">Identify Sender</label>
               <input 
                 {...form.register("name")}
                 className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                 placeholder="CODENAME OR ID"
               />
               {form.formState.errors.name && (
                 <span className="text-destructive text-xs font-mono">{form.formState.errors.name.message}</span>
               )}
             </div>

             <div className="space-y-2">
               <label className="text-xs font-mono text-primary/70 uppercase">Return Frequency</label>
               <input 
                 {...form.register("email")}
                 className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                 placeholder="EMAIL_ADDRESS"
               />
               {form.formState.errors.email && (
                 <span className="text-destructive text-xs font-mono">{form.formState.errors.email.message}</span>
               )}
             </div>

             <div className="space-y-2">
               <label className="text-xs font-mono text-primary/70 uppercase">Payload</label>
               <textarea 
                 {...form.register("message")}
                 rows={5}
                 className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                 placeholder="ENTER MESSAGE CONTENT..."
               />
               {form.formState.errors.message && (
                 <span className="text-destructive text-xs font-mono">{form.formState.errors.message.message}</span>
               )}
             </div>

             <button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full bg-primary text-background font-bold font-mono py-4 tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
             >
               {isSubmitting ? (
                 <>UPLOADING <Loader2 className="animate-spin" size={16}/></>
               ) : (
                 <>TRANSMIT <Send size={16} /></>
               )}
             </button>
           </form>
        </TacticalCard>
      </div>
    </div>
  );
}
