/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'background_login': "url('/public/assets/login.jpg')"
        
      }

    },
  },
  plugins: [],
}

