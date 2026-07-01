import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Featured Azure & DevOps Projects</h2>

      <p className="projects-subtitle">
        Real-world Azure, Kubernetes and DevOps projects built through hands-on practice.
      </p>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card featured">

          <h3>🚀 Azure Application Gateway with Custom Domain</h3>

          <p>
            Designed and deployed an enterprise-style Azure Application
            Gateway using Azure Bastion, two private Ubuntu virtual
            machines, Nginx, Host-Based Routing and Hostinger DNS.
          </p>

          <div className="tech-stack">

            <span>Azure</span>
            <span>Application Gateway</span>
            <span>Nginx</span>
            <span>Azure Bastion</span>
            <span>DNS</span>
            <span>Ubuntu</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/manojkumar737-alt/azure-application-gateway-custom-domain-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>

            <a
              href="http://netflix.manojdevops.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Live Demo
            </a>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <h3>Azure Load Balancer using Terraform</h3>

          <p>
            Provisioned Azure Load Balancer with two Linux Virtual
            Machines, Backend Pool, Health Probe and Load Balancing
            Rules using Terraform.
          </p>

          <div className="tech-stack">

            <span>Azure</span>
            <span>Terraform</span>
            <span>Load Balancer</span>
            <span>Linux</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/manojkumar737-alt/Azure_Devops/tree/main/Azure_load_balancer"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <h3>Enterprise Kubernetes Platform</h3>

          <p>
            Built a Kubernetes platform using Rancher,
            Helm, Ingress Controller, FluxCD,
            Jenkins, Prometheus and Grafana.
          </p>

          <div className="tech-stack">

            <span>Kubernetes</span>
            <span>Helm</span>
            <span>Docker</span>
            <span>FluxCD</span>
            <span>Rancher</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/manojkumar737-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>

          </div>

        </div>

        {/* Project 4 */}

        <div className="project-card">

          <h3>Monitoring Platform</h3>

          <p>
            Enterprise monitoring solution using
            Prometheus, Grafana, Alertmanager,
            Loki and Node Exporter.
          </p>

          <div className="tech-stack">

            <span>Prometheus</span>
            <span>Grafana</span>
            <span>Loki</span>
            <span>Alertmanager</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/manojkumar737-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>

          </div>

        </div>

        {/* Project 5 */}

        <div className="project-card">

          <h3>CI/CD Pipeline using GitHub Actions</h3>

          <p>
            Automated build, security scanning,
            testing and deployment using
            GitHub Actions, Docker and Terraform.
          </p>

          <div className="tech-stack">

            <span>GitHub Actions</span>
            <span>Docker</span>
            <span>Terraform</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/manojkumar737-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;