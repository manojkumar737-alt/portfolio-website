import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Enterprise Kubernetes Platform</h3>

          <p>
            Complete Kubernetes platform with Ingress, Helm, Rancher,
            Jenkins, Flux CD, Prometheus and Grafana.
          </p>

          <div className="tech-stack">
            <span>Kubernetes</span>
            <span>Docker</span>
            <span>Helm</span>
            <span>Flux CD</span>
            <span>Jenkins</span>
          </div>

          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

        </div>

        <div className="project-card">

          <h3>Azure Load Balancer using Terraform</h3>

          <p>
            Provisioned Azure Load Balancer with two Linux VMs,
            backend pool, health probe and load-balancing rules
            using Terraform.
          </p>

          <div className="tech-stack">
            <span>Azure</span>
            <span>Terraform</span>
            <span>Linux</span>
          </div>

          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

        </div>

        <div className="project-card">

          <h3>CI/CD Pipeline</h3>

          <p>
            Automated build, testing and deployment using GitHub
            Actions, Jenkins and Docker.
          </p>

          <div className="tech-stack">
            <span>GitHub Actions</span>
            <span>Jenkins</span>
            <span>Docker</span>
          </div>

          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

        </div>

        <div className="project-card">

          <h3>Monitoring Platform</h3>

          <p>
            Enterprise monitoring using Prometheus, Grafana,
            Alertmanager and Node Exporter.
          </p>

          <div className="tech-stack">
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>Alertmanager</span>
          </div>

          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;