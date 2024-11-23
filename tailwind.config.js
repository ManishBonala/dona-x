/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Epilogue"', 'sans-serif'], // Add Epilogue font
        secondary: ['"Carlito"', 'sans-serif'],
      },
      borderGradient: {
        
      },
      colors: {
        'brown': {
          800: '#2C1810',
          900: '#1E0F0A',
        },
        textPrimary : 'rgba(226, 118, 19, 1)'
      }
    }
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ]
};
