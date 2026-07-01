import "./../styles/Navbar.css";
import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">

        <span className="logo-circle">MK</span>

        <div className="logo-text">

          <h3>Manoj Kumar</h3>

          <p>Lead Site Reliability Engineer</p>

        </div>

      </div>

      {/* Navigation */}

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#experience">Experience</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      {/* Right Side */}

      <div className="nav-right">

        <a
          href="https://github.com/manojkumar737-alt"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/manojkumar030592/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={resume}
          download
          className="resume-nav-btn"
        >
          Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;