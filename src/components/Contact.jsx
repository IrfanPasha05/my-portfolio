import React from "react";

function Contact({ contactData }) {
  return (
    <section className="section reveal" id="contact">
      <div className="section-heading">
        <span>Let's Connect</span>
        <h3>Contact</h3>
      </div>

      <div className="contact-grid">
        <div className="glass-card contact-card">
          <h4>Get in Touch</h4>
          <p>{contactData.intro}</p>

          <div className="contact-list">
            <a href={`mailto:${contactData.email}`}>
              <span>📧</span>
              <span>{contactData.email}</span>
            </a>

            <a href={contactData.phoneLink}>
              <span>📞</span>
              <span>{contactData.phone}</span>
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🔗</span>
              <span>{contactData.linkedin.replace("https://", "")}</span>
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💻</span>
              <span>{contactData.github.replace("https://", "")}</span>
            </a>

            <a
              href={contactData.devto}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>✍</span>
              <span>{contactData.devto.replace("https://", "")}</span>
            </a>

            <div>
              <span>📍</span>
              <span>{contactData.location}</span>
            </div>
          </div>
        </div>

        <div className="glass-card contact-card">
          <h4>Languages</h4>

          <div className="language-pills">
            {contactData.languages.map((language, index) => (
              <span key={`${language}-${index}`}>{language}</span>
            ))}
          </div>

          <div className="contact-cta">
            <a
              href={contactData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;