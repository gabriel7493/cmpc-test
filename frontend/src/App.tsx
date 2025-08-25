import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <header style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>CMPC Frontend</h1>
        <nav style={{ display: 'flex', gap: 8 }}>
          <Link to="/">Home</Link>
          <a href="/api/docs" target="_blank" rel="noreferrer">API Docs</a>
        </nav>
      </header>
      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
