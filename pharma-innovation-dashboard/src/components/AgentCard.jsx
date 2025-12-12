// src/components/AgentCard.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiDatabase, FiEye } from 'react-icons/fi';

const AgentCard = ({ title, status, icon, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'complete': return '#10b981';
      case 'running': return '#3b82f6';
      case 'pending': return '#f59e0b';
      default: return '#9ca3af';
    }
  };

  const sampleData = [
    { id: 1, parameter: 'Trials Found', value: '142', change: '+12%' },
    { id: 2, parameter: 'Active Studies', value: '67', change: '+5%' },
    { id: 3, parameter: 'Phase III Success', value: '42%', change: '-3%' },
    { id: 4, parameter: 'Avg. Duration', value: '3.2 years', change: '-0.4' },
  ];

  return (
    <div className="card">
      <div style={styles.header}>
        <div style={styles.titleSection}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>{icon}</span>
          </div>
          <div>
            <h3 style={styles.title}>{title}</h3>
            <div style={styles.status}>
              <div style={{
                ...styles.statusDot,
                backgroundColor: getStatusColor()
              }}></div>
              <span style={styles.statusText}>{status}</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={styles.expandButton}
        >
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      
      <p style={styles.description}>{description}</p>
      
      {isExpanded && (
        <div style={styles.content}>
          <div style={styles.insightsSection}>
            <h4 style={styles.insightsTitle}>Key Insights</h4>
            <div style={styles.insightsGrid}>
              {sampleData.map((item) => (
                <div key={item.id} style={styles.insightItem}>
                  <div style={styles.insightHeader}>
                    <span style={styles.insightParameter}>{item.parameter}</span>
                    <span style={{
                      ...styles.insightChange,
                      backgroundColor: item.change.startsWith('+') ? '#d1fae5' : '#fee2e2',
                      color: item.change.startsWith('+') ? '#065f46' : '#991b1b'
                    }}>
                      {item.change}
                    </span>
                  </div>
                  <p style={styles.insightValue}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div style={styles.actions}>
            <button style={styles.actionButton}>
              <FiDatabase />
              <span>View Raw Data</span>
            </button>
            
            <button style={styles.actionButton}>
              <FiEye />
              <span>View Details</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '1.5rem',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '4px',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  statusText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textTransform: 'capitalize',
  },
  expandButton: {
    padding: '5px',
    borderRadius: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
  },
  description: {
    color: '#6b7280',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  content: {
    marginTop: '15px',
  },
  insightsSection: {
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  },
  insightsTitle: {
    fontWeight: '500',
    color: '#374151',
    marginBottom: '12px',
  },
  insightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  insightItem: {
    padding: '12px',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
  },
  insightHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  insightParameter: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  insightChange: {
    fontSize: '0.75rem',
    fontWeight: '500',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  insightValue: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#2563eb',
    fontWeight: '500',
    fontSize: '0.875rem',
  },
};

export default AgentCard;