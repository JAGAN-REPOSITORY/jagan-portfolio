"use client";

import { FormEvent, PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
] as const;

const projects = [
  { number: "01", title: "Automated Drip Fertigation", type: "AI + IoT", text: "An intelligent agriculture system that reads live soil and environmental conditions, then automates irrigation and nutrient delivery through ESP32-controlled pumps and valves.", tags: ["ESP32", "Python", "FastAPI", "IoT"] },
  { number: "02", title: "Hand Gesture Controller", type: "Computer Vision", text: "A touch-free computer controller for cursor movement, clicking, scrolling and volume control using real-time hand tracking.", tags: ["Python", "OpenCV", "MediaPipe"], href: "https://github.com/JAGAN-REPOSITORY/Hand-Gesture-Mouse-Control" },
  { number: "03", title: "OVVIO 3D Experience", type: "Interactive Web", text: "A cinematic scroll-driven orange juice launch where an orange transforms into a product bottle through a 240-frame responsive sequence.", tags: ["Next.js", "Canvas", "Motion"] },
  { number: "04", title: "AI Code Debugger", type: "AI Full Stack", text: "A developer workspace that detects Python, Java and C++ issues, explains the cause and supplies line-level hints and practical fixes.", tags: ["AI", "Python", "JavaScript"] },
  { number: "05", title: "Virtual Try-On Commerce", type: "E-commerce", text: "A modern shopping experience that helps customers preview fashion products on a digital mannequin before purchasing online.", tags: ["React", "Node.js", "MongoDB"] },
  { number: "06", title: "Bites Restaurant", type: "Responsive Web", text: "A responsive restaurant experience with categorized menus, polished food cards, ordering actions and mobile-first navigation.", tags: ["Bootstrap", "JavaScript", "CSS"] },
];

const skills = [
  { number: "01", title: "Frontend", items: "HTML5 · CSS3 · JavaScript · React · Responsive UI" },
  { number: "02", title: "Backend", items: "Node.js · Python · FastAPI · REST APIs · MongoDB" },
  { number: "03", title: "AI & Vision", items: "OpenCV · MediaPipe · Automation · Prompt Engineering" },
  { number: "04", title: "Tools", items: "Git · GitHub · VS Code · Vercel · Antigravity" },
];

const certificates = [
  { title: "Soft Skills Level 1", issuer: "Alpha Tech Academy", date: "2023 · 36 hours", image: "/certificates/soft-skills-level-1.png" },
  { title: "Industrial Visit — AI & ML", issuer: "Nxtlogic Software Solutions", date: "March 22, 2025", image: "/certificates/industrial-visit-ai-ml.png" },
  { title: "In-Plant Training — Mobile App Development", issuer: "Shine Technologies, Salem", date: "June 10, 2025", image: "/certificates/mobile-app-development.png" },
  { title: "Career Edge — Young Professional", issuer: "TCS iON · Tata Consultancy Services", date: "September 28, 2025", image: "/certificates/tcs-young-professional.jpg" },
  { title: "Career Edge — IT Primer", issuer: "TCS iON · Tata Consultancy Services", date: "September 28, 2025", image: "/certificates/tcs-it-primer.jpg" },
  { title: "ChatGPT for Python", issuer: "Simplilearn SkillUp", date: "August 16, 2026", image: "/certificates/chatgpt-for-python.png" },
];

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
function DownloadIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" /></svg>; }
function GithubIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.88c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>; }
function LinkedinIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5V18M6.5 5.5v.01M10.5 18v-5.2c0-2.1 3.6-2.3 3.6.2v5m0-4.6c0-3.1 3.4-3.7 3.4-.4v5M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>; }
function BriefcaseIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5h6v2M4 7h16v12H4zM4 12h16M10 12v2h4v-2" /></svg>; }
function BrainIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 4.5A3 3 0 0 0 5 7a3.5 3.5 0 0 0 .5 6.96A3 3 0 0 0 10 17v-2m4-10.5A3 3 0 0 1 19 7a3.5 3.5 0 0 1-.5 6.96A3 3 0 0 1 14 17v-2M10 5v14a2 2 0 0 0 4 0V5M7 10h3m4 0h3M7 16h3m4 0h3" /></svg>; }
function PeopleIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5m0-6c3.8-.5 7 1.5 7 5" /></svg>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [status, setStatus] = useState("");
  const [birdDragging, setBirdDragging] = useState(false);
  const [birdPosition, setBirdPosition] = useState({ x: 0, y: 0, tilt: 0 });
  const birdDrag = useRef<{ pointerId: number; startX: number; startY: number; moved: boolean } | null>(null);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  function startBirdDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    birdDrag.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
    setBirdDragging(true);
  }

  function moveBird(event: ReactPointerEvent<HTMLButtonElement>) {
    const drag = birdDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const x = event.clientX - drag.startX;
    const y = event.clientY - drag.startY;
    if (Math.hypot(x, y) > 4) drag.moved = true;
    setBirdPosition({ x, y, tilt: Math.max(-16, Math.min(16, x * .035)) });
  }

  function releaseBird(event: ReactPointerEvent<HTMLButtonElement>) {
    const drag = birdDrag.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    birdDrag.current = null;
    setBirdDragging(false);
    setBirdPosition({ x: 0, y: 0, tilt: 0 });
    if (!drag.moved) document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const sections = navItems
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const subject = String(data.subject ?? "").trim();
    const message = String(data.message ?? "").trim();
    const emailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
    const emailBody = encodeURIComponent(`Hi Jagan,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

    setStatus("Your email application is opening with the message ready to send.");
    window.location.href = `mailto:jm9788916778@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    form.reset();
  }

  return <main>
    <header className="site-header glass-shell">
      <button className={`brand bird-dragger${birdDragging ? " dragging" : ""}`} type="button" aria-label="Drag the bird logo, then release it to return home" onPointerDown={startBirdDrag} onPointerMove={moveBird} onPointerUp={releaseBird} onPointerCancel={releaseBird}><img src="/bird-logo.png" alt="" draggable="false" style={{ transform: `translate3d(${birdPosition.x}px, ${birdPosition.y}px, 0) rotate(${birdPosition.tilt}deg) scale(${birdDragging ? 1.12 : 1})` }} /></button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">{navItems.map(([label, href]) => <a href={href} className={activeSection === href.slice(1) ? "active" : ""} aria-current={activeSection === href.slice(1) ? "page" : undefined} key={href}>{label}</a>)}</nav>
      <a className="glass-button compact resume-top" href="/Jagan_M_ATS_Resume.pdf" target="_blank" rel="noreferrer">Resume <span>↗</span></a>
    </header>

    <section className="hero" id="home">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="hero-glass glass-shell">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="kicker">HELLO, I&apos;M</p><h1 className="name-hover" aria-label="JAGAN M"><span className="name-letter" aria-hidden="true">J</span><span className="name-letter" aria-hidden="true">A</span><span className="name-letter" aria-hidden="true">G</span><span className="name-letter" aria-hidden="true">A</span><span className="name-letter" aria-hidden="true">N</span><span className="name-space" aria-hidden="true"> </span><span className="name-letter" aria-hidden="true">M</span></h1><p className="role">Full Stack Developer &amp; AI Engineer</p>
            <h2>Engineering Intelligence. Designing Experiences.</h2>
            <p className="hero-description">I build intelligent, interactive and practical digital experiences where AI meets modern web development.</p>
          </div>
          <div className="hero-actions"><a className="glass-button primary" href="#projects">View My Work <ArrowIcon /></a><a className="glass-button" href="/Jagan_M_ATS_Resume.pdf" download="Jagan_M_ATS_Resume.pdf">Download CV <DownloadIcon /></a><a className="glass-button ghost" href="#contact">Contact Me <MailIcon /></a></div>
          <div className="hero-stats"><div className="stat-card"><span className="stat-icon"><BriefcaseIcon /></span><span className="stat-value">05+</span><small>Projects</small></div><div className="stat-card"><span className="stat-icon"><BrainIcon /></span><span className="stat-value">AI +</span><small>Full Stack</small></div><div className="stat-card"><span className="stat-icon"><PeopleIcon /></span><span className="status-dot" /><small>Open to Opportunities</small></div></div>
        </div>
        <div className="portrait-wrap"><div className="portrait-halo" /><img src="/jagan-straight-portrait-clean.png" alt="Jagan M standing upright in a grey suit with both feet on the floor" className="hero-portrait" /></div>
        <div className="social-orbit"><a href="https://www.linkedin.com/in/jagan-m-6759222a4" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a><a href="https://github.com/JAGAN-REPOSITORY" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a></div>
        <a className="scroll-indicator" href="#about">Scroll to explore <span>↓</span></a>
      </div>
    </section>

    <section className="section about-section" id="about"><div className="section-inner about-grid"><div><p className="section-label">01 / ABOUT</p><h2 className="section-title">AI-focused developer.<br /><em>Real-world thinker.</em></h2></div><div className="about-copy"><p>I&apos;m a final-year B.E. Computer Science and Engineering student pursuing Honours in Artificial Intelligence and Machine Learning at Sengunthar Engineering College.</p><p>I combine a strong academic foundation with hands-on work across full-stack development, computer vision, IoT and interactive product experiences—turning real problems into useful digital solutions.</p><div className="metrics"><div><strong>7.84</strong><span>CGPA</span></div><div><strong>2027</strong><span>Graduating</span></div><div><strong>5+</strong><span>Projects built</span></div></div></div></div></section>

    <section className="section dark-section" id="skills"><div className="section-inner"><div className="section-heading"><div><p className="section-label">02 / CAPABILITIES</p><h2 className="section-title">A versatile stack,<br /><em>built to create.</em></h2></div><p>From liquid-glass interfaces to intelligent backend logic, I build complete experiences that are useful, responsive and ready to scale.</p></div><div className="skill-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number}</span><h3>{skill.title}</h3><p>{skill.items}</p></article>)}</div></div></section>

    <section className="section projects-section" id="projects"><div className="section-inner"><div className="section-heading"><div><p className="section-label">03 / SELECTED WORK</p><h2 className="section-title">Projects with<br /><em>purpose.</em></h2></div><p>Selected systems and digital products combining engineering, imagination and practical value.</p></div><div className="project-grid">{projects.map((project) => { const Tag = project.href ? "a" : "article"; return <Tag className="project-card" key={project.number} {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}><div className="project-top"><span>{project.number}</span><small>{project.type}</small><b>↗</b></div><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Tag>; })}</div></div></section>

    <section className="section journey-section" id="experience"><div className="section-inner"><div className="section-heading"><div><p className="section-label">04 / EXPERIENCE</p><h2 className="section-title">Learning by<br /><em>building.</em></h2></div><a className="glass-button dark-button" href="/Jagan_M_ATS_Resume.pdf" target="_blank" rel="noreferrer">View full résumé <ArrowIcon /></a></div><div className="timeline"><article><span className="timeline-year">2023 — 2027</span><div><small>EDUCATION</small><h3>B.E. Computer Science &amp; Engineering</h3><p>Honours in AI &amp; Machine Learning · Sengunthar Engineering College · CGPA 7.84</p></div></article><article><span className="timeline-year">JUL 2025</span><div><small>INTERNSHIP</small><h3>Web Development Intern</h3><p>Shine IT Security, Salem · Built practical web-development skills through an intensive internship programme.</p></div></article><article><span className="timeline-year">2026 — PRESENT</span><div><small>FOCUS</small><h3>AI-powered Full-Stack Products</h3><p>Exploring computer vision, intelligent interfaces, IoT automation and immersive product experiences.</p></div></article></div></div></section>

    <section className="section certificates-section" id="certificates"><div className="section-inner"><div className="section-heading"><div><p className="section-label">05 / CERTIFICATES</p><h2 className="section-title">Progress,<br /><em>documented.</em></h2></div><p>Training, industry exposure and professional-development milestones that strengthen my technical foundation.</p></div><div className="certificate-grid">{certificates.map((certificate) => <a className="certificate-card" href={certificate.image} target="_blank" rel="noreferrer" key={certificate.title}><div className="certificate-image"><img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" /><span>View certificate ↗</span></div><small>{certificate.date}</small><h3>{certificate.title}</h3><p>{certificate.issuer}</p></a>)}</div></div></section>

    <section className="section contact-section" id="contact"><div className="section-inner contact-grid"><div className="contact-copy"><p className="section-label">06 / CONTACT</p><h2 className="section-title">Have an idea?<br /><em>Let&apos;s build it.</em></h2><p>I&apos;m open to internships, full-time opportunities, freelance work and collaborations in AI and full-stack development.</p><div className="direct-links"><a href="mailto:jm9788916778@gmail.com">jm9788916778@gmail.com <span>↗</span></a><a href="tel:+919865198797">+91 98651 98797 <span>↗</span></a></div></div><form className="contact-form" onSubmit={submitContact}><div className="form-row"><label>Name<input name="name" required minLength={2} maxLength={80} placeholder="Your name" /></label><label>Email<input name="email" type="email" required maxLength={160} placeholder="you@example.com" /></label></div><label>Subject<input name="subject" required minLength={3} maxLength={120} placeholder="Project, role or collaboration" /></label><label>Message<textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Tell me what you would like to create..." /></label><button className="glass-button primary" type="submit">Send Message <ArrowIcon /></button><p className="form-status" aria-live="polite">{status}</p></form></div></section>

    <footer className="footer"><div className="section-inner footer-inner"><a className="brand" href="#home"><img src="/bird-logo.png" alt="" /><span>JM</span></a><p>© 2026 Jagan M. Engineering intelligence, designing experiences.</p><div className="footer-links"><a href="https://github.com/JAGAN-REPOSITORY" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/jagan-m-6759222a4" target="_blank" rel="noreferrer">LinkedIn</a><a href="#home">Back to top ↑</a></div></div></footer>
  </main>;
}
