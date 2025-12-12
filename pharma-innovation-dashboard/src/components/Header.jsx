// src/components/Header.jsx
import React from 'react';
import { FiBell, FiHelpCircle, FiMenu } from 'react-icons/fi';

const Header = ({ activeTab, onTabChange, onToggleSidebar }) => {
  const tabs = ['Dashboard', 'Molecule Search', 'Reports', 'Data Sources', 'Agents', 'Settings'];

  return (
    <header className="header">
      <div style={styles.headerContainer}>
        <div style={styles.headerLeft}>
          <button 
            onClick={onToggleSidebar}
            style={styles.menuButton}
          >
            <FiMenu style={styles.menuIcon} />
          </button>
          
          <div style={styles.logoContainer}>
            <div style={styles.logo}>P</div>
            <h1 style={styles.logoText}>Pharma Innovation AI</h1>
          </div>
          
          <nav style={styles.headerNav}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                style={{
                  ...styles.navTab,
                  ...(activeTab === tab ? styles.navTabActive : {})
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        <div style={styles.headerRight}>
          <button style={styles.iconButton}>
            <FiBell style={styles.headerIcon} />
          </button>
          
          <button style={styles.iconButton}>
            <FiHelpCircle style={styles.headerIcon} />
          </button>
          
          <div style={styles.userProfile}>
            <div style={styles.userInfo}>
              <p style={styles.userName}>Dr. Manas Bagul</p>
              <p style={styles.userRole}>Lead Researcher</p>
            </div>
            <div style={styles.userAvatar}>
              <div style={styles.avatarPlaceholder}>SC</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  menuButton: {
    padding: '8px',
    borderRadius: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  menuIcon: {
    width: '20px',
    height: '20px',
    color: '#6b7280',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '30px',
    height: '30px',
    backgroundColor: '#2563eb',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1f2937',
  },
  headerNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginLeft: '20px',
  },
  navTab: {
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
  },
  navTabActive: {
    backgroundColor: '#eff6ff',
    color: '#2563eb',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconButton: {
    padding: '8px',
    borderRadius: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  headerIcon: {
    width: '20px',
    height: '20px',
    color: '#6b7280',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingLeft: '15px',
    borderLeft: '1px solid #e5e7eb',
  },
  userInfo: {
    textAlign: 'right',
  },
  userName: {
    fontWeight: '500',
    color: '#1f2937',
  },
  userRole: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  userAvatar: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: '36px',
    height: '36px',
    backgroundColor: '#dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2563eb',
    fontWeight: '500',
  },
};

export default Header;