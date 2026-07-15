import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp, FaBriefcase } from "react-icons/fa";
import { experience } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line" />
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className={`timeline-item ${i === expanded ? "active" : ""}`} key={job.id}>
              <div className="timeline-dot">
                {job.current ? <span className="dot-pulse" /> : null}
                <FaBriefcase />
              </div>

              <div
                className="timeline-card"
                onClick={() => setExpanded(i === expanded ? -1 : i)}
              >
                <div className="timeline-header">
                  <div className="timeline-title-wrap">
                    <div className="company-row">
                      {job.current && <span className="current-badge">● Current</span>}
                      <span className="job-type-badge">{job.type}</span>
                    </div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-company">
                      <FaBuilding /> {job.company}
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <FaCalendarAlt /> {job.duration}
                    </span>
                    <span className="meta-item">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <button className="expand-btn">
                      {i === expanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>

                {i === expanded && (
                  <div className="timeline-body">
                    <ul className="timeline-desc">
                      {job.description.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
