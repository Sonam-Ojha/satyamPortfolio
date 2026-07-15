import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaArrowUp, FaFlask } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import "./Footer.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Responsibilities" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <FaFlask className="footer-flask" />
              {personalInfo.name}<span className="dot">.</span>
            </span>
            <p className="footer-tagline">
              Microbiologist · Quality Control · Pharmaceutical Industry
            </p>
          </div>

          <nav className="footer-nav">
            {navLinks.map(({ id, label }) => (
              <Link key={id} to={id} smooth duration={500} offset={-70}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact-links">
            <a href={`mailto:${personalInfo.email}`}>
              <FaEnvelope /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`}>
              <FaPhone /> {personalInfo.phone}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
             &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
          <Link to="hero" smooth duration={800} className="back-to-top">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
