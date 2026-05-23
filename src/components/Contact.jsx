import React from "react";

function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="glass-card contact-card">
        <h3 className="contact-heading">Get in Touch</h3>

        <p className="contact-text">
          I am open to DevOps Engineer and Cloud Engineer opportunities.
        </p>

        <div className="contact-details">
          <p>📧 ip.irfanpasha5@gmail.com</p>

          <p>📞 +91 8951936502</p>

          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/irfan-pasha-8b8091100/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/irfan-pasha-8b8091100
            </a>
          </p>

          <p>
            💻{" "}
            <a
              href="https://github.com/IrfanPasha05"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/IrfanPasha05
            </a>
          </p>

          <p>
            ✍️{" "}
            <a
              href="https://dev.to/irfanpasha"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.to/irfanpasha
            </a>
          </p>

          <p>📍 Bangalore, Karnataka, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;