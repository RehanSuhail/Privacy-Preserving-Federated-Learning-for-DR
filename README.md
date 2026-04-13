# Privacy-Preserving Federated Learning for Diabetic Retinopathy Diagnosis# Privacy-Preserving Federated Learning Model for Diabetic Retinopathy Diagnosis



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)## Overview

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)This project implements a privacy-preserving federated learning model for diagnosing diabetic retinopathy. It leverages Jupyter Notebooks for model training and prediction, providing a user-friendly interface for inputting patient data and displaying results.

[![React](https://img.shields.io/badge/React-18.2+-61DAFB.svg)](https://reactjs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6.svg)](https://www.typescriptlang.org/)## Project Structure

```

## 🏥 Overviewprivacy-preserving-federated-dr

├── src

This project implements a **privacy-preserving federated learning model** for diagnosing diabetic retinopathy (DR). It combines edge computing, federated learning, and modern web technologies to create a secure, decentralized diagnostic system. The model preserves patient privacy by keeping sensitive medical data on local devices while enabling collaborative model training across institutions.│   ├── components

│   │   ├── InputPanel.tsx

### Key Features│   │   ├── OutputPanel.tsx

│   │   └── Dashboard.tsx

- 🔐 **Privacy-Preserving**: Data never leaves local institutions; only model updates are shared│   ├── pages

- 🏥 **Federated Learning**: Collaborative model training across multiple healthcare institutions│   │   ├── Home.tsx

- 📊 **Interactive Dashboard**: User-friendly interface for model inference and predictions│   │   └── Results.tsx

- 🔄 **Notebook Integration**: Seamlessly integrate with Jupyter notebooks for training and evaluation│   ├── services

- 📈 **Real-time Results**: Instant diagnostic predictions with confidence scores│   │   ├── notebookIntegration.ts

- 🎨 **Responsive UI**: Built with React and TypeScript for modern web experience│   │   └── dataHandler.ts

- 📁 **Multi-model Support**: Support for final and APTOS DDR models│   ├── types

│   │   └── index.ts

## 📋 Table of Contents│   ├── App.tsx

│   └── index.tsx

- [Overview](#-overview)├── public

- [Project Structure](#-project-structure)│   └── index.html

- [Installation](#-installation)├── notebooks

- [Usage](#-usage)│   ├── final.ipynb

- [Architecture](#-architecture)│   └── Federated_aptos_ddr.ipynb

- [Configuration](#-configuration)├── package.json

- [Notebooks](#-notebooks)├── tsconfig.json

- [Contributing](#-contributing)├── .gitignore

- [License](#-license)└── README.md

```

## 🗂️ Project Structure

## Setup Instructions

```1. **Clone the Repository**

privacy-preserving-federated-learning-dr/   ```bash

├── src/   git clone https://github.com/yourusername/privacy-preserving-federated-dr.git

│   ├── components/   cd privacy-preserving-federated-dr

│   │   ├── Dashboard.tsx           # Main dashboard component   ```

│   │   ├── InputPanel.tsx          # Image/data input interface

│   │   └── OutputPanel.tsx         # Results display component2. **Install Dependencies**

│   ├── pages/   Make sure you have Node.js and npm installed. Then run:

│   │   ├── Home.tsx                # Home page   ```bash

│   │   └── Results.tsx             # Results page   npm install

│   ├── services/   ```

│   │   ├── dataHandler.ts          # Data processing service

│   │   └── notebookIntegration.ts  # Notebook integration service3. **Run the Application**

│   ├── types/   Start the development server:

│   │   └── index.ts                # TypeScript type definitions   ```bash

│   ├── App.tsx                     # Main App component   npm start

│   ├── index.tsx                   # React entry point   ```

│   └── App.css                     # Global styles

├── public/4. **Access the Application**

│   ├── index.html                  # HTML template   Open your browser and navigate to `http://localhost:3000` to view the application.

│   └── favicon.ico

├── notebooks/## Usage Guidelines

│   ├── final.ipynb                 # Final model notebook- Use the **Input Panel** to enter patient data for diabetic retinopathy diagnosis.

│   └── Federated_aptos_ddr.ipynb   # APTOS DDR model notebook- Click on the **Submit** button to send the data to the model.

├── package.json                    # Node.js dependencies- The **Output Panel** will display the results of the diagnosis, including any relevant visualizations or summaries.

├── tsconfig.json                   # TypeScript configuration

├── .gitignore                      # Git ignore rules## Contributing

└── README.md                       # This fileContributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

```

## License

## 🚀 InstallationThis project is licensed under the MIT License. See the LICENSE file for more details.

### Prerequisites

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)
- Git
- Python 3.8+ (for Jupyter notebooks)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/privacy-preserving-federated-learning-dr.git
cd privacy-preserving-federated-learning-dr
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_NOTEBOOK_PATH=/notebooks
REACT_APP_MODEL_NAME=federated-dr-model
```

### Step 4: Start Development Server

```bash
npm start
```

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

### Running Jupyter Notebooks

```bash
# Install Jupyter if not already installed
pip install jupyter

# Start Jupyter server
jupyter notebook

# Navigate to notebooks/ directory and open:
# - final.ipynb
# - Federated_aptos_ddr.ipynb
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

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- APTOS dataset for diabetic retinopathy diagnosis
- Federated learning research community
- Contributors and maintainers

## 📞 Support

For issues, questions, or suggestions:

1. **GitHub Issues**: [Create an issue](https://github.com/yourusername/privacy-preserving-federated-learning-dr/issues)
2. **Email**: your.email@example.com
3. **Documentation**: See [docs/](docs/) folder

## 🗺️ Roadmap

- [ ] Backend API implementation
- [ ] Real model integration
- [ ] Advanced federated learning strategies
- [ ] Mobile app support
- [ ] Docker containerization
- [ ] Enhanced UI/UX
- [ ] Performance optimization
- [ ] Additional medical imaging support

## ⚠️ Disclaimer

This project is for **educational and research purposes only**. It is not intended for clinical use. Always consult with qualified healthcare professionals for medical diagnosis and treatment decisions.

---

**Last Updated**: April 2026
**Version**: 1.0.0
**Status**: Active Development
