import React, { useState } from 'react';

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <nav style={{ 
      background: 'linear-gradient(to right, #15803d, #2563eb)', 
      color: 'white', 
      padding: '1rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Gaelic Nexus</h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>Community-driven Gaelic technology hub</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['home', 'community', 'about'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              style={{ 
                padding: '0.5rem 1rem', 
                borderRadius: '0.5rem', 
                background: activeTab === tab ? 'white' : 'transparent', 
                color: activeTab === tab ? '#15803d' : 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontWeight: '500',
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Your beautiful CommunityPage component here
const CommunityPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
    {/* ... your entire CommunityPage JSX ... */}
  </div>
);

// Simple Home and About pages for now
const HomePage = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Gaelic Nexus</h2>
    <p style={{ fontSize: '1.25rem', color: '#666' }}>
      The central hub for Gaelic language technology and community collaboration.
    </p>
  </div>
);

const AboutPage = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Gaelic Nexus</h2>
    <p style={{ fontSize: '1.25rem', color: '#666' }}>
      We're building tools to help preserve and teach the Gaelic language through modern technology.
    </p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'community': return <CommunityPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
