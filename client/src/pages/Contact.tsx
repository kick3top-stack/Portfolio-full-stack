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
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message too short"),
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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Message sent:", data);
    toast({
      title: "Message Sent",
      description: "Message received. I’ll be in touch shortly.",
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
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              INITIATE<br/>
              <span className="text-primary">UPLINK</span>
            </h2>
            <p className="font-mono text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4">
              FULL-STACK ENGINEER CHANNEL<br/>
              AVAILABLE FOR ROLES & PROJECTS<br/>
              STACK: NEXT · NODE · TYPESCRIPT
            </p>
          </motion.div>

          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 border border-primary/20 bg-primary/5">
              <p className="text-primary/70 text-xs mb-1">AVAILABILITY</p>
              <p className="text-white">Remote · Worldwide</p>
            </div>

            <div className="p-4 border border-primary/20 bg-primary/5">
              <p className="text-primary/70 text-xs mb-1">CONTACT_FREQ</p>
              <p className="text-white">kick.3top@gmail.com</p>
            </div>

            <div className="p-4 border border-primary/20 bg-primary/5">
              <p className="text-primary/70 text-xs mb-1">RESPONSE_TIME</p>
              <p className="text-white">&lt; 4 HOURS</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <TacticalCard title="TRANSMISSION_FORM" className="bg-black/40">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-mono text-primary/70 uppercase">
                Sender Name
              </label>
              <input 
                {...form.register("name")}
                className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                placeholder="YOUR NAME OR CODENAME"
              />
              {form.formState.errors.name && (
                <span className="text-destructive text-xs font-mono">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary/70 uppercase">
                Email Address
              </label>
              <input 
                {...form.register("email")}
                className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                placeholder="YOUR EMAIL"
              />
              {form.formState.errors.email && (
                <span className="text-destructive text-xs font-mono">
                  {form.formState.errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary/70 uppercase">
                Message / Opportunity
              </label>
              <textarea 
                {...form.register("message")}
                rows={5}
                className="w-full bg-background border border-border p-3 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                placeholder="ENTER MESSAGE OR OPPORTUNITY..."
              />
              {form.formState.errors.message && (
                <span className="text-destructive text-xs font-mono">
                  {form.formState.errors.message.message}
                </span>
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

            <p className="text-xs font-mono text-muted-foreground text-center">
              Hiring, freelance, or collaboration inquiries welcome.
            </p>
          </form>
        </TacticalCard>
      </div>
    </div>
  );
}
