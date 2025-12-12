// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import ProgressTimeline from './components/ProgressTimeline';
import AgentCard from './components/AgentCard';
import ReportSection from './components/ReportSection';
import './index.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  const agents = [
    { id: 1, name: 'Molecule Identification Agent', status: 'complete', icon: '🧬' },
    { id: 2, name: 'Unmet Needs Analyzer', status: 'running', icon: '🔍' },
    { id: 3, name: 'Clinical Trials Agent', status: 'running', icon: '🏥' },
    { id: 4, name: 'Patent Landscape Agent', status: 'pending', icon: '📄' },
    { id: 5, name: 'Market Insights Agent', status: 'pending', icon: '📊' },
    { id: 6, name: 'Web Intelligence Agent', status: 'pending', icon: '🌐' },
    { id: 7, name: 'Report Generator Agent', status: 'pending', icon: '📋' },
  ];

  return (
    <div className="app">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="main-layout">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="main-content">
          <SearchBar />
          
          <div className="card">
            <h2 className="section-title">Research Progress</h2>
            <ProgressTimeline agents={agents} />
          </div>
          
          <div className="agent-cards">
            <AgentCard 
              title="Clinical Trials Agent Output"
              status="running"
              icon="🏥"
              description="Analyzing clinical trial data for target molecule across phases I-IV"
            />
            <AgentCard 
              title="Patent Landscape Agent Output"
              status="pending"
              icon="📄"
              description="Patent filings, expirations, and freedom-to-operate analysis"
            />
            <AgentCard 
              title="Market Insights Agent Output"
              status="pending"
              icon="📊"
              description="Market size, competitors, pricing, and forecast analysis"
            />
            <AgentCard 
              title="Web Intelligence Agent Output"
              status="pending"
              icon="🌐"
              description="Latest publications, news, and social media mentions"
            />
          </div>
          
          <ReportSection />
        </main>
      </div>

      <style jsx>{`
        .agent-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        
        @media (max-width: 768px) {
          .agent-cards {
            grid-template-columns: 1fr;
          }
          
          .main-content {
            margin-left: 0;
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;