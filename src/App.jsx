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
          {['community', 'about', 'features'].map((tab) => (
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
              {tab === 'community' ? 'Home' : tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const CommunityHub = () => (
  <div style={{ padding: '2rem 0' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
      Welcome to Gaelic Nexus
    </h2>
    <p style={{ fontSize: '1.25rem', color: '#6b7280', textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
      The central hub for Gaelic language technology, learning, and community collaboration.
    </p>
    
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem',
      marginTop: '3rem'
    }}>
      {[
        { title: 'Language Learning', desc: 'Interactive Gaelic lessons and exercises', color: '#15803d' },
        { title: 'Community Forum', desc: 'Connect with Gaelic speakers worldwide', color: '#2563eb' },
        { title: 'Tech Tools', desc: 'Modern applications for language preservation', color: '#7c3aed' }
      ].map((card, index) => (
        <div key={index} style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          border: `2px solid ${card.color}20`,
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: `${card.color}15`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '1.5rem',
            color: card.color
          }}>
            {index + 1}
          </div>
          <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>{card.title}</h3>
          <p style={{ color: '#6b7280', margin: 0 }}>{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div style={{ padding: '2rem 0' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1f2937', textAlign: 'center' }}>
      About Gaelic Nexus
    </h2>
    
    <div style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Gaelic Nexus is a community-driven platform dedicated to preserving and promoting the Gaelic language 
        through modern technology. We believe in making Gaelic accessible, engaging, and relevant for future generations.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
        {['Language Preservation', 'Community Building', 'Tech Innovation', 'Education'].map((value, index) => (
          <span key={index} style={{
            background: 'linear-gradient(135deg, #15803d20, #2563eb20)',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            color: '#15803d',
            fontWeight: '500',
            border: '1px solid #15803d20'
          }}>
            {value}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const FeaturesPage = () => (
  <div style={{ padding: '2rem 0' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1f2937', textAlign: 'center' }}>
      Coming Soon
    </h2>
    <p style={{ fontSize: '1.125rem', color: '#6b7280', textAlign: 'center' }}>
      We're building exciting features for Gaelic language learning and community engagement.
    </p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('community');

  const renderContent = () => {
    switch (activeTab) {
      case 'community': return <CommunityHub />;
      case 'about': return <AboutPage />;
      case 'features': return <FeaturesPage />;
      default: return <CommunityHub />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ 
        padding: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        minHeight: 'calc(100vh - 200px)'
      }}>
        {renderContent()}
      </main>
      
      <footer style={{
        background: '#1f2937',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: 0, opacity: 0.8 }}>
            Built with ❤️ for the Gaelic community • Gaelic Nexus {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
