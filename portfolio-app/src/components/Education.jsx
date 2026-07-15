import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import { education } from "../data/portfolio";
import "./Education.css";

const degreeColors = ["#0284c7", "#7c3aed", "#059669"];
const degreeBg = ["#f0f9ff", "#faf5ff", "#f0fdf4"];
const degreeBorder = ["#bae6fd", "#ddd6fe", "#bbf7d0"];

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>

        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div
                className="edu-icon-wrap"
                style={{ background: degreeBg[i], border: `1px solid ${degreeBorder[i]}`, color: degreeColors[i] }}
              >
                <FaGraduationCap />
              </div>
              <div className="edu-body">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">
                      <FaMapMarkerAlt className="edu-pin" /> {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <div className="edu-right">
                    <span className="edu-year">
                      <FaCalendarAlt /> {edu.year}
                    </span>
                    <span
                      className="edu-grade"
                      style={{ background: degreeBg[i], color: degreeColors[i], border: `1px solid ${degreeBorder[i]}` }}
                    >
                      <FaMedal /> {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
