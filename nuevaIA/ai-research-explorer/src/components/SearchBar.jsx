import React, { useEffect, useMemo, useRef, useState } from 'react';
// Only import the SVG here, not in App.jsx
import SearchIcon from '../assets/search.svg?react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputId = useMemo(() => 'search-input', []);
  const debounceRef = useRef(null);

  // Debounce query changes to reduce expensive updates/requests
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!query.trim()) return; // avoid empty/whitespace
    debounceRef.current = setTimeout(() => {
      onSearch(query.trim());
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [query, onSearch]);

  const handleSubmit = e => {
    e?.preventDefault?.();
    const value = query.trim();
    if (!value) return;
    setIsSubmitting(true);
    Promise.resolve(onSearch(value)).finally(() => setIsSubmitting(false));
  };

  return (
    <section className="search-section" data-aos="fade-up">
      <form className="search-bar-animated" role="search" aria-label="Site" onSubmit={handleSubmit}>
        <label htmlFor={inputId} className="visually-hidden">Search for papers or models</label>
        <input
          id={inputId}
          type="search"
          placeholder="Search for papers or models..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSubmit(e);
          }}
          autoComplete="off"
          aria-controls="results-list"
        />
        <button type="submit" aria-label="Search" disabled={isSubmitting}>
          <SearchIcon width={22} height={22} />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;