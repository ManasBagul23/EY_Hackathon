// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { FiSearch, FiPlay } from 'react-icons/fi';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Starting agentic research for:', searchQuery);
    }
  };

  return (
    <div className="card">
      <h2 style={styles.searchTitle}>Search a Drug or Molecule</h2>
      <p style={styles.searchSubtitle}>Enter a molecule name to begin AI-powered research analysis</p>
      
      <div style={styles.searchContainer}>
        <div style={styles.searchInputContainer}>
          <div style={styles.searchInputWrapper}>
            <FiSearch style={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter molecule (e.g., Metformin, Loratadine, etc.)"
              style={styles.searchInput}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <p style={styles.searchDescription}>
            The Master Agent will orchestrate domain agents to fetch insights from scientific databases, 
            clinical trials, patents, and market sources.
          </p>
        </div>
        
        <button
          onClick={handleSearch}
          className="btn-primary"
          style={styles.searchButton}
        >
          <FiPlay style={styles.searchButtonIcon} />
          <span>Start Agentic Research</span>
        </button>
      </div>
      
      <div style={styles.recentSearches}>
        <h4 style={styles.recentSearchesTitle}>Recent Searches</h4>
        <div style={styles.recentSearchesList}>
          {['Metformin', 'Loratadine', 'Atorvastatin', 'Sertraline', 'Insulin Glargine'].map((drug) => (
            <button
              key={drug}
              onClick={() => setSearchQuery(drug)}
              style={styles.recentSearchItem}
            >
              {drug}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  searchTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '8px',
  },
  searchSubtitle: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '24px',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInputWrapper: {
    position: 'relative',
    marginBottom: '15px',
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    color: '#9ca3af',
  },
  searchInput: {
    width: '100%',
    padding: '12px 15px 12px 45px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '1rem',
    color: '#1f2937',
  },
  searchDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
    lineHeight: '1.5',
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
  },
  searchButtonIcon: {
    width: '18px',
    height: '18px',
  },
  recentSearches: {
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: '1px solid #e5e7eb',
  },
  recentSearchesTitle: {
    fontWeight: '500',
    color: '#374151',
    marginBottom: '12px',
  },
  recentSearchesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  recentSearchItem: {
    padding: '6px 12px',
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    border: 'none',
    borderRadius: '20px',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
};

export default SearchBar;