
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row gy-4 align-items-center">

          {/* Brand Section */}
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <Link to="/" className="footer-brand">
              <span className="footer-logo">T</span>
              TaskFlow
            </Link>

            <p className="footer-description mt-3 mb-0">
              Organize tasks, manage teams, and achieve more
              together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 text-center">
            <h6 className="footer-heading">Quick Links</h6>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 text-center text-lg-end">
            <h6 className="footer-heading">Stay Connected</h6>
            <p className="footer-description mb-0">
              Thank you for choosing TaskFlow!
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center text-center gap-2">
          <p className="mb-0">
            © 2026 <span className="footer-highlight">Jahnavi</span>.
            All rights reserved.
          </p>

          <p className="mb-0 footer-made">
            Made with <span className="heart">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
