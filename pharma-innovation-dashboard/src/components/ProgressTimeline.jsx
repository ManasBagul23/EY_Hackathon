// src/components/ProgressTimeline.jsx
import React from 'react';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const ProgressTimeline = ({ agents }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'complete':
        return <FiCheckCircle style={styles.statusIcon} />;
      case 'running':
        return <div style={styles.statusDot} />;
      case 'pending':
        return <FiClock style={styles.statusIcon} />;
      default:
        return <FiClock style={styles.statusIcon} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete':
        return '#10b981';
      case 'running':
        return '#3b82f6';
      case 'pending':
        return '#f59e0b';
      default:
        return '#d1d5db';
    }
  };

  return (
    <div style={styles.container}>
      {agents.map((agent, index) => (
        <div key={agent.id} style={styles.agentItem}>
          <div style={styles.agentContent}>
            <div 
              style={{
                ...styles.agentIcon,
                backgroundColor: getStatusColor(agent.status)
              }}
            >
              {agent.icon}
            </div>
            <div style={styles.agentInfo}>
              <p style={styles.agentName}>{agent.name}</p>
              <div style={styles.agentStatus}>
                {getStatusIcon(agent.status)}
                <span style={{
                  ...styles.statusText,
                  color: getStatusColor(agent.status)
                }}>
                  {agent.status}
                </span>
              </div>
            </div>
          </div>
          {index < agents.length - 1 && <div style={styles.connector}></div>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  agentItem: {
    display: 'flex',
    alignItems: 'center',
  },
  agentContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flex: 1,
  },
  agentIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    color: 'white',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '4px',
  },
  agentStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusIcon: {
    width: '16px',
    height: '16px',
  },
  statusDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
  },
  statusText: {
    fontSize: '0.8rem',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  connector: {
    width: '2px',
    height: '20px',
    backgroundColor: '#e5e7eb',
    marginLeft: '20px',
  },
};

export default ProgressTimeline;