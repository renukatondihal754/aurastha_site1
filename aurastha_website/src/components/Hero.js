// src/components/Hero.js
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "90vh",
        backgroundImage: "url('/banner_34.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="col-md-8  bg-opacity-50 p-4 rounded">
          <motion.h1
            className="display-4 fw-bold mb-3 text-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Real Estate Growth
          </motion.h1>
          <motion.p
            className="lead mb-4 text-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We help builders and developers scale with ethical digital marketing and web solutions.
          </motion.p>
          <motion.a
            href="/contact"
            className="btn btn-primary btn-lg shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
