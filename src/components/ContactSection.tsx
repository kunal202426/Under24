import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 mx-auto mb-6">
            <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Ready to Launch?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we'll get back to you in under 24 hours with a custom quote.
          </p>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <form 
            action="https://formspree.io/f/mqabjwvr" 
            method="POST" 
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="glass-card border-glass-border"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="glass-card border-glass-border"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="requirement" className="text-sm font-medium">
                Project Requirements
              </label>
              <Textarea
                id="requirement"
                name="requirement"
                required
                className="glass-card border-glass-border min-h-[120px]"
                placeholder="Tell us about your project... What type of website do you need? Any specific features or design preferences?"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full neon-glow hover:scale-105 transition-all duration-300 text-lg py-6"
            >
              Launch My Project 🚀
            </Button>
          </form>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Email</div>
              <div className="font-medium">under24.co@gmail.com</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Response Time</div>
              <div className="font-medium">Under 24 Hours</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
              <div className="font-medium">+91 7597209058</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
