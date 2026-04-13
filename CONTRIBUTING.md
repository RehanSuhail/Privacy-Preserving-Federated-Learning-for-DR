# Contributing to Privacy-Preserving Federated Learning for DR Diagnosis

Thank you for your interest in contributing to this project! We welcome contributions from researchers, developers, and healthcare professionals.

## Code of Conduct

- Be respectful and professional
- Focus on the scientific merit of ideas
- Protect patient privacy at all times
- Follow ethical guidelines for medical research

## Getting Started

### Prerequisites

- Node.js v14.0 or higher
- npm v6.0 or higher
- Python 3.8+ (for notebook development)
- Git

### Setup Development Environment

1. Clone the repository:
```bash
git clone https://github.com/yourusername/privacy-preserving-federated-learning-dr.git
cd privacy-preserving-federated-learning-dr
```

2. Install dependencies:
```bash
npm install
```

3. Create a branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

## Development Guidelines

### Code Style

- Follow TypeScript strict mode
- Use meaningful variable and function names
- Add JSDoc comments for all public functions
- Keep functions small and focused

### Component Development

- Use React functional components with hooks
- Follow the existing file structure
- Add proper TypeScript types
- Include error handling

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep commits atomic and focused
- Reference issues when relevant

Example:
```
Add patient data validation in InputPanel
- Validate first and last name
- Check age range
- Implement error messages
Closes #42
```

## Pull Request Process

1. **Fork the repository** and create your feature branch
2. **Make your changes** with clear commit messages
3. **Test your code** thoroughly
4. **Update documentation** if needed
5. **Submit a Pull Request** with:
   - Clear description of changes
   - Reference to related issues
   - Screenshots/videos if applicable
   - Testing instructions

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] New tests added for new functionality
- [ ] Documentation updated
- [ ] No sensitive data in commits
- [ ] TypeScript compiles without errors

## Types of Contributions

### Bug Reports

- Use the issue template
- Include minimal reproducible example
- Describe expected vs actual behavior
- List your environment details

### Feature Requests

- Clearly describe the use case
- Explain how it benefits users
- Provide example implementation if possible
- Discuss potential privacy implications

### Documentation

- Fix typos and improve clarity
- Add examples and tutorials
- Update architecture diagrams
- Translate to other languages

### Model Improvements

- Test federated learning strategies
- Validate privacy preserving mechanisms
- Benchmark performance improvements
- Document methodology

## Testing

### Run Tests

```bash
npm test
```

### With Coverage

```bash
npm test -- --coverage
```

### Integration Tests

```bash
# Run with specific test files
npm test src/components/InputPanel.test.tsx
```

## Documentation

- Update README.md for major changes
- Add code comments for complex logic
- Create/update user guides
- Document configuration options

## Community

- **Questions**: Use GitHub Discussions
- **Bug Reports**: Use GitHub Issues
- **Suggestions**: Start a Discussion first
- **Security Issues**: Email security@example.com privately

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

## Licensing

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

- Open a GitHub Discussion
- Email: contact@example.com
- Check existing issues and PRs

Thank you for contributing to making diabetic retinopathy diagnosis more accessible and private! 🏥
