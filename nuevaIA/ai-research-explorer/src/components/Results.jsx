import React from 'react';
import PaperIcon from '../assets/paper.svg?react';
import ModelIcon from '../assets/model.svg?react';
import './Results.css';

const Results = ({ query }) => {
  if (!query) return (
    <section className="results" data-aos="fade-up" aria-live="polite" aria-atomic="true">
      <div className="results-placeholder">
        <PaperIcon width={60} height={60} />
        <p>Start your search for the latest AI papers and models!</p>
      </div>
    </section>
  );

  // Placeholder results
  return (
    <section className="results" data-aos="fade-up" aria-live="polite" aria-atomic="true">
      <h2>Results for "<span className="highlight">{query}</span>"</h2>
      <ul id="results-list">
        <li>
          <PaperIcon width={24} height={24} />
          <span><strong>Paper:</strong> Example Paper on {query}</span>
        </li>
        <li>
          <ModelIcon width={24} height={24} />
          <span><strong>Model:</strong> Example Model for {query}</span>
        </li>
      </ul>
      <p className="demo-note">(This is a demo. Connect to a real API for live results!)</p>
    </section>
  );
};

export default Results;