// src/components/Footer.js
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🚀 MyWeb</h5>
            <p>Building responsive and SEO-optimized websites.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Follow Us</h6>
            <a href="#" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3 fs-5"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center small mb-0">© {new Date().getFullYear()} MyWeb. All rights reserved.</p>
      </div>
    </footer>
  );
}
