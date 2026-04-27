'use client';

import { useState, useEffect } from 'react';

function GitHubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState('--:--:--');
  const [sfTime, setSfTime] = useState('--:--:--');

  useEffect(() => {
    const formatTime = (date: Date, timeZone: string) =>
      date.toLocaleTimeString('en-US', { timeZone, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(formatTime(now, 'America/New_York'));
      setSfTime(formatTime(now, 'America/Los_Angeles'));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
      <header className="header">
        <div className="header-top">
          <h1 className="name">Ajit Sivakumar</h1>
          <div className="social-links">
            <a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <p className="title">New York, NY : <code className="time-mono">{currentTime} UTC-5</code></p>
        <p className="title">San Francisco, CA : <code className="time-mono">{sfTime} UTC-8</code><span className="cursor" aria-hidden="true"></span></p>
        
        <div className="description">
          <p>
            Hi, I'm Ajit. I am a mathematics and computer science student with a focus on machine learning and full-stack software development. I'm studying at New York University within the Courant Institute. I will be in San Francisco this summer, reach out to connect!
          </p>

          <p className="fencer-info">
            I'm also an NCAA Fencer 
            <a href="https://gonyuathletics.com/sports/mens-fencing/roster/ajit-sivakumar/15761" target="_blank" rel="noopener noreferrer" className="nyu-logo-link">
              <img src="/NYU_Monogram_1C_Violet.png" alt="NYU Athletics" className="nyu-logo" />
            </a>

            and represent NYU in competitions.
          </p>

          <p><strong>Currently learning:</strong> Reward Hacking</p>
        </div>
      </header>

      <section className="section">
        <h2>Experience</h2>
        
        <div className="experience-item">
          <div className="role">
            <h3>Incoming Research Engineering Intern</h3>
            <p className="company">d<sub>model</sub></p>
            <p className="description">
              Engineering reinforcment learning environments with a team of OpenAI, Anthropic, Deepmind, and MATS alum.
            </p>
          </div>
          <div className="date">March 2026 - Present</div>
        </div>

        <div className="experience-item">
          <div className="role">
            <h3>Software Engineer Intern</h3>
            <p className="company">Superfocus.ai</p>
            <p className="description">
              Developed conversational memory modules with temporal decay for embedded LLMs.
            </p>
          </div>
          <div className="date">September 2025 - March 2026</div>
        </div>

        <div className="experience-item">
          <div className="role">
            <h3>Research Intern</h3>
            <p className="company">Rebellion Research</p>
            <p className="description">
              Built a python-based machine learning pipeline using XGBoost and SHAP to analyze factor importance in ETFs.
            </p>
          </div>
          <div className="date">June - September 2025</div>
        </div>

      </section>

      <section className="section">
        <h2>Education</h2>
        <a href="https://cims.nyu.edu/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/courant_short_black.png"
            alt="Courant Institute" 
            className="courant-logo-section" 
          />
        </a>
        
        <div className="experience-item">
          <div className="role">
            <h3>B.A. Mathematics and Computer Science</h3>
            <p className="company">New York University</p>
            <p className="description">
              Expected Graduation: May 2027.
            </p>
            
            <div className="coursework">
              <h4>Coursework</h4>
              <ul>
                <li>Data Structures</li>
                <li>Basic Algorithms</li>
                <li>Computer Systems Org</li>
                <li>Linear Algebra</li>
                <li>Calculus III (Multivariable Calculus)</li>
                <li>Discrete Mathematics</li>
                <li>Analysis</li>
                <li>Theory of Probability</li>
                <li>Parallel Computing</li>
                <li>Object Oriented Programming</li>
                <li>Applied Internet Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming</h4>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML & CSS</li>
              <li>C++/C</li>
              <li>Java</li>
              <li>SQL</li>
              <li>x86 Assembly</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Frameworks & Tools</h4>
            <ul>
              <li>React & Next.js</li>
              <li>Node.js</li>
              <li>TensorFlow</li>
              <li>scikit-learn</li>
              <li>Flask</li>
              <li>Git</li>
              <li>LaTeX</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Mathematics</h4>
            <ul>
              <li>Probability Theory</li>
              <li>Statistical Modeling</li>
              <li>Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        
        <div className="project-item">
          <h3><a href="https://github.com/ajitsivakumar/where2meet" target="_blank" rel="noopener noreferrer">Where2Meet</a></h3>
          <p className="project-tech">Flask, React</p>
          <p className="project-description">
            A full-stack web application that helps users find optimal meeting 
            locations based on their preferences and constraints.
          </p>
        </div>
        
        <div className="project-item">
          <h3><a href="https://github.com/ajitsivakumar/sail" target="_blank" rel="noopener noreferrer">SAIL - Financial Document Analyzer</a></h3>
          <p className="project-tech">Flask, React, LangChain, Selenium, Tensorflow</p>
          <p className="project-description">
            Web application that utilizes NLP techniques to extract and analyze 
            key financial metrics from SEC filings and reports.
          </p>
        </div>
        
        <div className="project-item">
          <h3><a href="https://github.com/AjitSivakumar/FencerPose" target="_blank" rel="noopener noreferrer">Movement Classification System</a></h3>
          <p className="project-tech"> OpenCV, TensorFlow</p>
          <p className="project-description">
            Real-time movement analysis system using computer vision and 
            machine learning for athletic performance evaluation.
          </p>
        </div>
        
        <div className="project-item">
          <h3><a href="https://github.com/ajitsivakumar/portfolio_website" target="_blank" rel="noopener noreferrer">Portfolio Website</a></h3>
          <p className="project-tech">Next.js, TypeScript, React</p>
          <p className="project-description">
            Personal portfolio website with markdown-inspired design, dark mode support, 
            and dynamic content rendering. 
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        
        <div className="contact-info">
          <p>
            You can reach me on <code>ajit [dot] sivakumar [at] gmail [dot] com</code>, or connect 
            with me on <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </section>
    </div>

    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Ajit Sivakumar - Mostly Hardcoded</p>
        <div className="footer-social-links">
          <a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <GitHubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
