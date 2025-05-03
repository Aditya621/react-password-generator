# Password Generator

A modern, secure password generator built with React, TypeScript, and Tailwind CSS. This application allows users to create strong, customizable passwords with various options for enhanced security.


## Features

- Generate passwords of customizable length (6-100 characters)
- Include/exclude numbers
- Include/exclude special characters
- One-click copy to clipboard
- Real-time password generation
- Responsive design
- Dark mode interface

## Live Demo

Check out the live demo: [Password Generator](https://gleaming-sawine-f40cbc.netlify.app)

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # TypeScript declarations
├── public/
│   └── vite.svg         # Vite logo
├── index.html           # HTML entry point
└── package.json         # Project dependencies and scripts
```

## Features in Detail

### Password Generation
- Generates secure random passwords using JavaScript's Math.random()
- Updates in real-time when options are changed
- Supports lengths from 6 to 100 characters

### Customization Options
- **Length Slider**: Adjust password length from 6 to 100 characters
- **Numbers Toggle**: Include/exclude numbers (0-9)
- **Special Characters Toggle**: Include/exclude special characters

### User Interface
- Clean, modern design with Tailwind CSS
- Responsive layout that works on all devices
- Dark theme for comfortable viewing
- Visual feedback for copy operations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://www.netlify.com/)
