import React, { useState } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
  FaPaperPlane, FaCheckCircle, FaExclamationCircle,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/satyamdubey558@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio Contact: ${form.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line" />
          <p className="section-sub">
            Open to new opportunities, collaborations, and professional discussions
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              Whether you're a recruiter, a pharma company, or a professional looking to
              collaborate — feel free to reach out. I'm always open to the right opportunity.
            </p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-detail">
                <div className="contact-detail-icon"><FaEnvelope /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-detail">
                <div className="contact-detail-icon"><FaPhone /></div>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{personalInfo.phone}</span>
                </div>
              </a>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-btn"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>

          {/* Right Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            {status === "success" && (
              <div className="success-msg">
                <FaCheckCircle />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Satya will get back to you shortly.</p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-reset">
                  Send Another Message
                </button>
              </div>
            )}

            {status === "error" && (
              <div className="error-banner">
                <FaExclamationCircle />
                <span>Something went wrong. Please try emailing directly at <strong>{personalInfo.email}</strong></span>
                <button type="button" onClick={() => setStatus("idle")} className="btn-reset-small">Retry</button>
              </div>
            )}

            {(status === "idle" || status === "loading" || status === "error") && status !== "success" && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={status === "loading"}>
                  {status === "loading"
                    ? <><span className="loading-spinner" /> Sending...</>
                    : <><FaPaperPlane /> Send Message</>}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
