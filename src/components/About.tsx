import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <p className="about-text">
        I am <strong>Manoj Kumar</strong>, a Lead Site Reliability Engineer with
        <strong> 13+ years of experience</strong> in Cloud Infrastructure,
        DevOps, Site Reliability Engineering (SRE), Platform Engineering,
        Automation and Enterprise Production Support.

        <br /><br />
        I specialize in designing, automating and managing highly available,
        secure and scalable cloud platforms using <strong>Microsoft Azure,
        Kubernetes, Terraform, GitHub Actions, Azure DevOps, Docker,
        Rancher, Prometheus, Grafana and CI/CD pipelines.</strong>

        <br /><br />
        I have successfully delivered enterprise solutions across Banking,
        Financial Services and Telecom domains while improving reliability,
        monitoring, automation and deployment efficiency.
      </p>

      <div className="about-grid">

        <div className="card">
          <h3>13+</h3>
          <p>Years Experience</p>
        </div>

        <div className="card">
          <h3>100+</h3>
          <p>Production Deployments</p>
        </div>

        <div className="card">
          <h3>50+</h3>
          <p>Terraform Modules</p>
        </div>

        <div className="card">
          <h3>20+</h3>
          <p>Enterprise Applications Supported</p>
        </div>

      </div>

    </section>
  );
}

export default About;