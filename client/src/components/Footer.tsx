import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/furr-logo-KbANyud2BBV9tK2KBgbArC.webp"
                alt="FURR"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold">FURR</span>
            </div>
            <p className="text-sm text-foreground/60">
              Spaces designed with purpose. Contemporary aesthetics meets timeless craftsmanship.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/studio" className="text-foreground/60 hover:text-primary transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="/works" className="text-foreground/60 hover:text-primary transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/60">Interior Design</li>
              <li className="text-foreground/60">Space Planning</li>
              <li className="text-foreground/60">Home Decor</li>
              <li className="text-foreground/60">Consultation</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <p className="text-sm text-foreground/60 mb-2">Bangkok, Thailand</p>
            <p className="text-sm text-foreground/60 mb-2">hello@furr.design</p>
            <p className="text-sm text-foreground/60">+66 (0) 2 XXX XXXX</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; {currentYear} FURR. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
