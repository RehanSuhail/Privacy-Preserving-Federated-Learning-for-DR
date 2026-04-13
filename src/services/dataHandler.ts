/**export const validateInputData = (data: any): boolean => {

 * Data Handler Service    // Implement validation logic for input data

 * Handles data processing, validation, and transformation    // Example: Check if required fields are present and valid

 */    return true; // Return true if valid, false otherwise

};

import { PatientData, RetinalImage, InferenceInput } from '../types';

export const formatInputData = (data: any): any => {

/**    // Implement formatting logic for input data

 * Converts a File object to Base64 string    // Example: Convert data to the required format for the model

 */    return data; // Return formatted data

export const fileToBase64 = (file: File): Promise<string> => {};

  return new Promise((resolve, reject) => {

    const reader = new FileReader();export const transformOutputData = (output: any): any => {

    reader.onload = () => {    // Implement transformation logic for output data

      const result = reader.result as string;    // Example: Convert model output to a user-friendly format

      resolve(result.split(',')[1]); // Remove the data:image/...;base64, prefix    return output; // Return transformed output

    };};
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Validates patient data
 */
export const validatePatientData = (data: PatientData): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.firstName || data.firstName.trim() === '') {
    errors.push('First name is required');
  }

  if (!data.lastName || data.lastName.trim() === '') {
    errors.push('Last name is required');
  }

  if (data.age < 0 || data.age > 150) {
    errors.push('Age must be between 0 and 150');
  }

  if (!['M', 'F', 'Other'].includes(data.gender)) {
    errors.push('Invalid gender value');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validates retinal image
 */
export const validateRetinalImage = (image: RetinalImage): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!image.file) {
    errors.push('Image file is required');
  }

  if (image.file && !image.file.type.startsWith('image/')) {
    errors.push('File must be an image');
  }

  if (image.file && image.file.size > 10 * 1024 * 1024) {
    errors.push('Image size must not exceed 10MB');
  }

  if (!['OD', 'OS'].includes(image.eye)) {
    errors.push('Invalid eye specification (must be OD or OS)');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validates complete inference input
 */
export const validateInferenceInput = (input: InferenceInput): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  const patientValidation = validatePatientData(input.patientData);
  if (!patientValidation.valid) {
    errors.push(...patientValidation.errors);
  }

  const imageValidation = validateRetinalImage(input.image);
  if (!imageValidation.valid) {
    errors.push(...imageValidation.errors);
  }

  if (!['final', 'federated-aptos-ddr'].includes(input.modelName)) {
    errors.push('Invalid model name');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Normalizes image pixel values to 0-1 range
 */
export const normalizeImageData = (imageData: Uint8ClampedArray): Float32Array => {
  const normalized = new Float32Array(imageData.length);
  for (let i = 0; i < imageData.length; i++) {
    normalized[i] = imageData[i] / 255.0;
  }
  return normalized;
};

/**
 * Resizes image to standard dimensions (assuming canvas or similar)
 */
export const getImageDimensions = (
  file: File,
  callback: (width: number, height: number) => void
): void => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      callback(img.width, img.height);
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
};

/**
 * Formats patient data for display
 */
export const formatPatientData = (data: PatientData): string => {
  return `
    Name: ${data.firstName} ${data.lastName}
    Age: ${data.age}
    Gender: ${data.gender}
    ${data.medicalHistory ? `Medical History: ${data.medicalHistory}` : ''}
    ${data.medications && data.medications.length > 0 ? `Medications: ${data.medications.join(', ')}` : ''}
  `.trim();
};

/**
 * Generates a unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Formats processing time for display
 */
export const formatProcessingTime = (milliseconds: number): string => {
  if (milliseconds < 1000) {
    return `${milliseconds.toFixed(0)}ms`;
  }
  return `${(milliseconds / 1000).toFixed(2)}s`;
};

/**
 * Exports diagnostic result to JSON
 */
export const exportToJSON = (data: any, fileName: string): void => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2)));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * Exports diagnostic result to CSV
 */
export const exportToCSV = (data: any, fileName: string): void => {
  let csv = 'Patient Information\n';
  csv += `Name,Age,Gender\n`;
  csv += `${data.patientData.firstName} ${data.patientData.lastName},${data.patientData.age},${data.patientData.gender}\n\n`;
  csv += `Prediction Results\n`;
  csv += `Severity,Confidence,Model,Timestamp\n`;
  csv += `${data.prediction.severity},${data.prediction.confidence.toFixed(2)},${data.prediction.modelUsed},${data.prediction.timestamp}\n`;

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
