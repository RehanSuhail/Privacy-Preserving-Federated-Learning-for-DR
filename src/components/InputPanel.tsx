/**
 * InputPanel Component
 * Handles user input for patient data and retinal image upload
 */

import React, { useState } from 'react';
import { PatientData, RetinalImage, InferenceInput, InputPanelProps } from '../types';
import { validatePatientData, validateRetinalImage } from '../services/dataHandler';

const InputPanel: React.FC<InputPanelProps> = ({ 
  onSubmit, 
  isLoading = false,
  selectedModel = 'final',
  onModelChange 
}) => {
  const [formData, setFormData] = useState<PatientData>({
    firstName: '',
    lastName: '',
    age: 0,
    gender: 'M',
    medicalHistory: '',
    medications: [],
    additionalNotes: ''
  });

  const [selectedImage, setSelectedImage] = useState<RetinalImage | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage({
      fileName: file.name,
      file,
      eye: 'OD'
    });

    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    // Validate patient data
    const patientValidation = validatePatientData(formData);
    if (!patientValidation.valid) {
      newErrors.push(...patientValidation.errors);
    }

    // Validate image
    if (!selectedImage) {
      newErrors.push('Please select a retinal image');
    } else {
      const imageValidation = validateRetinalImage(selectedImage);
      if (!imageValidation.valid) {
        newErrors.push(...imageValidation.errors);
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);

    // Create inference input and submit
    const input: InferenceInput = {
      patientData: formData,
      image: selectedImage!,
      modelName: selectedModel as 'final' | 'federated-aptos-ddr'
    };

    onSubmit(input);
  };

  return (
    <div className="input-panel">
      <h2>Patient Information & Image Upload</h2>

      <form onSubmit={handleSubmit} className="input-form">
        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="error-container">
            <h4>Errors:</h4>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Patient Information Section */}
        <fieldset>
          <legend>Patient Information</legend>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="0"
                max="150"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                disabled={isLoading}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleInputChange}
              placeholder="Enter medical history (optional)"
              rows={3}
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalNotes">Additional Notes</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Enter any additional notes (optional)"
              rows={2}
              disabled={isLoading}
            />
          </div>
        </fieldset>

        {/* Image Upload Section */}
        <fieldset>
          <legend>Retinal Image Upload</legend>

          <div className="form-group">
            <label htmlFor="image">Retinal Image *</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isLoading}
            />
          </div>

          {imagePreview && (
            <div className="image-preview">
              <h4>Image Preview:</h4>
              <img src={imagePreview} alt="Retinal scan preview" />
            </div>
          )}

          {selectedImage && (
            <div className="image-info">
              <p><strong>File:</strong> {selectedImage.fileName}</p>
            </div>
          )}
        </fieldset>

        {/* Model Selection */}
        <fieldset>
          <legend>Model Selection</legend>
          <div className="form-group">
            <label>Select Model:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="model"
                  value="final"
                  checked={selectedModel === 'final'}
                  onChange={() => onModelChange?.('final')}
                  disabled={isLoading}
                />
                Final Federated DR Model
              </label>
              <label>
                <input
                  type="radio"
                  name="model"
                  value="federated-aptos-ddr"
                  checked={selectedModel === 'federated-aptos-ddr'}
                  onChange={() => onModelChange?.('federated-aptos-ddr')}
                  disabled={isLoading}
                />
                Federated APTOS DDR Model
              </label>
            </div>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit for Analysis'}
        </button>
      </form>
    </div>
  );
};

export default InputPanel;
