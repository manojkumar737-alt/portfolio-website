import "./../styles/Hero.css";
import profile from "../assets/profile.jpg";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1>Manoj Kumar</h1>

        <h2>Lead Site Reliability Engineer</h2>

        <p className="experience">
          13+ Years Experience in DevOps, SRE & Cloud
        </p>

        <div className="skills">

          <span>Azure</span>

          <span>Kubernetes</span>

          <span>Terraform</span>

          <span>GitHub Actions</span>

          <span>Docker</span>

          <span>Jenkins</span>

        </div>

        <HeroButtons />

      </div>

      <div className="hero-right">

        <img src={profile} alt="Manoj Kumar" />

      </div>

    </section>
  );
}

export default Hero;