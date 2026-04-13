/**
 * Dashboard Component
 * Main component orchestrating InputPanel and OutputPanel
 */

import React, { useState } from 'react';
import { InferenceInput, ModelPrediction, DiagnosticResult, DashboardProps } from '../types';
import { notebookService } from '../services/notebookIntegration';
import { validateInferenceInput, exportToJSON, exportToCSV } from '../services/dataHandler';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

const Dashboard: React.FC<DashboardProps> = ({ onDiagnosticComplete }) => {
  const [prediction, setPrediction] = useState<ModelPrediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<'final' | 'federated-aptos-ddr'>('final');
  const [diagnosticHistory, setDiagnosticHistory] = useState<DiagnosticResult[]>([]);

  const handleSubmit = async (input: InferenceInput) => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      // Validate input
      const validation = validateInferenceInput(input);
      if (!validation.valid) {
        setError(validation.errors.join(', '));
        setIsLoading(false);
        return;
      }

      // Execute inference through notebook service
      const result = await notebookService.executeInference(input);
      setPrediction(result);

      // Get recommendation
      const recommendation = notebookService.getSeverityRecommendation(
        result.severity,
        result.confidence
      );

      // Create diagnostic result
      const diagnosticResult: DiagnosticResult = {
        id: `diag-${Date.now()}`,
        patientData: input.patientData,
        image: input.image,
        prediction: result,
        recommendation: recommendation.recommendation,
        followUpRequired: recommendation.followUpRequired,
        followUpDays: recommendation.followUpDays
      };

      // Add to history
      setDiagnosticHistory(prev => [diagnosticResult, ...prev]);

      // Call callback
      onDiagnosticComplete?.(diagnosticResult);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during inference');
      console.error('Inference error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModelChange = (model: 'final' | 'federated-aptos-ddr') => {
    setSelectedModel(model);
    setPrediction(null);
    setError(null);
  };

  const handleExportJSON = () => {
    if (prediction) {
      exportToJSON(
        {
          prediction,
          exportDate: new Date().toISOString()
        },
        `dr-diagnosis-${Date.now()}.json`
      );
    }
  };

  const handleExportCSV = () => {
    if (prediction) {
      exportToCSV(
        {
          prediction,
          exportDate: new Date().toISOString()
        },
        `dr-diagnosis-${Date.now()}.csv`
      );
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>🏥 Privacy-Preserving Federated Learning for Diabetic Retinopathy Diagnosis</h1>
        <p className="subtitle">Secure, collaborative diagnostic system using federated learning</p>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-left">
          <InputPanel
            onSubmit={handleSubmit}
            isLoading={isLoading}
            selectedModel={selectedModel}
            onModelChange={handleModelChange}
          />
        </div>

        <div className="dashboard-right">
          <OutputPanel
            prediction={prediction}
            isLoading={isLoading}
            error={error}
          />

          {/* History Section */}
          {diagnosticHistory.length > 0 && (
            <div className="history-section">
              <h3>Recent Diagnostics ({diagnosticHistory.length})</h3>
              <div className="history-list">
                {diagnosticHistory.slice(0, 5).map((result, index) => (
                  <div key={result.id} className="history-item">
                    <div className="history-info">
                      <p>
                        <strong>{result.patientData.firstName} {result.patientData.lastName}</strong>
                      </p>
                      <p className="history-severity">
                        Severity: <span style={{ color: getSeverityColor(result.prediction.severity) }}>
                          {result.prediction.severity}
                        </span>
                      </p>
                      <p className="history-time">
                        {new Date(result.prediction.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="history-confidence">
                      {(result.prediction.confidence * 100).toFixed(1)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="dashboard-footer">
        <div className="privacy-info">
          <h4>🔐 Privacy-Preserving Technology</h4>
          <ul>
            <li>✓ Data stays local - never transmitted to central servers</li>
            <li>✓ Only model updates are shared across institutions</li>
            <li>✓ Differential privacy mechanisms protect individual privacy</li>
            <li>✓ Secure aggregation ensures data confidentiality</li>
          </ul>
        </div>

        <div className="system-info">
          <h4>📊 System Information</h4>
          <p><strong>Active Model:</strong> {selectedModel}</p>
          <p><strong>Federated Nodes:</strong> Multiple Healthcare Institutions</p>
          <p><strong>Privacy Standard:</strong> HIPAA Compliant</p>
          <p><strong>Version:</strong> 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

const getSeverityColor = (severity: string): string => {
  const colors: Record<string, string> = {
    'No DR': '#28a745',
    'Mild': '#ffc107',
    'Moderate': '#fd7e14',
    'Severe': '#dc3545',
    'Proliferative': '#721c24'
  };
  return colors[severity] || '#6c757d';
};

export default Dashboard;
