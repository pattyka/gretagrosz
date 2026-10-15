/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ['./index.html', './src/**/*.{js,jsx}'] },
  theme: {
    extend: {
      fontFamily: { body: ['Inter', '-apple-system', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
