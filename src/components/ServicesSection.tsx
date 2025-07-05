import { Button } from "@/components/ui/button";
import { Code, Briefcase, Users, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Static Website",
      description: "Lightning-fast static sites built with modern frameworks. Perfect for portfolios and landing pages.",
      features: ["React/Next.js", "SEO Optimized", "Mobile Responsive", "Fast Loading"],
      price: "₹7,000",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Briefcase,
      title: "Dynamic Website",
      description: "Interactive web applications with databases, user authentication, and real-time features.",
      features: ["Full-Stack", "Database Integration", "User Auth", "Admin Panel"],
      price: "₹12,000",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Portfolio Website",
      description: "Stunning portfolio sites that showcase your work and help you stand out from the crowd.",
      features: ["Custom Design", "Gallery/Projects", "Contact Forms", "Analytics"],
      price: "₹7,000",
      gradient: "from-accent to-pink"
    },
    {
      icon: Rocket,
      title: "Hosting & Extras",
      description: "Complete package with hosting, domain, SSL, SEO optimization, and logo design services.",
      features: ["Domain & Hosting","Logo Design","Monthly maintainence","Fast experience"],
      price: "₹399/month",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id = "services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple static sites to complex web applications, we deliver exactly what you need in under 24 hours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-4 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <span className="text-xl font-bold gradient-text">{service.price}</span>
                  </div>
                  <a href = "#contact">
                  <Button className="w-full group-hover:neon-glow transition-all duration-300">
                    Get Started
                  </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-4">
            Need something custom? We'd love to hear about your project.
          </p>
          <a href = "#contact">
          <Button variant="outline" size="lg" className="glass-card border-glass-border hover:scale-105 transition-all duration-300">
            Let's Talk Custom
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;