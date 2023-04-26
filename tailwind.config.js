/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-inicio': "url('../../public/fondo.jpg')",
        'sobre': "url('../../public/webDeveloper.png')",
      },

      fontFamily: {
        'oswald': "'Oswald', 'sans-serif'",
        'karla': "'Karla', 'sans-serif'",
      }
    },
  },
  plugins: [],
}

