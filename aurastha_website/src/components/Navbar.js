// src/components/Navbar.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/">🚀 MyWeb</Link>

        {/* Toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div id="menu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
