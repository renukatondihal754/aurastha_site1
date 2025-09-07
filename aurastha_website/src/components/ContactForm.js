// src/components/ContactForm.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@") || !form.message) {
      setError("⚠️ Please fill all fields correctly!");
      return;
    }
    setError("");
    alert("✅ Form submitted successfully 🚀");
     // 🔹 Clear form fields after success
  setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-5 bg-light" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
      <div className="container">
        <motion.h2
          className="fw-bold text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get in Touch
        </motion.h2>

        <div className="row align-items-center">
          {/* Left Contact Info */}
          <motion.div
            className="col-md-5 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 rounded-4 shadow-lg bg-dark text-light h-100">
              <h4 className="fw-bold mb-3">📞 Contact Information</h4>
              <p><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</p>
              <p><i className="bi bi-envelope-fill me-2"></i> contact@myweb.com</p>
              <p><i className="bi bi-geo-alt-fill me-2"></i> Bangalore, India</p>

              <div className="mt-3">
                <a href="#" className="text-light fs-4 me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-light fs-4 me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 rounded-4 shadow-lg bg-white">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3 p-3"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control mb-3 p-3"
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-control mb-3 p-3"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  className="btn btn-primary w-100 py-2 fw-bold shadow"
                  style={{ borderRadius: "12px" }}
                >
                  ✉️ Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
