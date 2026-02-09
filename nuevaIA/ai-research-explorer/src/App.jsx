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

        {/* Trending Topics */}
        <section className="section trending-topics" data-aos="fade-up" aria-labelledby="trending-heading">
          <h2 id="trending-heading">Trending Topics</h2>
          <ul className="chip-grid" role="list">
            <li className="chip">LLMs</li>
            <li className="chip">RAG</li>
            <li className="chip">Multimodal</li>
            <li className="chip">Diffusion</li>
            <li className="chip">Reinforcement Learning</li>
            <li className="chip">Optimization</li>
            <li className="chip">Agents</li>
            <li className="chip">Safety</li>
            <li className="chip">Evaluation</li>
          </ul>
        </section>

        {/* Featured Collections */}
        <section className="section featured" data-aos="fade-up" aria-labelledby="featured-heading">
          <h2 id="featured-heading">Featured Collections</h2>
          <div className="card-grid">
            <article className="card">
              <h3>State-of-the-art LLMs</h3>
              <p>Explore leading large language models with benchmarks and links.</p>
              <button className="btn-secondary" type="button">View</button>
            </article>
            <article className="card">
              <h3>Vision Models</h3>
              <p>Discover top-performing vision models and datasets.</p>
              <button className="btn-secondary" type="button">View</button>
            </article>
            <article className="card">
              <h3>Prompt Engineering</h3>
              <p>Curated guides and research on effective prompting strategies.</p>
              <button className="btn-secondary" type="button">View</button>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section className="section how-it-works" data-aos="fade-up" aria-labelledby="how-heading">
          <h2 id="how-heading">How It Works</h2>
          <ol className="steps">
            <li>
              <span className="step-index">1</span>
              <div>
                <h3>Search</h3>
                <p>Enter a topic, paper title, or model keyword.</p>
              </div>
            </li>
            <li>
              <span className="step-index">2</span>
              <div>
                <h3>Filter</h3>
                <p>Refine by category, date, and popularity (coming soon).</p>
              </div>
            </li>
            <li>
              <span className="step-index">3</span>
              <div>
                <h3>Explore</h3>
                <p>Open summaries, benchmarks, citations, and resources.</p>
              </div>
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;