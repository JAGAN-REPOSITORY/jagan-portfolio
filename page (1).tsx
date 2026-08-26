"use client";

import Link from "next/link";

const projects = [
  {
    title: "Automated Drip Fertigation System",
    text: "IoT-based irrigation and nutrient automation focused on efficient, data-informed agriculture.",
  },
  {
    title: "Hand Gesture Mouse Control",
    text: "Computer-vision interface that maps real-time hand gestures to mouse actions.",
  },
  {
    title: "AI Code Debugger",
    text: "Developer tool concept for detecting code issues and presenting understandable fixes.",
  },
  {
    title: "Virtual Try-On",
    text: "Interactive fashion experience combining computer vision with a full-stack product flow.",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link className="glass-button" href="/">← Back to portfolio</Link>
        <button className="glass-button primary" onClick={() => window.print()}>
          Download / Print CV
        </button>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">FULL STACK DEVELOPER · AI ENGINEER</p>
            <h1>JAGAN M</h1>
            <p className="resume-summary">
              Computer Science and Engineering student specialising in AI and
              Machine Learning. I build practical full-stack, computer-vision
              and IoT products with a strong focus on useful experiences.
            </p>
          </div>
          <div className="resume-contact">
            <a href="mailto:jm9788916778@gmail.com">jm9788916778@gmail.com</a>
            <a href="tel:+919865198797">+91 98651 98797</a>
            <a href="https://www.linkedin.com/in/jagan-m-6759222a4">LinkedIn</a>
            <a href="https://github.com/JAGAN-REPOSITORY">GitHub</a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>B.E. Computer Science and Engineering — Honours in AI &amp; ML</h3>
            <small>Sengunthar Engineering College · 2023–2027 · CGPA 7.84</small>
          </div>
        </section>

        <div className="resume-two-col">
          <div>
            <section className="resume-section">
              <h2>Experience</h2>
              <div className="resume-item">
                <h3>Web Development Intern</h3>
                <small>Shine IT Security, Salem · July 2025</small>
                <p>
                  Completed practical training in modern web development,
                  strengthening core implementation, communication and teamwork skills.
                </p>
              </div>
            </section>

            <section className="resume-section">
              <h2>Selected Projects</h2>
              {projects.map((project) => (
                <div className="resume-item" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="resume-section">
              <h2>Technical Skills</h2>
              <p>
                Java · Python · JavaScript · TypeScript · HTML · CSS · React ·
                Next.js · Node.js · REST APIs · SQL · Git · GitHub
              </p>
              <p>
                Machine Learning · OpenCV · Computer Vision · AI-assisted
                development · IoT prototyping · Responsive UI design
              </p>
            </section>

            <section className="resume-section">
              <h2>Certifications</h2>
              <ul>
                <li>TCS iON Career Edge — Young Professional</li>
                <li>TCS iON Career Edge — IT Primer</li>
                <li>Web Development Internship — Shine IT Security</li>
                <li>Digital Marketing — Shine Technologies</li>
                <li>Soft Skills Level 1 — Alpha Tech Academy</li>
                <li>AI &amp; ML Industrial Visit — Nxtlogic</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>Strengths</h2>
              <p>
                Problem solving · Adaptability · Fast learning · Clear
                communication · Team collaboration · Product thinking
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
