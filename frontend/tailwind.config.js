/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': '#280847',
        'navbar-button' : '#DB7B1B',
        'navbar-button-hover' : '#D35C18',
        'body':'#FFFAF1',
        'navbar-link':"#F0E0C6",
        'tab-header': '#F6EAD8'
      },
      textColor: {
        'navbar-link': '#F0E0C6',
        'navbar': '#280847',
        'title' : '#D35C18',

      },
      colors: {
        'navbar': '#280847',
        'navbar-button' : '#DB7B1B',
        'navbar-button-hover' : '#D35C18',
        'body':'#FFFAF1',
        'navbar-link':"#F0E0C6",
        'tab-header': '#F6EAD8'
      },
      backgroundImage: {
        'navbar-texture': "url('/image/background/Navbar Background Image.png')",
        'footer-texture': "url('/image/background/Footer Background Image.png')",
      }
    },
  },
  plugins: [],
};

// tailwind.config.js

