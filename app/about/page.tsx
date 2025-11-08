import Link from 'next/link';

export const metadata = {
  title: "About - Ajit Sivakumar",
  description: "Learn more about Ajit Sivakumar - Student, Full-Stack Developer, and Competitive Fencer interested in Quantitative Finance and AI.",
};

export default function About() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Student, Developer, and Lifelong Learner
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-detailed">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-section">
              <div className="about-image-placeholder">
                <span>Your Photo Here</span>
              </div>
            </div>
            
            <div className="about-content-section">
              <h2>Hello, I'm Ajit</h2>
              <p>
                I'm a passionate student and full-stack developer with a keen interest in 
                quantitative finance and artificial intelligence. My journey in technology 
                started with curiosity and has evolved into a deep commitment to creating 
                innovative solutions that make a real impact.
              </p>
              <p>
                Beyond coding, I'm a competitive fencer, which has taught me discipline, 
                strategic thinking, and the importance of precision - qualities that I bring 
                to every project I work on.
              </p>
              
              <h3>My Interests</h3>
              <ul className="interests-list">
                <li>🚀 Full-Stack Web Development</li>
                <li>📈 Quantitative Finance & Trading Algorithms</li>
                <li>🤖 Artificial Intelligence & Machine Learning</li>
                <li>⚔️ Competitive Fencing</li>
                <li>📚 Continuous Learning & Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-detailed">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-grid">
                <span className="skill">React</span>
                <span className="skill">Next.js</span>
                <span className="skill">TypeScript</span>
                <span className="skill">JavaScript</span>
                <span className="skill">HTML5</span>
                <span className="skill">CSS3</span>
                <span className="skill">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-grid">
                <span className="skill">Node.js</span>
                <span className="skill">Python</span>
                <span className="skill">Express.js</span>
                <span className="skill">PostgreSQL</span>
                <span className="skill">MongoDB</span>
                <span className="skill">Redis</span>
                <span className="skill">REST APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-grid">
                <span className="skill">Git</span>
                <span className="skill">Docker</span>
                <span className="skill">AWS</span>
                <span className="skill">Vercel</span>
                <span className="skill">Linux</span>
                <span className="skill">VS Code</span>
                <span className="skill">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
            <div className="cta-buttons">
              <Link href="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}