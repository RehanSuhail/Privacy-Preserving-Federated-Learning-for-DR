/**export interface InputData {

 * Type definitions for the Privacy-Preserving Federated Learning DR application    patientId: string;

 */    age: number;

    gender: 'male' | 'female';

/**    symptoms: string[];

 * Represents a patient's demographic and clinical information}

 */

export interface PatientData {export interface OutputData {

  id?: string;    diagnosis: string;

  firstName: string;    confidence: number;

  lastName: string;    recommendations: string[];

  age: number;}
  gender: 'M' | 'F' | 'Other';
  medicalHistory?: string;
  medications?: string[];
  additionalNotes?: string;
}

/**
 * Represents retinal image data
 */
export interface RetinalImage {
  id?: string;
  fileName: string;
  file: File;
  base64?: string;
  uploadDate?: Date;
  eye: 'OD' | 'OS'; // OD: Right Eye, OS: Left Eye
}

/**
 * Represents the input for model inference
 */
export interface InferenceInput {
  patientData: PatientData;
  image: RetinalImage;
  modelName: 'final' | 'federated-aptos-ddr';
}

/**
 * Represents the model's prediction for diabetic retinopathy severity
 */
export type DRSeverity = 'No DR' | 'Mild' | 'Moderate' | 'Severe' | 'Proliferative';

/**
 * Represents the output/prediction from the model
 */
export interface ModelPrediction {
  id?: string;
  patientId?: string;
  severity: DRSeverity;
  confidence: number; // 0-1 probability
  predictions: {
    [key in DRSeverity]: number;
  };
  processingTime: number; // in milliseconds
  timestamp: Date;
  modelUsed: string;
  eye: 'OD' | 'OS';
}

/**
 * Represents the complete diagnostic result
 */
export interface DiagnosticResult {
  id?: string;
  patientData: PatientData;
  image: RetinalImage;
  prediction: ModelPrediction;
  recommendation?: string;
  followUpRequired: boolean;
  followUpDays?: number;
}

/**
 * Represents a federated learning participant
 */
export interface FederatedParticipant {
  id: string;
  name: string;
  institution: string;
  location: string;
  dataContribution: number; // number of samples
  modelVersion: string;
  lastUpdate: Date;
}

/**
 * Represents federated learning aggregation results
 */
export interface FederatedAggregation {
  round: number;
  timestamp: Date;
  participants: FederatedParticipant[];
  globalModelAccuracy: number;
  aggregationMethod: 'FedAvg' | 'FedProx' | 'FedOptimizer';
  status: 'completed' | 'in-progress' | 'failed';
}

/**
 * Represents application state
 */
export interface AppState {
  patient: PatientData | null;
  image: RetinalImage | null;
  prediction: ModelPrediction | null;
  diagnosticHistory: DiagnosticResult[];
  isLoading: boolean;
  error: string | null;
  selectedModel: 'final' | 'federated-aptos-ddr';
}

/**
 * Represents API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Represents notebook execution response
 */
export interface NotebookExecutionResponse {
  success: boolean;
  output?: string;
  error?: string;
  result?: ModelPrediction;
}

/**
 * Represents privacy metrics
 */
export interface PrivacyMetrics {
  differentialPrivacyEpsilon: number;
  differentialPrivacyDelta: number;
  dataEncryption: boolean;
  secureAggregation: boolean;
  localDifferentialPrivacy: boolean;
}

/**
 * Represents federated learning configuration
 */
export interface FederatedConfig {
  numberOfRounds: number;
  participantsPerRound: number;
  learningRate: number;
  batchSize: number;
  privacyMetrics: PrivacyMetrics;
}

/**
 * Represents component props for InputPanel
 */
export interface InputPanelProps {
  onSubmit: (input: InferenceInput) => void;
  isLoading?: boolean;
  selectedModel?: 'final' | 'federated-aptos-ddr';
  onModelChange?: (model: 'final' | 'federated-aptos-ddr') => void;
}

/**
 * Represents component props for OutputPanel
 */
export interface OutputPanelProps {
  prediction: ModelPrediction | null;
  isLoading?: boolean;
  error?: string | null;
}

/**
 * Represents component props for Dashboard
 */
export interface DashboardProps {
  onDiagnosticComplete?: (result: DiagnosticResult) => void;
}

/**
 * Represents audit log entry
 */
export interface AuditLogEntry {
  id: string;
  timestamp: Date;
  action: 'prediction' | 'data_upload' | 'model_update' | 'aggregation';
  userId?: string;
  details: Record<string, any>;
  status: 'success' | 'failure';
}
