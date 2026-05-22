import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  navLinks,
  heroData,
  stats,
  techStack,
  aboutData,
  skills,
  cloudProjects,
  majorProjects,
  experience,
  certifications,
  achievements,
  education,
  contactData,
} from "./data/portfolioData";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-orb orb-three"></div>
      <div className="grid-overlay"></div>

      <Navbar navLinks={navLinks} resumePath={contactData.resumePath} />
      <Hero heroData={heroData} techStack={techStack} />
      <Stats stats={stats} />
      <About aboutData={aboutData} />
      <Skills skills={skills} />
      <Projects cloudProjects={cloudProjects} majorProjects={majorProjects} />
      <Experience experience={experience} />
      <Certifications
        certifications={certifications}
        achievements={achievements}
        education={education}
      />
      <Contact contactData={contactData} />
      <Footer />
    </div>
  );
}

export default App;