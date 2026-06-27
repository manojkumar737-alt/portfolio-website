import "./../styles/Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Manoj Kumar
      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Skills</a></li>

        <li><a href="#">Experience</a></li>

        <li><a href="#">Projects</a></li>

        <li><a href="#">Contact</a></li>

      </ul>

      <div className="social-icons">

        <a
          href="https://github.com/manojkumar737-alt"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;