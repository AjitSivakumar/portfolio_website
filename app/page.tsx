'use client';

import { useState } from 'react';

export default function Home() {

  const projects = [
    { title: "NYU Trading", tech: "Python, React, Node.js, MongoDB", url: "#" },
    { title: "Sail", tech: "Next.js, TypeScript", url: "#" },
    { title: "Movement Classifier", tech: "React, Node.js", url: "#" },
  ];



  return (
    <>
      <section id="home" className="floating-name-section">
        <h1 className="floating-name">Ajit Sivakumar</h1>
        <div className="floating-footer">
          <p>&copy; 2025 Ajit Sivakumar. All rights reserved.</p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="about-contact-container">
            <div className="about-contact-section">
              <h2 className="section-title">About</h2>
              
             <div className="simple-content">
                <div className="profile-header">
                  <div className="profile-image-container">
                    <img 
                      src="/RL4J1912.JPEG" 
                      alt="Ajit Sivakumar" 
                      className="profile-image"
                    />
                  </div>
                  <div className="profile-greeting">
                    <h3>Hi, I'm Ajit</h3>
                  </div>
                </div>
                
                <p>
                I'm a student at New York University studying Mathematics and Computer Science, interested in quantitative finance and machine learning.
                </p>
                <p> 
                  <a href="https://gonyuathletics.com/sports/mens-fencing/roster/ajit-sivakumar/15761" className="ncaa-link">
                    I'm an NCAA fencer.
                    <img 
                      src="/NYU_Monogram_1C_black.png" 
                      alt="NYU" 
                      className="nyu-logo nyu-logo-light"
                    />
                    <img 
                      src="/NYU_Monogram_white.png" 
                      alt="NYU" 
                      className="nyu-logo nyu-logo-dark"
                    />
                    <img 
                      src="/NYU_Monogram_1C_Violet.png" 
                      alt="NYU" 
                      className="nyu-logo nyu-logo-purple"
                    />
                  </a>
                </p>

                {/* <div className="courant-logo-container">
                  <a href="https://cims.nyu.edu/" target="_blank" rel="noopener noreferrer" className="courant-logo-link">
                    <img 
                      src="/courant_short_black.png" 
                      alt="NYU Courant Institute" 
                      className="courant-logo courant-logo-light"
                    />
                    <img 
                      src="/courant_short_white.png" 
                      alt="NYU Courant Institute" 
                      className="courant-logo courant-logo-dark"
                    />
                  </a>
                </div> */}
                
                <div className="simple-skills">
                  <span>React</span>
                  <span>Python</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>SQL</span>
                  <span>C++</span>
                  <span>Java</span>
                  <span>LaTeX</span>
                </div>
              </div>
            </div>

            <div id="contact" className="about-contact-section">
              <h2 className="section-title">Contact</h2>
              
              <div className="simple-contact">
                <p>email me: ajit.sivakumar@gmail.com</p>
                <p className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon-svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a href="https://linkedin.com/in/ajit-sivakumar">LinkedIn</a>
                </p>
                <p className="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon-svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <a href="https://github.com/ajitsivakumar">GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="simple-projects">
            {projects.map((project, index) => (
              <div key={index} className="simple-project">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
                <a href={project.url}>View →</a>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
