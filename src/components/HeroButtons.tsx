import resume from "../assets/resume.pdf";

function HeroButtons() {
  return (
    <div style={{ marginTop: "20px" }}>
      <a href={resume} download>
        <button
          style={{
            padding: "14px 28px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            marginRight: "15px",
            fontSize: "16px",
          }}
        >
          📄 Download Resume
        </button>
      </a>

      <button
        style={{
          padding: "14px 28px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        🚀 View Projects
      </button>
    </div>
  );
}

export default HeroButtons;