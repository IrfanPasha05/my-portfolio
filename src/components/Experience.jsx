import React from "react";

function Experience({ experience }) {
  return (
    <section className="section reveal" id="experience">
      <div className="section-heading">
        <span>Career Journey</span>
        <h3>Professional Experience</h3>
      </div>

      <div className="timeline">
        {experience.map((job, index) => (
          <div
            className="timeline-item"
            key={`${job.company}-${job.role}-${index}`}
          >
            <div className="timeline-marker">{index + 1}</div>

            <div className="glass-card timeline-card">
              <div className="timeline-head">
                <div>
                  <h4>{job.role}</h4>
                  <p>{job.company}</p>
                </div>

                <span>{job.duration}</span>
              </div>

              <ul>
                {job.points.map((point, pointIndex) => (
                  <li key={`${job.company}-${pointIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;