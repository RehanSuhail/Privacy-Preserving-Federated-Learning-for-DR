/**
 * Home Page
 * Landing page with system overview
 */

import React from 'react';
import Dashboard from '../components/Dashboard';
import { DiagnosticResult } from '../types';

const Home: React.FC = () => {
  const handleDiagnosticComplete = (result: DiagnosticResult) => {
    console.log('Diagnostic completed:', result);
    // Can be extended to save to database or display additional info
  };

  return (
    <div className="home-page">
      <Dashboard onDiagnosticComplete={handleDiagnosticComplete} />

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔐 Privacy-Preserving</h3>
            <p>Your medical data never leaves your institution. Only encrypted model updates are shared.</p>
          </div>

          <div className="feature-card">
            <h3>🏥 Federated Learning</h3>
            <p>Collaborative model training across multiple healthcare institutions without centralizing sensitive data.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Real-time Analysis</h3>
            <p>Instant diagnostic predictions with confidence scores for immediate clinical decision support.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Comprehensive Results</h3>
            <p>Detailed severity classification, follow-up recommendations, and exportable diagnostic reports.</p>
          </div>

          <div className="feature-card">
            <h3>🔄 Multiple Models</h3>
            <p>Choose between different model architectures optimized for various patient populations.</p>
          </div>

          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Access the system from any device with a modern web browser - desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About This System</h2>
        <div className="about-content">
          <p>
            This privacy-preserving federated learning system enables collaborative diagnosis of diabetic retinopathy 
            across multiple healthcare institutions without compromising patient privacy.
          </p>
          <p>
            Unlike traditional centralized approaches that require sending sensitive medical data to a central server, 
            our federated learning approach keeps all raw patient data local while enabling institutions to collaborate 
            on improving a shared machine learning model.
          </p>
          <h3>How It Works</h3>
          <ol>
            <li>Patient uploads their retinal scan locally</li>
            <li>Image is processed on local servers using the federated model</li>
            <li>Model makes prediction and provides severity classification</li>
            <li>Only the model's learned parameters are shared (not patient data)</li>
            <li>Model continuously improves through federated averaging across institutions</li>
          </ol>
        </div>
      </section>

      <section className="technical-section">
        <h2>Technical Architecture</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <h4>Frontend</h4>
            <ul>
              <li>React 18.2</li>
              <li>TypeScript</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="tech-item">
            <h4>Model</h4>
            <ul>
              <li>ResNet50 Architecture</li>
              <li>Federated Learning</li>
              <li>Multi-institution Collaboration</li>
            </ul>
          </div>

          <div className="tech-item">
            <h4>Privacy</h4>
            <ul>
              <li>Differential Privacy</li>
              <li>Secure Aggregation</li>
              <li>Local Data Processing</li>
            </ul>
          </div>

          <div className="tech-item">
            <h4>Integration</h4>
            <ul>
              <li>Jupyter Notebooks</li>
              <li>Model Inference</li>
              <li>Result Management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
