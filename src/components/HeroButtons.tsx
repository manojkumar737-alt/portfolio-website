import resume from "../assets/resume.pdf";

function HeroButtons() {
  return (
    <div className="hero-buttons">

      <a
        href={resume}
        download
        className="resume-btn"
      >
        📄 Download Resume
      </a>

      <a
        href="#projects"
        className="project-btn"
      >
        🚀 View Projects
      </a>

    </div>
  );
}

export default HeroButtons;