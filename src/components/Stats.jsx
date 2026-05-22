import React from "react";

function Stats({ stats }) {
  return (
    <section className="stats-wrapper reveal">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-badge">{stat.badge}</div>
            <div className="stat-copy">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;