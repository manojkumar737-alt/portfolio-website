import "../styles/Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <h2>Certifications & Achievements</h2>

      <div className="cert-grid">

        <div className="cert-card">
          <h3>☁ Microsoft Azure</h3>
          <p>Cloud Infrastructure & Azure Administration</p>
        </div>

        <div className="cert-card">
          <h3>☸ Kubernetes</h3>
          <p>Container Orchestration & Platform Engineering</p>
        </div>

        <div className="cert-card">
          <h3>🏗 Terraform</h3>
          <p>Infrastructure as Code & Automation</p>
        </div>

        <div className="cert-card">
          <h3>🚀 DevOps & CI/CD</h3>
          <p>GitHub Actions, Azure DevOps & Jenkins</p>
        </div>

        <div className="cert-card">
          <h3>📊 Monitoring</h3>
          <p>Prometheus, Grafana, Loki & Alertmanager</p>
        </div>

        <div className="cert-card">
          <h3>💼 13+ Years</h3>
          <p>Enterprise DevOps & Site Reliability Engineering</p>
        </div>

      </div>

    </section>
  );
}

export default Certifications;