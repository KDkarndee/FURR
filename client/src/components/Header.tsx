import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Studio', href: '/studio' },
    { label: 'Works', href: '/works' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/furr-logo-KbANyud2BBV9tK2KBgbArC.webp"
            alt="FURR"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-foreground hidden sm:inline">FURR</span>
        </motion.a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.div
                  className="h-0.5 bg-primary mt-1"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
