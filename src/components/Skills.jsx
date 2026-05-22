import React from "react";

function Skills({ skills }) {
  return (
    <section className="section reveal" id="skills">
      <div className="section-heading">
        <span>Technical Expertise</span>
        <h3>Skills &amp; Tools</h3>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="glass-card skill-card" key={group.title}>
            <div className="skill-chip">✦</div>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;