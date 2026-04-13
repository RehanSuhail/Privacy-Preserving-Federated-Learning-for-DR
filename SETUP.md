# SETUP & DEPLOYMENT GUIDE

## Privacy-Preserving Federated Learning for Diabetic Retinopathy Diagnosis

### 🚀 Quick Start

#### 1. Prerequisites
- Node.js (v14.0+)
- npm (v6.0+)
- Python 3.8+ (for Jupyter notebooks)
- Git

#### 2. Installation

```bash
# Clone repository
git clone https://github.com/yourusername/privacy-preserving-federated-learning-dr.git
cd privacy-preserving-federated-learning-dr

# Install dependencies
npm install

# Install Python dependencies for notebooks
pip install jupyter numpy pandas scikit-learn tensorflow torch

# Start development server
npm start
```

The application will open at `http://localhost:3000`

---

## 📁 Project Structure

```
privacy-preserving-federated-learning-dr/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.tsx    # Main dashboard component
│   │   ├── InputPanel.tsx   # Patient data input
│   │   └── OutputPanel.tsx  # Results display
│   ├── pages/               # Page components
│   │   └── Home.tsx         # Home page with features
│   ├── services/            # Business logic
│   │   ├── dataHandler.ts   # Data validation and processing
│   │   └── notebookIntegration.ts  # Jupyter integration
│   ├── types/               # TypeScript definitions
│   │   └── index.ts         # Shared types
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   └── App.css              # Global styles
├── public/
│   └── index.html           # HTML template
├── notebooks/
│   ├── final.ipynb          # Primary model
│   └── Federated_aptos_ddr.ipynb  # Alternative model
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── .gitignore               # Git ignore rules
├── README.md                # Documentation
├── LICENSE                  # MIT License
├── CONTRIBUTING.md          # Contribution guide
└── SETUP.md                 # This file
```

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (one-way operation)
npm eject
```

### Hot Reload

The development server automatically reloads when you make changes.

### TypeScript Compilation

```bash
# Check for type errors
npx tsc --noEmit
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test
npm test -- src/components/InputPanel.test.tsx

# Generate coverage report
npm test -- --coverage
```

---

## 📦 Building for Production

```bash
# Create optimized production build
npm build

# Output directory: build/

# Test production build locally
npm install -g serve
serve -s build
```

---

## 🔐 Security Best Practices

### Data Handling
- ✅ Process images locally before transmission
- ✅ Use HTTPS in production
- ✅ Implement authentication/authorization
- ✅ Encrypt sensitive data at rest and in transit
- ✅ Maintain audit logs for compliance

### Frontend Security
- ✅ Use Content Security Policy (CSP)
- ✅ Sanitize user inputs
- ✅ Keep dependencies updated
- ✅ Use secure random number generation

### Privacy Compliance
- ✅ Follow HIPAA regulations
- ✅ Implement proper consent mechanisms
- ✅ Maintain data retention policies
- ✅ Enable user data export/deletion

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Static Site)

```bash
# Build
npm build

# Deploy to GitHub Pages
npm install gh-pages --save-dev

# In package.json, add:
"homepage": "https://yourusername.github.io/privacy-preserving-federated-learning-dr"

# Deploy
npm run deploy
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Option 4: Docker

Create `Dockerfile`:

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=0 /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

Build and run:

```bash
docker build -t privacy-preserving-dr .
docker run -p 3000:3000 privacy-preserving-dr
```

### Option 5: AWS

#### With AWS Amplify:

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify push
```

#### With CloudFront & S3:

```bash
# Build
npm run build

# Upload to S3
aws s3 sync build/ s3://your-bucket-name --delete

# Create CloudFront distribution for CDN
```

---

## 🔄 Jupyter Notebook Integration

### Running Notebooks

```bash
# Start Jupyter server
jupyter notebook

# Navigate to notebooks/ directory
# Open final.ipynb or Federated_aptos_ddr.ipynb
```

### Connecting Frontend to Backend

1. Create a backend API that executes notebooks
2. Configure API endpoint in `.env`
3. Update `notebookIntegration.ts` to call your backend
4. Test inference pipeline

### Example Backend (Flask):

```python
from flask import Flask, jsonify, request
import subprocess

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    # Execute notebook with data
    # Return predictions
    return jsonify({'prediction': ...})

if __name__ == '__main__':
    app.run(debug=False, port=5000)
```

---

## 📊 Environment Variables

Create `.env.local`:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_NOTEBOOK_PATH=/notebooks
REACT_APP_MODEL_NAME=federated-dr-model
REACT_APP_DEBUG=false
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: `Cannot find module 'react'`
```bash
npm install
```

**Issue**: Port 3000 already in use
```bash
# Use different port
PORT=3001 npm start
```

**Issue**: TypeScript errors
```bash
# Check types
npx tsc --noEmit

# Update dependencies
npm install
```

**Issue**: Build fails
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🔗 Version Control

### GitHub Setup

1. Create repository on GitHub
2. Add remote:
```bash
git remote add origin https://github.com/yourusername/repo-name.git
```

3. Push initial code:
```bash
git branch -M main
git push -u origin main
```

4. Set up branch protection rules
5. Configure CI/CD

---

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request
# Wait for review and merge
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jupyter Documentation](https://jupyter.org/documentation)
- [Federated Learning Papers](https://arxiv.org)
- [Privacy-Preserving ML](https://differential-privacy.org)

---

## 📞 Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: contact@example.com
- **Documentation**: See README.md

---

## ⚖️ Legal & Compliance

- ✅ MIT License
- ✅ HIPAA Compliant Design
- ✅ GDPR Considerations
- ✅ Ethical Guidelines
- ⚠️ Not for clinical use without validation

---

**Last Updated**: April 2026
**Version**: 1.0.0
