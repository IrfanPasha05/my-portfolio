import React, { useState } from "react";

function Navbar({ navLinks, resumePath }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="brand">
        <div className="brand-badge">IP</div>
        <div className="brand-copy">
          <h1>Irfan Pasha</h1>
          <p>AWS • DevOps • L2 Support • Queue Manager</p>
        </div>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map((link, index) => (
          <a
            key={`${link.label}-${index}`}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={resumePath}
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="download-icon">⬇</span>
        <span>Download CV</span>
      </a>
    </header>
  );
}

export default Navbar;