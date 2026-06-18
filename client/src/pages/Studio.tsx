import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Studio() {
  const team = [
    {
      name: 'Creative Direction',
      description: 'Led by award-winning designers with 15+ years of experience in luxury interior design.',
    },
    {
      name: 'Design Philosophy',
      description: 'We believe in creating spaces that reflect the unique personality and lifestyle of our clients.',
    },
    {
      name: 'Craftsmanship',
      description: 'Every detail is carefully considered, from material selection to final installation.',
    },
    {
      name: 'Collaboration',
      description: 'We work closely with clients, architects, and artisans to bring visions to life.',
    },
  ];

  const services = [
    {
      title: 'Interior Design',
      description: 'Comprehensive design solutions for residential and commercial spaces.',
    },
    {
      title: 'Space Planning',
      description: 'Strategic layout and functional design for optimal space utilization.',
    },
    {
      title: 'Furniture Curation',
      description: 'Handpicked furniture and decor pieces that complement your design vision.',
    },
    {
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring seamless execution and timely delivery.',
    },
    {
      title: 'Consultation',
      description: 'Expert advice on design trends, materials, and aesthetic direction.',
    },
    {
      title: 'Home Decor',
      description: 'Curated home decor products and accessories for the discerning homeowner.',
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About FURR Studio</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We are a team of passionate designers dedicated to creating extraordinary spaces that inspire and delight.
          </p>
        </motion.div>
      </section>

      {/* Studio Values */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-foreground/5 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.name}</h3>
                <p className="text-foreground/70 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-foreground/5">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We begin by understanding your vision, lifestyle, and aesthetic preferences through in-depth consultation.',
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Our team creates mood boards, sketches, and 3D visualizations to bring your ideas to life.',
              },
              {
                step: '03',
                title: 'Design Refinement',
                description: 'We refine the design based on your feedback, ensuring every detail aligns with your vision.',
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Our project managers oversee every aspect of execution, from procurement to installation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Contact our team to schedule a consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
            onClick={() => (window.location.href = '/contact')}
          >
            Get in Touch
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
