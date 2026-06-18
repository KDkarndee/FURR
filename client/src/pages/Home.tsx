import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/_core/hooks/useAuth';

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const projects = [
    {
      id: 1,
      title: 'Serene Bedroom Sanctuary',
      category: 'Residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-bedroom-34C6JT6Tfsizmf284zhvkL.webp',
      description: 'A tranquil bedroom retreat with warm tones and natural materials.',
    },
    {
      id: 2,
      title: 'Modern Culinary Hub',
      category: 'Kitchen Design',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-kitchen-g97K9vyb39iQi6aPte6QKT.webp',
      description: 'A sophisticated kitchen combining functionality with contemporary aesthetics.',
    },
    {
      id: 3,
      title: 'Contemporary Living Space',
      category: 'Living Room',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-lounge-hzQcZSonEbBcLuQZxUxbAG.webp',
      description: 'An artistic living room showcasing sculptural furniture and curated design.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/hero-living-room-KdhVFYN7xDcRosBMbcfqxs.webp"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Spaces Designed with Purpose
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contemporary aesthetics meets timeless craftsmanship. Discover how FURR transforms spaces into curated experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => (window.location.href = '/works')}
            >
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-foreground/60 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-foreground/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/product-furniture-P3NFCubTwqNJfmnpXRiopS.webp"
                alt="About FURR"
                className="rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About FURR</h2>
              <p className="text-lg text-foreground/80 mb-4">
                FURR is a luxury interior design studio dedicated to creating spaces that transcend the ordinary. We believe that great design is not just about aesthetics—it's about creating environments that enhance how people live.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Our approach combines contemporary design principles with timeless craftsmanship. Each project is a collaboration, a journey of discovery that results in spaces uniquely tailored to our clients' vision and lifestyle.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/studio')}
              >
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch with our team to discuss your project.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
            onClick={() => (window.location.href = '/contact')}
          >
            Start Your Project
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
