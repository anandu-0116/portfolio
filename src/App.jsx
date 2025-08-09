import React from "react";
import "./App.css";
import { Mail, Github, Linkedin } from "lucide-react";

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <section className="hero">
        <h2 className="wave">Hello! 👋</h2>
        <h1 className="intro">
          I’m <span className="highlight">Anandu</span>
        </h1>
        <p className="subtitle">CS Grad Student · Systems & DevOps Enthusiast</p>
        <div className="social-icons">
          <a href="mailto:ananduap19122001@gmail.com"><Mail /></a>
          <a href="https://github.com/anandu-0116" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com/in/anandapadmanabhan-santhosh" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I’m currently pursuing my Master’s in Computer Science at Stony Brook University. I’m passionate about
          backend, systems, and DevOps, and I’ve built scalable services at Nykaa and Licious. I’m currently working on
          a Linux Security Module called <strong>Safex</strong>.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">Safex</h3>
            <a href="https://github.com/anandu-0116/safex-lsm" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            Custom Linux Security Module enforcing file access policies using VFS hooks. Implemented kernel hooks and
            tested across user-space programs.
          </p>
        </div>
        {/*<div className="project">
          <div className="project-header">
            <h3 className="project-title">DevOps Portfolio Site</h3>
            <a href="https://github.com/anandu-0116/portfolio" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            CI/CD pipeline based personal portfolio hosted on AWS with auto-deployment and monitoring setup.
          </p>
        </div>*/}
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">BTRFS</h3>
            <a href="https://github.com/anandu-0116/BTRFS" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            This is a courselet developed as part of CSE 590 - Storage Systems course which simulates different btrfs features like compression, deduplication, snapshots, CoW and RAID.
          </p>
        </div>
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">GestureBoard</h3>
            <a href="https://github.com/anandu-0116/gesture-based-whiteboard-app" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            Whiteboard app that uses webcam-based hand gestures for drawing, cursor movement, and erasing. Gesture control was implemented using MediaPipe landmarks.
          </p>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        
        <div className="project">
          <div className="experience-header">
            <div className="role-location">
              <span className="role">Software Development Engineer</span>
              <span className="location">Bangalore</span>
            </div>
            <div className="company-info">
              <span className="company">Nykaa</span>
              <span className="duration">Jul 2023 – Aug 2024</span>
            </div>
          </div>
          <ul className="experience-list">
            <li>
              Improved the catalog feed microservice using Java & Spring by removing dependencies on legacy monoliths, reducing go-live time by <strong>90%</strong> (8 hrs → 45 min).
            </li>
            <li>
              Spearheaded the integration of a <strong>Virtual Try-On (VTO)</strong> feature by connecting frontend systems with Modiface’s 3rd-party APIs via a custom Python (Flask) backend service.
            </li>
          </ul>
        </div>

        <div className="project">
          <div className="experience-header">
            <div className="role-location">
              <span className="role">Software Engineer Intern</span>
              <span className="location">Bangalore</span>
            </div>
            <div className="company-info">
              <span className="company">Licious</span>
              <span className="duration">Jan 2023 – June 2023</span>
            </div>
          </div>
          <ul className="experience-list">
            <li>
              Refactored legacy code to build a dedicated order microservice using Java & Spring, improving modularity and maintainability.
            </li>
            <li>
              Migrated redundant monolith API calls to service-based implementations, boosting reliability and scalability.
            </li>
          </ul>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <a 
        href={`${import.meta.env.BASE_URL}resume.pdf`} 
        className="resume-button" 
        target="_blank" 
        rel="noreferrer"
        >
          Download Resume
        </a>
      </section>

      <footer className="footer">Made with ❤️ by Anandu</footer>
    </div>
  );
}

export default App;