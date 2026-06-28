import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <h2>Professional Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Lead Devops / SRE Consultant</h3>
            <h4>Accenture India</h4>
            <span>Sep 2025 - Present</span>
            <p>
              Azure | AKS | Terraform | GitHub Actions | Kubernetes |
              Platform Engineering
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Lead DevOps / SRE Consultant</h3>
            <h4>Morgan Stanley (via Genpact)</h4>
            <span>Feb 2022 - Sep 2025</span>
            <p>
              Azure | Terraform | GitHub Actions | AKS |
              CI/CD | Monitoring
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior DevOps Engineer</h3>
            <h4>Wipro Technologies</h4>
            <span>Aug 2021 - Feb 2022</span>
            <p>
              Azure | Terraform | Kubernetes |
              Docker | GitHub Actions
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior Software Engineer</h3>
            <h4>Amdocs India</h4>
            <span>Jul 2017 - Aug 2021</span>
            <p>
              Terraform | Jenkins | Azure |
              Monitoring | PCI-DSS Platform
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Software Engineer</h3>
            <h4>IBM (via Netconnect)</h4>
            <span>Jan 2016 - Jul 2017</span>
            <p>
              Terraform | Jenkins | Azure |
              Monitoring | PCI-DSS Platform
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior Associate</h3>
            <h4>Fiserv India Pvt Ltd</h4>
            <span>May 2013 - Jan 2016</span>
            <p>
              Unix | Oracle | Monitoring |
              Automation | Production Support
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;