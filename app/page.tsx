import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ajit Sivakumar</span>
            </h1>
            <p className="hero-subtitle">Full-Stack Developer</p>
            <p className="hero-description">
              I create beautiful, responsive web applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </p>
            <div className="hero-buttons">
              <Link href="/projects" className="btn btn-primary">View My Work</Link>
              <Link href="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love building applications that solve real-world problems and provide
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or enjoying a good cup of coffee while reading about
                the latest developments in web development.
              </p>
              <div className="skills">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  <span className="skill">JavaScript</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">React</span>
                  <span className="skill">Next.js</span>
                  <span className="skill">Node.js</span>
                  <span className="skill">Python</span>
                  <span className="skill">CSS/SASS</span>
                  <span className="skill">MongoDB</span>
                  <span className="skill">PostgreSQL</span>
                  <span className="skill">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project Image</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Stripe</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Socket.io</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>A responsive weather application with interactive maps, detailed forecasts, and location-based weather alerts.</p>
                <div className="project-tech">
                  <span>Vue.js</span>
                  <span>Chart.js</span>
                  <span>OpenWeather API</span>
                  <span>SCSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hello, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <strong>Email:</strong>
                  <a href="mailto:ajit@example.com">ajit@example.com</a>
                </div>
                <div className="contact-method">
                  <strong>LinkedIn:</strong>
                  <a href="https://linkedin.com/in/ajitsivakumar" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/ajitsivakumar
                  </a>
                </div>
                <div className="contact-method">
                  <strong>GitHub:</strong>
                  <a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer">
                    github.com/ajitsivakumar
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
