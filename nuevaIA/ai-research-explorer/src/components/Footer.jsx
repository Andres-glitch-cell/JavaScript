import React from 'react';
import GithubIcon from '../assets/github.svg?react';
import TwitterIcon from '../assets/twitter.svg?react';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-aos="fade-up">
    <div className="grid">
      <div>
        <h4>About</h4>
        <p>AI Research Explorer showcases the latest papers, models, and curated collections.</p>
      </div>
      <nav aria-label="Quick Links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div>
        <h4>Social</h4>
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon width={28} height={28} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon width={28} height={28} />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2026 AI Research Explorer</p>
      <small>Crafted with React and Vite</small>
    </div>
  </footer>
);

export default Footer;