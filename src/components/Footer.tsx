const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* Main Footer */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src="/logofull.jpg" 
                alt="Under24 Logo" 
                className="h-20 mb-5"
              />

              <p className="text-muted-foreground mb-6 max-w-md">
                India's fastest website delivery service. From concept to launch in under 24 hours.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/under24.co.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card border-glass-border flex items-center justify-center hover:scale-110 transition-all duration-300 hover:neon-glow"
                  aria-label="Instagram"
                >
                  <span className="text-sm">📷</span>
                </a>
              </div>

            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Static Websites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dynamic Websites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio Sites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hosting & SEO</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="mailto:under24.co@gmail.com" className="hover:text-primary transition-colors">
                    under24.co@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917597209058" className="hover:text-primary transition-colors">
                    +91 7597209058
                  </a>
                </li>
                <li>Gurgaon, India</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Under24. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;