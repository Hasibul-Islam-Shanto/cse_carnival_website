/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': '#280847',
        'navbar-button' : '#DB7B1B',
        'navbar-button-hover' : '#D35C18'
        
      },
      textColor: {
        'navbar-link': '#F0E0C6',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

