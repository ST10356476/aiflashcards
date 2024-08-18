// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './public/**/*.html',
    ],
    theme: {
      extend: {
        colors: {
          neonGreen: '#39FF14',
          neonBlue: '#1F51FF',
        },
        boxShadow: {
          neon: '0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.6), 0 0 30px rgba(57, 255, 20, 0.4)',
        },
      },
    },
    plugins: [],
  };
  