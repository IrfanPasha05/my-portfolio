import awsBadge from "../assets/certifications/aws-saa.png";
import ms900Badge from "../assets/certifications/ms900.png";
import az900Badge from "../assets/certifications/az900.png";
import sixsigma from "../assets/certifications/sixsigma.png";

function CertificationBadges() {
  return (
    <section className="section reveal">
      <div className="section-heading">
        <span>PROFESSIONAL CERTIFICATIONS</span>
        <h3>Certification Badges</h3>
      </div>

      <div className="badge-grid">

        <div className="badge-card">
          <img src={awsBadge} alt="AWS SAA" />
          <h4>AWS Solutions Architect Associate</h4>
        </div>

        <div className="badge-card">
          <img src={ms900Badge} alt="MS900" />
          <h4>Microsoft 365 Fundamentals</h4>
        </div>

        <div className="badge-card">
          <img src={az900Badge} alt="AZ900" />
          <h4>Azure Fundamentals</h4>
        </div>

        <div className="badge-card">
          <img src={sixsigma} alt="Six Sigma" />
          <h4>Six Sigma Yellow Belt</h4>
        </div>

      </div>
    </section>
  );
}

export default CertificationBadges;