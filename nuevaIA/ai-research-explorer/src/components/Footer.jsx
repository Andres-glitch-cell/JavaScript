import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-aos="fade-up">
    <div className="footer-social">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GithubIcon width={28} height={28} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <TwitterIcon width={28} height={28} />
      </a>
    </div>
    <p>&copy; 2026 AI Research Explorer</p>
  </footer>
);

export default Footer;