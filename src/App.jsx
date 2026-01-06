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
        <p className="subtitle">CS Grad Student · Systems & Backend Developer Enthusiast</p>
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
          I am a software engineer with a strong foundation in computer science and a dedication to building resilient, 
          high-performance systems. I hold a Master’s degree in Computer Science from Stony Brook University and a 
          Bachelor’s degree from BITS Pilani, Hyderabad Campus.
          My technical expertise lies in backend engineering and distributed systems, with a specific focus on consensus 
          protocols, fault tolerance, and kernel-level programming. From architecting scalable microservices at Nykaa and 
          Licious to engineering distributed banking systems with Paxos and PBFT, I enjoy tackling complex infrastructure 
          challenges. I am constantly exploring new technologies to create elegant, efficient, and scalable software solutions.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">Distributed Banking System with Paxos</h3>
            <a href="https://github.com/anandu-0116/2PC-Paxos-Banking-Application" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            A sharded banking infrastructure utilizing Multi-Paxos for stable-leader consensus and Two-Phase Commit (2PC) 
            to ensure atomicity across concurrent cross-shard transactions.
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
            <h3 className="project-title">Byzantine Fault Tolerant Banking System</h3>
            <a href="https://github.com/anandu-0116/PBFT-Banking-Application" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            A 7-node replicated banking application implementing the Linear PBFT consensus protocol to guarantee system 
            safety, liveness, and resilience against Byzantine faults.
          </p>
        </div>
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">Safex</h3>
            <a href="https://github.com/anandu-0116/safex-lsm" className="github-link" target="_blank" rel="noreferrer"> GitHub
            </a>
          </div>
          <p>
            A custom Linux Security Module (LSM) built from scratch to enforce read access control policies using kernel 
            hooks and deferred workqueues.
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
              Engineered the decoupling of the Catalog Feed from a legacy monolith into a standalone Microservice, 
              reducing data synchronization latency by <strong>90%</strong> (8 hours to 45 mins) and ensuring real-time product availability.
            </li>
            <li>
              Developed the backend infrastructure for the <strong>Virtual Try-On (VTO)</strong> feature using Python (Flask) by 
              integrating Modiface AR APIs, enhancing user engagement and interaction capabilities.
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
              Spearheaded the decomposition of a monolithic architecture by extracting the Order Management module into 
              an isolated <strong>Spring Boot</strong> microservice, improving fault tolerance and maintainability.
            </li>
            <li>
              Refactored legacy API pathways into optimized service-oriented architectures, reducing redundant calls and
              enhancing system scalability.
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