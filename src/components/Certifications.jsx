import React from "react";

function Certifications({ certifications, achievements, education }) {
  return (
    <section className="section reveal" id="certifications">
      <div className="section-heading">
        <span>Growth &amp; Learning</span>
        <h3>Certifications, Awards &amp; Education</h3>
      </div>

      <div className="cert-layout">
        <div className="glass-card cert-card">
          <div className="card-title">
            <span className="title-chip">🏆</span>
            <h4>Certifications &amp; Training</h4>
          </div>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="glass-card cert-card">
          <div className="card-title">
            <span className="title-chip">⭐</span>
            <h4>Achievements</h4>
          </div>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="education-block">
            <div className="card-title">
              <span className="title-chip">🎓</span>
              <h4>Education</h4>
            </div>
            <ul>
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;