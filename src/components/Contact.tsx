import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm always open to discussing DevOps, SRE, Cloud Infrastructure,
        Platform Engineering and exciting opportunities.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>manoj.mlops@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <a href="tel:+919711426789">
            +91 97114 26789
          </a>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/manoj-kumar-737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>🐙 GitHub</h3>
          <a
            href="https://github.com/manojkumar737-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/manojkumar737-alt
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;