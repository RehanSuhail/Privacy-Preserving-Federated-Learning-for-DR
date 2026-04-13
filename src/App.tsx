/**
 * Main App Component
 * Entry point for the Privacy-Preserving Federated Learning DR Application
 */

import React from 'react';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🏥 Privacy-Preserving Federated Learning for DR Diagnosis</h1>
          <nav className="header-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#docs" className="nav-link">Documentation</a>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Home />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About This Project</h4>
            <p>
              A privacy-preserving federated learning system for diabetic retinopathy diagnosis 
              that enables collaborative model training across healthcare institutions.
            </p>
          </div>

          <div className="footer-section">
            <h4>Technology Stack</h4>
            <ul>
              <li>React 18.2 & TypeScript</li>
              <li>Jupyter Notebooks</li>
              <li>Federated Learning</li>
              <li>Differential Privacy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://arxiv.org" target="_blank" rel="noopener noreferrer">Research Paper</a></li>
              <li><a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>License</h4>
            <p>MIT License - © 2026 Privacy-Preserving Federated Learning</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            ⚠️ <strong>Disclaimer:</strong> This system is for educational and research purposes only. 
            Not intended for clinical use without proper validation and approval.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
