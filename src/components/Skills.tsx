import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>☁ Cloud</h3>
          <p>Azure</p>
          <p>AWS</p>
        </div>

        <div className="skill-card">
          <h3>☸ Containers</h3>
          <p>Kubernetes</p>
          <p>Docker</p>
          <p>Helm</p>
          <p>Rancher</p>
        </div>

        <div className="skill-card">
          <h3>🏗 Infrastructure as Code</h3>
          <p>Terraform</p>
          <p>Ansible</p>
        </div>

        <div className="skill-card">
          <h3>🚀 CI/CD</h3>
          <p>GitHub Actions</p>
          <p>Azure DevOps</p>
          <p>Jenkins</p>
          <p>Flux CD</p>
        </div>

        <div className="skill-card">
          <h3>📊 Monitoring</h3>
          <p>Prometheus</p>
          <p>Grafana</p>
          <p>Loki</p>
          <p>Splunk</p>
        </div>

        <div className="skill-card">
          <h3>🗄 Databases</h3>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>Redis</p>
          <p>Oracle</p>
          <p>MySQL</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;