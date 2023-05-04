/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mon': ['Poppins', 'sans-serif'],
        'title': ['Libre Baskerville', 'serif']
      }
    },
    plugins: [],
  }
}
