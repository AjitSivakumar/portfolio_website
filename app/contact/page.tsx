'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's discuss your next project or just say hello
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Let's Work Together</h2>
              <p>
                I'm always interested in new opportunities, exciting projects, and meaningful collaborations. 
                Whether you have a project in mind, need technical consultation, or just want to connect, 
                I'd love to hear from you.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <strong>Email</strong>
                    <a href="mailto:ajit@example.com">ajit@example.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <strong>LinkedIn</strong>
                    <a href="https://linkedin.com/in/ajitsivakumar" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/ajitsivakumar
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🐙</div>
                  <div className="contact-details">
                    <strong>GitHub</strong>
                    <a href="https://github.com/ajitsivakumar" target="_blank" rel="noopener noreferrer">
                      github.com/ajitsivakumar
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <strong>Location</strong>
                    <span>Available for remote work worldwide</span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <h3>Availability</h3>
                <p>
                  Currently open to freelance projects, full-time opportunities, 
                  and collaborative ventures. Response time is typically within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form-detailed">
                <h3>Send Me a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="form-success">
                    <p>✅ Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  <small className="char-count">
                    {formData.message.length}/1000 characters
                  </small>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="form-note">
                  * Required fields. I respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your typical response time?</h3>
              <p>I typically respond to messages within 24 hours during weekdays. For urgent matters, feel free to mention it in your message.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work on freelance projects?</h3>
              <p>Yes! I'm open to freelance projects, especially those involving modern web technologies, AI integration, or quantitative finance applications.</p>
            </div>
            <div className="faq-item">
              <h3>What's your preferred way of communication?</h3>
              <p>For initial contact, email works best. For ongoing projects, I'm flexible with Slack, Discord, or video calls as needed.</p>
            </div>
            <div className="faq-item">
              <h3>Are you available for full-time positions?</h3>
              <p>I'm always open to discussing interesting full-time opportunities, especially remote positions or those in the fintech/AI space.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}