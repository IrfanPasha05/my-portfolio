import React from "react";

function Projects({ cloudProjects, majorProjects }) {
  return (
    <section className="section reveal" id="projects">
      <div className="section-heading">
        <span>Hands-on Work</span>
        <h3>Cloud &amp; DevOps Projects</h3>
      </div>

      <div className="projects-grid">
        {cloudProjects.map((project, index) => (
          <div className="glass-card project-card" key={`${project.title}-${index}`}>
            <div className="project-top">
              <div className="project-chip">AWS</div>
              <div>
                <h4>{project.title}</h4>
                <p>{project.subtitle}</p>
              </div>
            </div>

            <ul>
              {project.points.map((point, pointIndex) => (
                <li key={`${project.title}-point-${pointIndex}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-heading section-subheading">
        <span>Enterprise Impact</span>
        <h3>Major Projects</h3>
      </div>

      <div className="major-grid">
        {majorProjects.map((project, index) => (
          <div className="glass-card major-card" key={`${project.title}-${index}`}>
            <h4>{project.title}</h4>
            <p className="major-company">{project.company}</p>

            <ul>
              {project.points.map((point, pointIndex) => (
                <li key={`${project.title}-major-point-${pointIndex}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;