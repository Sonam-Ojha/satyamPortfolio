import React from "react";
import { responsibilities } from "../data/portfolio";
import "./Projects.css";

export default function Responsibilities() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Daily Work</span>
          <h2 className="section-title">Key Responsibilities</h2>
          <div className="section-line" />
          <p className="resp-subtitle">
            Core laboratory and quality control responsibilities handled across pharmaceutical companies
          </p>
        </div>

        <div className="resp-grid">
          {responsibilities.map((item) => (
            <div className="resp-card" key={item.title}>
              <div className="resp-icon">{item.icon}</div>
              <div className="resp-content">
                <h3 className="resp-title">{item.title}</h3>
                <p className="resp-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
