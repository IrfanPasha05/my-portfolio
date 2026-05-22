import React from "react";

function About({ aboutData }) {
  return (
    <section className="section reveal" id="about">
      <div className="section-heading">
        <span>About Me</span>
        <h3>Professional Summary</h3>
      </div>

      <div className="glass-card about-card">
        {aboutData.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="about-meta">
          {aboutData.meta.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;