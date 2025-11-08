import Link from 'next/link';

export const metadata = {
  title: "Projects - Ajit Sivakumar",
  description: "Explore Ajit Sivakumar's portfolio of web development projects, from e-commerce platforms to AI applications.",
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      longDescription: "This comprehensive e-commerce platform includes features like product catalog management, shopping cart functionality, secure payment processing with Stripe, user authentication, order tracking, and a complete admin dashboard for inventory management.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "A modern project management tool that enables teams to collaborate effectively with real-time updates, customizable workflows, file attachments, comment system, and detailed analytics dashboard.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with interactive maps, detailed forecasts, and location-based weather alerts.",
      longDescription: "An intuitive weather application that provides detailed forecasts, interactive weather maps, severe weather alerts, historical data analysis, and personalized weather recommendations based on user preferences.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Quantitative Trading Bot",
      description: "An algorithmic trading system that uses machine learning to analyze market patterns and execute trades.",
      longDescription: "A sophisticated trading algorithm that leverages machine learning models to analyze market data, identify trading opportunities, and execute trades with risk management protocols.",
      technologies: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API", "Flask"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "AI Chat Application",
      description: "A real-time chat application enhanced with AI features for smart responses and content moderation.",
      longDescription: "An intelligent chat platform that integrates AI for smart message suggestions, automatic content moderation, language translation, and sentiment analysis.",
      technologies: ["React", "OpenAI API", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Analytics Dashboard",
      description: "A comprehensive dashboard for tracking investment portfolios with real-time data and advanced analytics.",
      longDescription: "A financial analytics tool that provides real-time portfolio tracking, performance analysis, risk assessment, and automated reporting for investment management.",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A showcase of my work in web development, AI, and quantitative finance
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured">
                <div className="project-image">
                  <div className="project-placeholder">Project Image</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-long-description">{project.longDescription}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link">Live Demo</a>
                    <a href={project.githubUrl} className="project-link">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="other-projects">
        <div className="container">
          <h2 className="section-title">Other Projects</h2>
          <div className="projects-grid-compact">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card-compact">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links-inline">
                    <a href={project.liveUrl} className="project-link-small" title="Live Demo">🔗</a>
                    <a href={project.githubUrl} className="project-link-small" title="GitHub">📁</a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-tech-compact">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>
              I'm always excited to take on new challenges and collaborate on interesting projects.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}