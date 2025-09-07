// src/components/Testimonials.js
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Real Estate Developer, Bangalore",
      feedback:
        "Aurastha helped us generate consistent, high-quality leads for our new project launch. Their ethical approach and transparent reporting set them apart.",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head, Realty Group",
      feedback:
        "The team redesigned our website with a modern, responsive look. Within 3 months, our organic traffic doubled thanks to their SEO strategies.",
    },
    {
      name: "Arjun Reddy",
      role: "Builder, South India",
      feedback:
        "We wanted trustworthy digital partners, and Aurastha delivered. From social media to content marketing, everything was handled professionally.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="card shadow-sm h-100 p-4 border-0">
                <p className="text-muted fst-italic">“{t.feedback}”</p>
                <h6 className="fw-bold mt-3">{t.name}</h6>
                <small className="text-primary">{t.role}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
