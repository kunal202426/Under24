import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text tracking-tight">
            Under24
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Launch Your Website in Under 24 Hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a href="#services">
            <Button 
              size="lg" 
              className="glass-card neon-glow hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              Get Started
            </Button>
          </a>  

          <a href="#about">
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-glass-border hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
            </a>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="grid grid-cols-3 gap-2 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text">24h</div>
            <div className="text-sm text-muted-foreground">Delivery Time</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text">100+</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text">4.6★</div>
            <div className="text-sm text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;