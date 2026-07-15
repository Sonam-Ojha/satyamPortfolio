import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaMicroscope } from "react-icons/fa";
import { personalInfo, stats } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line" />
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-icon-row">
              <FaMicroscope className="about-main-icon" />
              <div>
                <h3 className="about-heading">Pharmaceutical Microbiologist</h3>
                <p className="about-location">
                  <FaMapMarkerAlt /> {personalInfo.location}
                </p>
              </div>
            </div>

            <p>
              I am <strong>Satya Prakash Dubey</strong>, a dedicated Microbiologist with over{" "}
              <strong>4 years of progressive experience</strong> in pharmaceutical Quality Control
              across leading pharma companies in India.
            </p>
            <p>
              My expertise spans <strong>environmental monitoring</strong>,{" "}
              <strong>microbial limit testing</strong>, <strong>bioburden testing</strong>, and{" "}
              <strong>bacterial endotoxin testing</strong> — all aligned with strict{" "}
              <strong>cGMP, GLP, and GDP</strong> compliance standards.
            </p>
            <p>
              I take pride in maintaining laboratory integrity, accurate documentation, and
              delivering results that ensure the safety and quality of pharmaceutical products
              reaching patients worldwide.
            </p>

            <div className="about-info">
              <a href={`mailto:${personalInfo.email}`} className="info-item">
                <FaEnvelope className="info-icon" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="info-item">
                <FaPhone className="info-icon" />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="info-item">
                <FaLinkedin className="info-icon" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <a href="/Resume_Satya_Prakash_Dubey.pdf" download="Resume_Satya_Prakash_Dubey.pdf" target="_blank" rel="noreferrer" className="download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="about-right">
            <div className="about-stats">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-highlights">
              <h4 className="highlights-title">Core Expertise</h4>
              {[
                "cGMP Compliance & Quality Assurance",
                "Microbial Limit Testing (MLT)",
                "Environmental Monitoring (EM)",
                "Bacterial Endotoxin Test (BET)",
                "Good Documentation Practices (GDP)",
                "Laboratory Instrument Calibration",
              ].map((item) => (
                <div className="highlight-item" key={item}>
                  <span className="highlight-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
