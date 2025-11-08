'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About/Contact', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Saved theme:', savedTheme, 'System prefers dark:', systemPrefersDark); // Debug log
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
    
    console.log('Initial HTML classes:', document.documentElement.className); // Debug log
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    console.log('Toggling theme to:', newDarkMode ? 'dark' : 'light'); // Debug log
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    
    console.log('HTML classes:', document.documentElement.className); // Debug log
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <button 
            onClick={() => scrollToSection('home')}
            className="logo-button"
          >
            AS
          </button>
        </div>
        <ul className="nav-menu">
          {navItems.map(({ href, label, id }) => (
            <li key={id}>
              <button 
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <div className="theme-slider-container">
              <input
                type="checkbox"
                id="theme-slider"
                className="theme-slider"
                checked={isDarkMode}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <label htmlFor="theme-slider" className="theme-slider-label">
                <span className="theme-slider-button"></span>
              </label>
            </div>
          </li>
        </ul>
        <button className="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}