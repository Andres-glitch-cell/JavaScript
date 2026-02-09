import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header" data-aos="fade-down">
    <div className="header-content">
      <h1>
        <span role="img" aria-label="AI">🤖</span> AI Research Explorer
      </h1>
      <p>Discover the latest in AI research and models</p>
    </div>
    <div className="header-wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,53.3C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>
  </header>
);

export default Header;