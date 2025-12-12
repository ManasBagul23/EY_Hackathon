// src/components/ReportSection.jsx
import React from 'react';
import { FiDownload, FiSave } from 'react-icons/fi';
import { FaFilePdf, FaFileExcel } from 'react-icons/fa';

const ReportSection = () => {
  return (
    <div className="card">
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Final Innovation Report</h2>
          <p style={styles.subtitle}>Comprehensive analysis of Metformin repurposing opportunities</p>
        </div>
        <div style={styles.tags}>
          <span style={styles.tagReady}>Ready</span>
          <span style={styles.tagPotential}>High Potential</span>
        </div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.mainContent}>
          <div style={styles.summary}>
            <h3 style={styles.summaryTitle}>Executive Summary</h3>
            <div style={styles.summaryText}>
              <p>
                Analysis indicates significant repurposing potential for <strong>Metformin</strong> in oncology applications, 
                particularly for breast and prostate cancers.
              </p>
              <p>
                Patent landscape analysis shows limited protection beyond diabetes indications, creating opportunities 
                for new intellectual property filings.
              </p>
              <p>
                <strong>Recommendation:</strong> Proceed with preclinical studies for combination therapy with 
                existing oncology drugs.
              </p>
            </div>
            
            <div style={styles.findings}>
              <h4 style={styles.findingsTitle}>Key Findings</h4>
              <ul style={styles.findingsList}>
                <li style={styles.findingItem}>47% reduction in tumor growth observed in preclinical models</li>
                <li style={styles.findingItem}>3 patent families expiring in 2025-2027 create freedom-to-operate</li>
                <li style={styles.findingItem}>Strong safety profile with 60+ years of clinical use</li>
                <li style={styles.findingItem}>Potential for orphan drug designation in rare cancer subtypes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={styles.sidebar}>
          <div style={styles.confidenceCard}>
            <h3 style={styles.confidenceTitle}>Confidence Score</h3>
            <div style={styles.confidenceCircle}>
              <div style={styles.confidenceValue}>
                <div style={styles.confidencePercentage}>87%</div>
                <div style={styles.confidenceLabel}>High Confidence</div>
              </div>
            </div>
            <p style={styles.confidenceDescription}>
              Based on data quality, clinical evidence strength, and market readiness.
            </p>
          </div>
          
          <div style={styles.exportCard}>
            <h3 style={styles.exportTitle}>Export Options</h3>
            <div style={styles.exportOptions}>
              <button style={styles.exportButton}>
                <div style={styles.exportButtonContent}>
                  <FaFilePdf style={styles.exportIcon} />
                  <div style={styles.exportInfo}>
                    <p style={styles.exportName}>Download PDF Report</p>
                    <p style={styles.exportDescription}>Full formatted report</p>
                  </div>
                </div>
                <FiDownload style={styles.exportDownloadIcon} />
              </button>
              
              <button style={styles.exportButton}>
                <div style={styles.exportButtonContent}>
                  <FaFileExcel style={styles.exportIcon} />
                  <div style={styles.exportInfo}>
                    <p style={styles.exportName}>Download Excel Data</p>
                    <p style={styles.exportDescription}>All raw data tables</p>
                  </div>
                </div>
                <FiDownload style={styles.exportDownloadIcon} />
              </button>
              
              <button style={styles.exportButton}>
                <div style={styles.exportButtonContent}>
                  <FiSave style={styles.exportIcon} />
                  <div style={styles.exportInfo}>
                    <p style={styles.exportName}>Save to Archive</p>
                    <p style={styles.exportDescription}>Store in project history</p>
                  </div>
                </div>
                <FiDownload style={styles.exportDownloadIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#6b7280',
  },
  tags: {
    display: 'flex',
    gap: '8px',
  },
  tagReady: {
    padding: '4px 12px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  tagPotential: {
    padding: '4px 12px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '30px',
  },
  mainContent: {
    flex: 1,
  },
  summary: {
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    padding: '20px',
  },
  summaryTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '15px',
  },
  summaryText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: '#4b5563',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  findings: {
    paddingTop: '20px',
    borderTop: '1px solid #e5e7eb',
  },
  findingsTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px',
  },
  findingsList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  findingItem: {
    paddingLeft: '20px',
    position: 'relative',
    color: '#4b5563',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  confidenceCard: {
    backgroundColor: '#eff6ff',
    border: '1px solid #dbeafe',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
  confidenceTitle: {
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: '15px',
  },
  confidenceCircle: {
    width: '100px',
    height: '100px',
    border: '5px solid #dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px',
  },
  confidenceValue: {
    textAlign: 'center',
  },
  confidencePercentage: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e40af',
  },
  confidenceLabel: {
    fontSize: '0.875rem',
    color: '#3b82f6',
    marginTop: '4px',
  },
  confidenceDescription: {
    fontSize: '0.875rem',
    color: '#3b82f6',
  },
  exportCard: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  },
  exportTitle: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '15px',
  },
  exportOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  exportButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    background: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  exportButtonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  exportIcon: {
    width: '20px',
    height: '20px',
    color: '#2563eb',
  },
  exportInfo: {
    flex: 1,
  },
  exportName: {
    fontWeight: '500',
    color: '#1f2937',
  },
  exportDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  exportDownloadIcon: {
    width: '18px',
    height: '18px',
    color: '#9ca3af',
  },
};

export default ReportSection;