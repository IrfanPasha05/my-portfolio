import React from "react";

function Hero({ heroData, techStack }) {
  const isExternalLink = (url) =>
    typeof url === "string" &&
    (url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("mailto:"));

  return (
    <section className="hero section reveal" id="home">
      <div className="hero-left">
        <span className="eyebrow">{heroData.eyebrow}</span>

        <h2 className="hero-title">
          <span className="gradient-text">{heroData.name}</span>
          <span className="cursor">|</span>
        </h2>

        <div className="hero-roles">
          {heroData.roles?.[0] && (
            <span className="role-cyan">{heroData.roles[0]}</span>
          )}

          {heroData.roles?.[1] && (
            <>
              <span className="divider">|</span>
              <span>{heroData.roles[1]}</span>
            </>
          )}

          {heroData.roles?.[2] && (
            <>
              <span className="divider">|</span>
              <span className="role-purple">{heroData.roles[2]}</span>
            </>
          )}
        </div>

        <p className="hero-summary">{heroData.summary}</p>

        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            Explore My Work <span>→</span>
          </a>

          <a className="secondary-btn" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <span>Follow me on</span>

          <div className="social-list">
            {heroData.socialLinks.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.url}
                title={item.title}
                target={isExternalLink(item.url) ? "_blank" : undefined}
                rel={isExternalLink(item.url) ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-cloud-wrap">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>

          <div className="cloud-core">
            <div className="cloud-top cloud-top-left"></div>
            <div className="cloud-top cloud-top-right"></div>

            <div className="cloud-face">
              <div className="cloud-brand">aws</div>
            </div>
          </div>

          <div className="tech-grid-minimal">
            {techStack.map((item, index) => (
              <div className="tech-mini" key={`${item.name}-${index}`}>
                <div className="tech-mini-icon">
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback =
                          e.currentTarget.parentElement.querySelector(
                            ".tech-mini-fallback"
                          );
                        if (fallback) {
                          fallback.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}

                  <span
                    className={
                      item.icon
                        ? "tech-mini-fallback"
                        : "tech-mini-fallback tech-mini-fallback-visible"
                    }
                  >
                    {item.short}
                  </span>
                </div>

                <span className="tech-mini-label">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
