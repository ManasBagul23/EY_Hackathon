// src/components/Sidebar.jsx
import React from 'react';
import { 
  FiHome, FiSearch, FiFileText, FiDatabase, 
  FiCpu, FiSettings, FiLink 
} from 'react-icons/fi';

const Sidebar = ({ collapsed, activeTab, onTabChange }) => {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', value: 'Dashboard' },
    { icon: FiSearch, label: 'Molecule Search', value: 'Molecule Search' },
    { icon: FiFileText, label: 'Reports', value: 'Reports' },
    { icon: FiDatabase, label: 'Data Sources', value: 'Data Sources' },
    { icon: FiCpu, label: 'Agents', value: 'Agents' },
    { icon: FiSettings, label: 'Settings', value: 'Settings' },
  ];

  const dataSources = [
    { name: 'ClinicalTrials.gov', connected: true },
    { name: 'USPTO', connected: true },
    { name: 'IQVIA', connected: false },
    { name: 'PubMed', connected: true },
    { name: 'FDA Database', connected: true },
  ];

  if (collapsed) {
    return (
      <div style={styles.sidebarCollapsed}>
        <div style={styles.sidebarSection}>
          <nav style={styles.sidebarNav}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.value}
                  onClick={() => onTabChange(item.value)}
                  style={{
                    ...styles.sidebarItemCollapsed,
                    ...(activeTab === item.value ? styles.sidebarItemActive : {})
                  }}
                  title={item.label}
                >
                  <Icon style={styles.sidebarIcon} />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarSection}>
        <nav style={styles.sidebarNav}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.value}
                onClick={() => onTabChange(item.value)}
                style={{
                  ...styles.sidebarItem,
                  ...(activeTab === item.value ? styles.sidebarItemActive : {})
                }}
              >
                <Icon style={styles.sidebarIcon} />
                <span style={styles.sidebarLabel}>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div style={styles.sidebarDivider}>
        <h3 style={styles.sidebarSectionTitle}>Data Sources</h3>
      </div>
      
      <div style={styles.sidebarSection}>
        <div style={styles.dataSources}>
          {dataSources.map((source) => (
            <div key={source.name} style={styles.dataSourceItem}>
              <div style={styles.dataSourceInfo}>
                <div style={{
                  ...styles.connectionStatus,
                  backgroundColor: source.connected ? '#10b981' : '#ef4444'
                }}></div>
                <span style={styles.dataSourceName}>{source.name}</span>
              </div>
              {!source.connected && (
                <button style={styles.connectButton}>
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>
        
        <button style={styles.addDatabaseButton}>
          <FiLink style={styles.addDatabaseIcon} />
          <span>Link New Database</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    background: 'white',
    borderRight: '1px solid #e0e0e0',
    position: 'fixed',
    top: '60px',
    bottom: 0,
    overflowY: 'auto',
  },
  sidebarCollapsed: {
    width: '60px',
    background: 'white',
    borderRight: '1px solid #e0e0e0',
    position: 'fixed',
    top: '60px',
    bottom: 0,
    overflowY: 'auto',
  },
  sidebarSection: {
    padding: '20px',
  },
  sidebarNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 15px',
    borderRadius: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: '#4b5563',
  },
  sidebarItemCollapsed: {
    padding: '10px',
    borderRadius: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarItemActive: {
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontWeight: '500',
  },
  sidebarIcon: {
    width: '18px',
    height: '18px',
  },
  sidebarLabel: {
    fontSize: '0.9rem',
  },
  sidebarDivider: {
    padding: '0 20px 10px',
  },
  sidebarSectionTitle: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  dataSources: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  dataSourceItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '6px',
  },
  dataSourceInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  connectionStatus: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  dataSourceName: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
  },
  connectButton: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#2563eb',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  addDatabaseButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
  addDatabaseIcon: {
    width: '16px',
    height: '16px',
  },
};

export default Sidebar;