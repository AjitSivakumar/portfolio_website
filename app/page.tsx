'use client';

import { useState, useEffect } from 'react';

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
      <div className="strips" aria-hidden="true" />
      <header>
        <h1>Ajit Sivakumar</h1>
        <p>
          <a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p>New York, NY: <code>{currentTime} UTC-5</code> --- San Francisco, CA: <code>{sfTime} UTC-8</code></p>

        <p>
          Hi, I&apos;m Ajit. I am a mathematics and computer science student interested in AI and learning/building cool things. I&apos;m studying at New York University within the Courant Institute.
        </p>
        <p>I will be in San Francisco this summer, reach out to connect!</p>
        <p>
          I&apos;m also an <a href="https://gonyuathletics.com/sports/mens-fencing/roster/ajit-sivakumar/15761" target="_blank" rel="noopener noreferrer">NCAA Fencer</a> and represent NYU in competitions.
        </p>
      </header>

      <section>
        <h2>Research Interests</h2>
        <ul>
          <li>Reinforcement learning</li>
          <li>Deep learning</li>
          <li>Reward modeling</li>
          <li>Mechanistic interpretability</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>

        <h3>Research Engineering Intern: d<sub>model</sub></h3>
        <p>March 2026 – Present</p>
        <p>Engineering reinforcement learning environments with a team of OpenAI, Anthropic, Deepmind, and MATS alum.</p>

        <h3>Software Engineer Intern: Superfocus.ai</h3>
        <p>September 2025 – March 2026</p>
        <p>Developed conversational memory modules with temporal decay for embedded LLMs.</p>

        <h3>Research Intern: Rebellion Research</h3>
        <p>June – September 2025</p>
        <p>Built a python-based machine learning pipeline using XGBoost and SHAP to analyze factor importance in ETFs.</p>
      </section>

      <section>
        <h2>Education</h2>
        <h3>B.A. Mathematics and Computer Science, <a href="https://cims.nyu.edu/" target="_blank" rel="noopener noreferrer">New York University</a></h3>

        <h4>Coursework</h4>
        <ul>
          <li>Data Structures</li>
          <li>Basic Algorithms</li>
          <li>Computer Systems Organization</li>
          <li>Linear Algebra</li>
          <li>Calculus III (Multivariable Calculus)</li>
          <li>Discrete Mathematics</li>
          <li>Analysis</li>
          <li>Theory of Probability</li>
          <li>Parallel Computing</li>
          <li>Object Oriented Programming</li>
          <li>Applied Internet Technology</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>

        <h4>Programming</h4>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C++/C</li>
          <li>Java</li>
          <li>SQL</li>
          <li>x86 Assembly</li>
          <li>HTML &amp; CSS</li>
        </ul>

        <h4>Machine Learning</h4>
        <ul>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>scikit-learn</li>
        </ul>

        <h4>Web &amp; Tools</h4>
        <ul>
          <li>React &amp; Next.js</li>
          <li>Node.js</li>
          <li>Flask</li>
          <li>Git</li>
          <li>LaTeX</li>
          <li>Docker</li>
        </ul>

        <h4>Mathematics</h4>
        <ul>
          <li>Probability Theory</li>
          <li>Statistical Modeling</li>
          <li>Optimization</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <h3><a href="https://github.com/ajitsivakumar/where2meet" target="_blank" rel="noopener noreferrer">Where2Meet</a></h3>
        <p>Flask, React</p>
        <p>A full-stack web application that helps users find optimal meeting locations based on their preferences and constraints.</p>

        <h3><a href="https://github.com/ajitsivakumar/sail" target="_blank" rel="noopener noreferrer">SAIL - Financial Document Analyzer</a></h3>
        <p>Flask, React, LangChain, Selenium, TensorFlow</p>
        <p>Web application that uses NLP techniques to extract and analyze key financial metrics from SEC filings and reports.</p>

        <h3><a href="https://github.com/AjitSivakumar/FencerPose" target="_blank" rel="noopener noreferrer">Movement Classification System</a></h3>
        <p>OpenCV, TensorFlow</p>
        <p>Real-time movement analysis system using computer vision and machine learning for athletic performance evaluation.</p>

        <h3><a href="https://github.com/ajitsivakumar/portfolio_website" target="_blank" rel="noopener noreferrer">Portfolio Website</a></h3>
        <p>Next.js, TypeScript, React</p>
        <p>My personal website.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          You can reach me at <code>ajit [dot] sivakumar [at] gmail [dot] com</code>, or connect with me on{' '}
          <a href="https://linkedin.com/in/ajit-sivakumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </section>

      <footer>
        <p>© 2026 Ajit Sivakumar</p>
      </footer>
    </>
  );
}
