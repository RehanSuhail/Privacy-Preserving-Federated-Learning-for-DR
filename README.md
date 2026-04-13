# Privacy-Preserving Federated Learning for Diabetic Retinopathy Diagnosis
This project implements a privacy-preserving federated learning model for diagnosing diabetic retinopathy. It leverages Jupyter Notebooks for model training and prediction, providing a user-friendly interface for inputting patient data and displaying results.


```

### Prerequisites

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)
- Git
- Python 3.8+ (for Jupyter notebooks)


The application will open at `http://localhost:3000`

## 💻 Usage

### Running the Frontend

```bash
# Development mode
npm start

# Build for production
npm build

# Run tests
npm test
```

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────┐
│           Web Frontend (React/TypeScript)            │
│  ┌──────────────────────────────────────────────┐   │
│  │         Interactive Dashboard                │   │
│  │  ├── Image Upload Interface                  │   │
│  │  ├── Patient Data Input                      │   │
│  │  └── Real-time Results Display               │   │
│  └──────────────────────────────────────────────┘   │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│         Jupyter Notebook Integration                 │
│  ┌──────────────────────────────────────────────┐   │
│  │    Model Inference & Processing              │   │
│  │  ├── final.ipynb (Primary Model)             │   │
│  │  └── Federated_aptos_ddr.ipynb (Alt Model)   │   │
│  └──────────────────────────────────────────────┘   │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│      Privacy-Preserving Components                   │
│  ├── Local Data Processing                          │
│  ├── Model Update Aggregation                       │
│  └── Federated Learning Coordination                │
└─────────────────────────────────────────────────────┘
```

### Component Architecture

**Dashboard.tsx**
- Main interface for user interactions
- Orchestrates input and output components
- Manages application state

**InputPanel.tsx**
- Handles image uploads for retinal scans
- Patient demographic data collection
- Form validation

**OutputPanel.tsx**
- Displays diagnostic results
- Shows confidence scores
- Provides severity classification

**DataHandler.ts**
- Image preprocessing
- Data normalization
- Format conversion

**NotebookIntegration.ts**
- Communication with Jupyter notebooks
- Model inference execution
- Result parsing

## ⚙️ Configuration

### TypeScript Configuration

Edit `tsconfig.json` to customize compilation options:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API endpoint | `http://localhost:5000` |
| `REACT_APP_NOTEBOOK_PATH` | Path to notebooks | `/notebooks` |
| `REACT_APP_MODEL_NAME` | Model identifier | `federated-dr-model` |

## 📓 Notebooks

### final.ipynb

The primary model notebook containing:
- Model architecture definition
- Federated learning setup
- Inference pipeline
- Result aggregation

**Usage:**
```bash
jupyter notebook notebooks/final.ipynb
```

### Federated_aptos_ddr.ipynb

Alternative APTOS-based DDR model:
- APTOS dataset integration
- Model validation
- Performance metrics

**Usage:**
```bash
jupyter notebook notebooks/Federated_aptos_ddr.ipynb
```

## 🔐 Privacy & Security

### Privacy-Preserving Mechanisms

1. **Local Data Processing**: All raw medical data stays on local devices
2. **Federated Averaging**: Only model parameter updates are shared
3. **Differential Privacy**: Optional noise injection for additional privacy
4. **Secure Aggregation**: Encrypted communication between parties

### Data Handling

- Images are processed locally before transmission
- Only processed features are sent, never raw images
- Model predictions are computed at the edge
- Audit logs maintained for compliance

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

### Development Guidelines

- Follow TypeScript strict mode
- Use React hooks for functional components
- Add tests for new features
- Update documentation as needed
- Keep commits atomic and descriptive

## 📦 Dependencies

### Runtime Dependencies

- **react** (^18.2.0): UI library
- **react-dom** (^18.2.0): React rendering
- **react-router-dom** (^6.11.0): Client-side routing
- **axios** (^1.4.0): HTTP client
- **react-scripts** (^5.0.0): Create React App build tools

### Development Dependencies

- **typescript** (^4.9.5): Type safety
- **@types/react**: React type definitions
- **@types/react-dom**: React DOM type definitions


## 🙏 Acknowledgments

- APTOS dataset for diabetic retinopathy diagnosis
- Federated learning research community
- Contributors and maintainers

## 🗺️ Roadmap

- [ ] Backend API implementation
- [ ] Real model integration
- [ ] Advanced federated learning strategies
- [ ] Mobile app support
- [ ] Docker containerization
- [ ] Enhanced UI/UX
- [ ] Performance optimization
- [ ] Additional medical imaging support


**Last Updated**: April 2026
**Version**: 1.0.0
**Status**: Active Development
