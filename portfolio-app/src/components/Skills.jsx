import React from "react";
import { skills, instruments } from "../data/portfolio";
import "./Skills.css";

const categories = [
  {
    label: "Technical / Lab Skills",
    key: "technical",
    icon: "🧪",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    label: "Regulatory & Compliance",
    key: "compliance",
    icon: "📋",
    color: "#7c3aed",
    bg: "#faf5ff",
    border: "#ddd6fe",
  },
  {
    label: "Professional Skills",
    key: "soft",
    icon: "🤝",
    color: "#059669",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Skills & Competencies</h2>
          <div className="section-line" />
        </div>

        <div className="skills-top-grid">
          {categories.map(({ label, key, icon, color, bg, border }) => (
            <div className="skill-category" key={key} style={{ borderTop: `4px solid ${color}` }}>
              <h3 className="category-title">
                <span className="cat-icon">{icon}</span> {label}
              </h3>
              <div className="skill-pills">
                {skills[key].map((skill) => (
                  <div
                    className="skill-pill"
                    key={skill}
                    style={{ "--pill-color": color, "--pill-bg": bg, "--pill-border": border }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="instruments-section">
          <h3 className="instruments-title">
            <span>⚙️</span> Laboratory Instruments & Equipment
          </h3>
          <div className="instruments-grid">
            {instruments.map((item) => (
              <div className="instrument-card" key={item}>
                <div className="instrument-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
