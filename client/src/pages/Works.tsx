import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Serene Bedroom Sanctuary',
      category: 'residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-bedroom-34C6JT6Tfsizmf284zhvkL.webp',
      description: 'A tranquil bedroom retreat with warm tones and natural materials.',
      year: '2024',
    },
    {
      id: 2,
      title: 'Modern Culinary Hub',
      category: 'kitchen',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-kitchen-g97K9vyb39iQi6aPte6QKT.webp',
      description: 'A sophisticated kitchen combining functionality with contemporary aesthetics.',
      year: '2024',
    },
    {
      id: 3,
      title: 'Contemporary Living Space',
      category: 'living',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-lounge-hzQcZSonEbBcLuQZxUxbAG.webp',
      description: 'An artistic living room showcasing sculptural furniture and curated design.',
      year: '2024',
    },
    {
      id: 4,
      title: 'Luxury Bedroom Design',
      category: 'residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-bedroom-34C6JT6Tfsizmf284zhvkL.webp',
      description: 'Premium bedroom with bespoke furnishings and ambient lighting.',
      year: '2023',
    },
    {
      id: 5,
      title: 'Gourmet Kitchen',
      category: 'kitchen',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-kitchen-g97K9vyb39iQi6aPte6QKT.webp',
      description: 'Chef-inspired kitchen with premium appliances and elegant design.',
      year: '2023',
    },
    {
      id: 6,
      title: 'Minimalist Living',
      category: 'living',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663463446414/YPnorww6ES5ArPX9ptaWqu/project-lounge-hzQcZSonEbBcLuQZxUxbAG.webp',
      description: 'Clean lines and functional elegance in a modern living environment.',
      year: '2023',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'living', label: 'Living Spaces' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-foreground/5">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Works</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore our portfolio of carefully curated interior design projects and home decor solutions.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layoutId={`project-${project.id}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-sm font-semibold uppercase tracking-wider">{project.category}</p>
                      <p className="text-xs text-white/80">{project.year}</p>
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your space into something extraordinary.
          </p>
          <button
            onClick={() => (window.location.href = '/contact')}
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
