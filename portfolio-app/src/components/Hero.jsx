import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaPhone, FaArrowDown, FaFlask } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

const roles = [
  "Microbiologist",
  "QC Officer – Pharma",
  "cGMP Specialist",
  "Sterility Assurance Expert",
];

/* Floating medical background shapes */
const bgShapes = [
  { type: "molecule", x: 5,  y: 10, size: 90,  delay: 0,   dur: 8  },
  { type: "cell",     x: 88, y: 8,  size: 70,  delay: 1.5, dur: 10 },
  { type: "dna",      x: 78, y: 55, size: 55,  delay: 3,   dur: 7  },
  { type: "molecule", x: 12, y: 70, size: 65,  delay: 2,   dur: 9  },
  { type: "cell",     x: 50, y: 85, size: 45,  delay: 0.5, dur: 11 },
  { type: "flask",    x: 92, y: 78, size: 50,  delay: 4,   dur: 8  },
  { type: "cross",    x: 35, y: 5,  size: 35,  delay: 1,   dur: 12 },
  { type: "cell",     x: 65, y: 20, size: 40,  delay: 2.5, dur: 9  },
  { type: "molecule", x: 25, y: 40, size: 30,  delay: 3.5, dur: 10 },
];

function MedicalShape({ type, x, y, size, delay, dur }) {
  const style = {
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    opacity: 0.06,
    animation: `floatShape ${dur}s ease-in-out ${delay}s infinite`,
    pointerEvents: "none",
  };

  if (type === "molecule") return (
    <svg style={style} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="12" fill="#0284c7" />
      <circle cx="20" cy="30" r="8"  fill="#0284c7" />
      <circle cx="80" cy="30" r="8"  fill="#0284c7" />
      <circle cx="20" cy="70" r="8"  fill="#0284c7" />
      <circle cx="80" cy="70" r="8"  fill="#0284c7" />
      <line x1="50" y1="50" x2="20" y2="30" stroke="#0284c7" strokeWidth="3" />
      <line x1="50" y1="50" x2="80" y2="30" stroke="#0284c7" strokeWidth="3" />
      <line x1="50" y1="50" x2="20" y2="70" stroke="#0284c7" strokeWidth="3" />
      <line x1="50" y1="50" x2="80" y2="70" stroke="#0284c7" strokeWidth="3" />
    </svg>
  );

  if (type === "cell") return (
    <svg style={style} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="45" ry="35" stroke="#0284c7" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="14" fill="#0284c7" opacity="0.5" />
      <circle cx="35" cy="38" r="5"  fill="#0284c7" />
      <circle cx="65" cy="45" r="4"  fill="#0284c7" />
      <circle cx="42" cy="63" r="4"  fill="#0284c7" />
      <circle cx="63" cy="62" r="3"  fill="#0284c7" />
    </svg>
  );

  if (type === "dna") return (
    <svg style={style} viewBox="0 0 60 120" fill="none">
      {[0,1,2,3,4,5].map(i => (
        <React.Fragment key={i}>
          <line x1="10" y1={10+i*20} x2="50" y2={10+i*20} stroke="#0284c7" strokeWidth="2.5" />
          <circle cx="10" cy={10+i*20} r="5" fill="#0284c7" />
          <circle cx="50" cy={10+i*20} r="5" fill="#0284c7" />
        </React.Fragment>
      ))}
      <path d="M10,10 Q35,35 10,70 Q35,95 10,110" stroke="#0284c7" strokeWidth="2.5" fill="none" />
      <path d="M50,10 Q25,35 50,70 Q25,95 50,110" stroke="#0284c7" strokeWidth="2.5" fill="none" />
    </svg>
  );

  if (type === "flask") return (
    <svg style={style} viewBox="0 0 80 100" fill="none">
      <path d="M25,5 L25,40 L5,85 Q2,95 10,95 L70,95 Q78,95 75,85 L55,40 L55,5 Z"
        stroke="#0284c7" strokeWidth="3" fill="none" />
      <line x1="20" y1="5" x2="60" y2="5" stroke="#0284c7" strokeWidth="3" />
      <circle cx="25" cy="70" r="6" fill="#0284c7" />
      <circle cx="50" cy="80" r="4" fill="#0284c7" />
      <circle cx="38" cy="65" r="3" fill="#0284c7" />
    </svg>
  );

  if (type === "cross") return (
    <svg style={style} viewBox="0 0 100 100" fill="none">
      <rect x="35" y="5"  width="30" height="90" rx="8" fill="#0284c7" />
      <rect x="5"  y="35" width="90" height="30" rx="8" fill="#0284c7" />
    </svg>
  );

  return null;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero">

      {/* Medical Background Shapes */}
      <div className="hero-bg-shapes">
        {bgShapes.map((s, i) => (
          <MedicalShape key={i} {...s} />
        ))}
        {/* Hexagon grid overlay */}
        <svg className="hex-grid" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {[...Array(12)].map((_, i) => (
            <polygon
              key={i}
              points="30,0 60,17 60,52 30,69 0,52 0,17"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
              opacity="0.08"
              transform={`translate(${(i % 4) * 120 + (Math.floor(i / 4) % 2 === 0 ? 0 : 60)}, ${Math.floor(i / 4) * 90})`}
            />
          ))}
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <FaFlask /> Pharmaceutical Quality Control
          </div>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">
            <span className="typed">{displayed}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-subtitle">{personalInfo.subtitle}</p>
          <p className="hero-bio">{personalInfo.bio}</p>

          <div className="hero-actions">
            <Link to="experience" smooth duration={500} offset={-70} className="btn-primary">
              View Experience
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-contacts">
            <a href={`mailto:${personalInfo.email}`} className="contact-chip">
              <FaEnvelope /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact-chip">
              <FaPhone /> {personalInfo.phone}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-chip linkedin">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="blob" />
          <div className="hero-avatar">
            <img
              src="/profile.jpeg"
              alt="Satya Prakash Dubey"
              className="avatar-img"
              onError={(e) => {
                e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=satyamprakash&backgroundColor=b6e3f4&clothingColor=1f4e79&facialHairType=beardMedium";
              }}
            />
          </div>
          <div className="hero-card hero-card-1">
            <span className="card-icon">🔬</span>
            <div>
              <strong>4+ Years</strong>
              <span>QC Experience</span>
            </div>
          </div>
          <div className="hero-card hero-card-2">
            <span className="card-icon">✅</span>
            <div>
              <strong>cGMP</strong>
              <span>Certified Practice</span>
            </div>
          </div>
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-70} className="scroll-down">
        <FaArrowDown />
        <span>Scroll Down</span>
      </Link>
    </section>
  );
}
