'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('--:--:--');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const nycTime = now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setCurrentTime(nycTime);
      } catch (error) {
        // Fallback if timezone support isn't available
        const now = new Date();
        const utcTime = now.getUTCHours() - 5; // NYC is UTC-5 (or UTC-4 during DST)
        const hours = ((utcTime + 24) % 24).toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        setCurrentTime(`${hours}:${minutes}:${seconds}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <button 
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle dark mode"
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="x-icon">
          <div className="x-line1"></div>
          <div className="x-line2"></div>
        </div>
      </button>
      
      <div className="container">
      <header className="header">
        <h1 className="name">Ajit Sivakumar</h1>
        <p className="title">New York, NY — {currentTime} UTC-5</p>
        
        <div className="description">
          <p>
            A mathematics and computer science student with a focus on applied mathematics 
            and machine learning. Currently studying at New York University.
          </p>

          <p className="fencer-info">
            I'm also an NCAA Fencer. 
            <a href="https://gonyuathletics.com/sports/mens-fencing/roster/ajit-sivakumar/15761" target="_blank" rel="noopener noreferrer" className="nyu-logo-link">
              <img src="/NYU_Monogram_1C_Violet.png" alt="NYU Athletics" className="nyu-logo" />
            </a>
          </p>
        </div>
      </header>

      <section className="section">
        <h2>Experience</h2>
        
        <div className="experience-item">
          <div className="date">Sep 2025 - Present</div>
          <div className="role">
            <h3>Software Engineer Intern</h3>
            <p className="company">Superfocus.ai</p>
            <p className="description">
              Developing conversational memory for embedded LLMs.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="date">June - August 2025</div>
          <div className="role">
            <h3>Research Intern</h3>
            <p className="company">Rebellion Research</p>
            <p className="description">
              Built a python-based machine learning pipeline using XGBoost and SHAP to analyze factor importance in ETFs.
            </p>
          </div>
        </div>

      </section>

      <section className="section">
        <h2>Education</h2>
        
        <a href="https://cims.nyu.edu/" target="_blank" rel="noopener noreferrer">
          <img 
            src={isDarkMode ? "/courant_short_white.png" : "/courant_short_black.png"} 
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
              </ul>
              <h4>Upcoming Courses</h4>
              <ul>
                <li>Parallel Computing</li>
                <li>Object Oriented Programming</li>
                <li>Mathematical Statistics</li>
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
              <li>TypeScript/JavaScript</li>
              <li>C++</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Frameworks & Tools</h4>
            <ul>
              <li>React & Next.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>LaTeX</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Mathematics</h4>
            <ul>
              <li>Quantitative Analysis</li>
              <li>Machine Learning</li>
              <li>Statistical Modeling</li>
              <li>Algorithmic Trading</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        
        <div className="project-item">
          <h3>NYU Trading Platform</h3>
          <p className="project-tech">Python, React, Node.js, MongoDB</p>
          <p className="project-description">
            Comprehensive trading platform with real-time data visualization, 
            portfolio management, and algorithmic trading capabilities.
          </p>
        </div>
        
        <div className="project-item">
          <h3>SAIL - Financial Document Analyzer</h3>
          <p className="project-tech">Next.js, TypeScript, Flask</p>
          <p className="project-description">
            Educational platform designed to enhance collaborative learning 
            through interactive features and progress tracking.
          </p>
        </div>
        
        <div className="project-item">
          <h3>Movement Classification System</h3>
          <p className="project-tech">Python</p>
          <p className="project-description">
            Real-time movement analysis system using computer vision and 
            machine learning for athletic performance evaluation.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        
        <div className="contact-info">
          <p>
            You can reach me on <code>ajit[dot]sivakumar[at]gmail[dot]com</code>, or connect 
            with me on <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Additional Links</h2>
        
        <ul className="links-list">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer">github</a></li>
        </ul>
      </section>
    </div>
    </>
  );
}
