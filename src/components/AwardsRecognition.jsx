import React from "react";
import kaizenAward from "../assets/certifications/kaizen-award.png";

function AwardsRecognition() {
  return (
    <section className="section reveal">
      <div className="section-heading">
        <span>Professional Recognition</span>
        <h3>Awards & Recognition</h3>
      </div>

      <div className="award-showcase">
        <img
          src={kaizenAward}
          alt="Kaizen Champion Project Completion"
        />
      </div>
    </section>
  );
}

export default AwardsRecognition;