// src/components/Services.js
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Real Estate Digital Marketing",
      desc: "Tailored online campaigns designed to generate high-quality leads for builders and developers.",
      icon: "🌐",
    },
    {
      title: "Web Development",
      desc: "Responsive, SEO-optimized websites that showcase your projects and convert visitors into buyers.",
      icon: "💻",
    },
    {
      title: "SEO & Content Marketing",
      desc: "Boost your project visibility on Google with ethical SEO practices and engaging content.",
      icon: "📈",
    },
    {
      title: "Social Media Management",
      desc: "Build strong brand presence and engage with potential buyers on platforms they trust.",
      icon: "📱",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="card shadow-sm h-100 p-4 border-0">
                <div className="fs-1">{service.icon}</div>
                <h5 className="fw-bold mt-3">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
