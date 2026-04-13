/**
 * OutputPanel Component
 * Displays diagnostic results and predictions
 */

import React from 'react';
import { ModelPrediction, OutputPanelProps, DRSeverity } from '../types';
import { formatProcessingTime } from '../services/dataHandler';
import { notebookService } from '../services/notebookIntegration';

const OutputPanel: React.FC<OutputPanelProps> = ({ 
  prediction, 
  isLoading = false,
  error = null
}) => {
  if (isLoading) {
    return (
      <div className="output-panel">
        <h2>Analysis Results</h2>
        <div className="loading">
          <p>Processing your retinal image...</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="output-panel">
        <h2>Analysis Results</h2>
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="output-panel">
        <h2>Analysis Results</h2>
        <div className="no-results">
          <p>Submit patient data and image to see results</p>
        </div>
      </div>
    );
  }

  // Get recommendation
  const recommendation = notebookService.getSeverityRecommendation(
    prediction.severity,
    prediction.confidence
  );

  // Severity color mapping
  const severityColors: Record<DRSeverity, string> = {
    'No DR': '#28a745',
    'Mild': '#ffc107',
    'Moderate': '#fd7e14',
    'Severe': '#dc3545',
    'Proliferative': '#721c24'
  };

  const severityColor = severityColors[prediction.severity];

  return (
    <div className="output-panel">
      <h2>Analysis Results</h2>

      {/* Main Prediction */}
      <div className="prediction-result" style={{ borderTopColor: severityColor }}>
        <div className="severity-display">
          <h3>Diabetic Retinopathy Severity</h3>
          <div 
            className="severity-badge"
            style={{ backgroundColor: severityColor }}
          >
            {prediction.severity}
          </div>
        </div>

        {/* Confidence */}
        <div className="confidence-section">
          <h4>Confidence Score</h4>
          <div className="confidence-bar">
            <div 
              className="confidence-fill"
              style={{ 
                width: `${prediction.confidence * 100}%`,
                backgroundColor: severityColor
              }}
            />
          </div>
          <p>{(prediction.confidence * 100).toFixed(1)}%</p>
        </div>

        {/* Processing Info */}
        <div className="processing-info">
          <p>
            <strong>Model:</strong> {prediction.modelUsed}
          </p>
          <p>
            <strong>Eye:</strong> {prediction.eye === 'OD' ? 'Right Eye' : 'Left Eye'}
          </p>
          <p>
            <strong>Processing Time:</strong> {formatProcessingTime(prediction.processingTime)}
          </p>
          <p>
            <strong>Timestamp:</strong> {new Date(prediction.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

      {/* All Predictions */}
      <div className="all-predictions">
        <h3>Classification Probabilities</h3>
        <div className="prediction-list">
          {Object.entries(prediction.predictions).map(([severity, probability]) => (
            <div key={severity} className="prediction-item">
              <div className="prediction-label">
                <span>{severity}</span>
                <span className="prediction-value">
                  {(probability * 100).toFixed(1)}%
                </span>
              </div>
              <div className="prediction-bar">
                <div 
                  className="prediction-fill"
                  style={{ width: `${probability * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="recommendation-section">
        <h3>Clinical Recommendation</h3>
        <div 
          className="recommendation-box"
          style={{ borderLeftColor: severityColor }}
        >
          <p>{recommendation.recommendation}</p>
          {recommendation.followUpRequired && recommendation.followUpDays && (
            <p className="followup-info">
              📅 <strong>Recommended Follow-up:</strong> Within {recommendation.followUpDays} days
            </p>
          )}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="privacy-notice">
        <p>
          🔐 <strong>Privacy Notice:</strong> This analysis was performed using privacy-preserving federated learning. 
          Your personal data was not shared with external parties. Only model parameters were aggregated from this institution's local model.
        </p>
      </div>

      {/* Export Options */}
      <div className="export-section">
        <h4>Export Results</h4>
        <button className="export-btn export-json">📊 Export as JSON</button>
        <button className="export-btn export-csv">📋 Export as CSV</button>
      </div>
    </div>
  );
};

export default OutputPanel;
