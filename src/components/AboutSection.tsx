import { Code, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const steps = [
    {
      icon: Code,
      title: "Design",
      description: "We craft beautiful, modern designs tailored to your brand and vision.",
      emoji: "🖌️"
    },
    {
      icon: Rocket,
      title: "Deploy", 
      description: "Lightning-fast development with cutting-edge tools and technologies.",
      emoji: "⚙️"
    },
    {
      icon: Users,
      title: "Deliver",
      description: "Your website goes live in under 24 hours, ready to impress your audience.",
      emoji: "🚀"
    }
  ];

  return (
    <section id = "about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Launch Day Comes Early.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Under24, we design, develop and deliver websites. 
                Whether you're a startup, creator, or entrepreneur — we've got your back.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center neon-glow">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        {step.title} <span className="text-2xl">{step.emoji}</span>
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl animate-float">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl relative overflow-hidden">
                {/* Code-like visualization */}
                <div className="absolute inset-4 space-y-3">
                  <div className="h-3 bg-primary/40 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-secondary/40 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-3 bg-accent/40 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="h-3 bg-primary/40 rounded w-4/5 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="h-3 bg-secondary/40 rounded w-1/3 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                </div>
                
                {/* Terminal cursor */}
                <div className="absolute bottom-4 left-4 w-2 h-4 bg-primary animate-pulse"></div>
              </div>
              
              {/* Code snippets floating around */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg code-font text-xs text-primary animate-float" style={{ animationDelay: '1s' }}>
                &lt;Under24 /&gt;
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-lg code-font text-xs text-secondary animate-float" style={{ animationDelay: '2s' }}>
                npm run deploy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;