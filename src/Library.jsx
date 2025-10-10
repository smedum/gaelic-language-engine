import React from 'react';
import './Library.css';

function Library() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', padding: '4rem 2rem'}}>
        <h1 style={{color: 'var(--brand-ink)', fontSize: '2.5rem', marginBottom: '1rem'}}>
          Leabharlann Fuaim Ghàidhlig
        </h1>
        <p style={{color: 'var(--text-2)', fontSize: '1.2rem', marginBottom: '2rem'}}>
          Scottish Gaelic Audio Library
        </p>
        <div style={{background: 'var(--surface-0)', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)'}}>
          <h2 style={{color: 'var(--brand-emerald)'}}>Conversion in Progress</h2>
          <p>Your amazing Gaelic audio library is being converted to React.</p>
          <p>Full functionality coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default Library;
