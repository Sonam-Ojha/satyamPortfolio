import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaFlask } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Responsibilities" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <span className="nav-logo">
          <FaFlask className="nav-logo-icon" />
          <span>S. P. Dubey<span className="dot">.</span></span>
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Resume_Satya_Prakash_Dubey.pdf"
              className="resume-btn"
              target="_blank"
              rel="noreferrer"
              download="Resume_Satya_Prakash_Dubey.pdf"
            >
              Resume
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
