import "./../styles/Hero.css";
import profile from "../assets/profile.jpg";
import HeroButtons from "./HeroButtons";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <div className="hero-badge">
          🚀 Open for Lead SRE / DevOps Opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm
          <span>Manoj Kumar (SRE/DevOps Engineer)</span>
        </h1>

        <p className="hero-description">
          Lead SRE / DevOps Engineer with
          <strong> 13+ years of experience </strong>
          in Azure Cloud, Kubernetes, Terraform,
          Docker, GitHub Actions, Azure DevOps, Monitoring and Automation.

          Passionate about building secure,
          scalable and highly available cloud
          infrastructure.
        </p>

        {/* Statistics */}

        <div className="hero-cards">

          <div className="card experience">
            <h3>13+</h3>
            <p>Years Experience</p>
          </div>

          <div className="card projects">
            <h3>50+</h3>
            <p>Enterprise Projects</p>
          </div>

          <div className="card uptime">
            <h3>99.9%</h3>
            <p>Service Availability</p>
          </div>

        </div>

        {/* Technologies */}

        <h4 className="tech-title">
          TECHNOLOGIES
        </h4>

        <div className="skills">

          <span>Azure</span>
          <span>Kubernetes</span>
          <span>Terraform</span>
          <span>Docker</span>
          <span>GitHub Actions</span>
          <span>Azure DevOps</span>
          <span>Linux</span>
          <span>Jenkins</span>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="profile-wrapper">

          <img
            src={profile}
            alt="Manoj Kumar"
          />

        </div>

        {/* Buttons */}

        <HeroButtons />

        {/* Social */}

        <p className="connect-title">
          Connect With Me
        </p>

        <div className="social-icons">

          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manojkumar030592/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:manoj.mlops@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;