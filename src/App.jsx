import React from 'react';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #15803d 0%, #065f46 100%)', color: 'white' }}>
      <header style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Gaelic Nexus - Language Library</h1>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '3rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Gaelic Language Library</h2>
          <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>Explore, learn, and preserve the Gaelic language</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', color: '#1f2937', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#15803d', fontSize: '1.5rem' }}>📚 Dictionary</h3>
            <p>Search Gaelic words and phrases</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', color: '#1f2937', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#15803d', fontSize: '1.5rem' }}>🎓 Learning Tools</h3>
            <p>Interactive exercises and lessons</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', color: '#1f2937', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#15803d', fontSize: '1.5rem' }}>📖 Resources</h3>
            <p>Grammar guides and pronunciation</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
