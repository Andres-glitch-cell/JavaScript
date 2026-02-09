import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar onSearch={setSearchQuery} />
        <Results query={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}

export default App;