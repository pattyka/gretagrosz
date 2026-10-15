/** @type {import('tailwindcss').Config} */
export default {
  content: { relative: true, files: ['./index.html', './src/**/*.{js,jsx}'] },
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        body: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme colours come from CSS variables (src/index.css) so they can flip for dark mode
        ink: 'rgb(var(--ink) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        spark: { light: 'rgb(var(--spark-light) / <alpha-value>)', DEFAULT: '#5B4BDB', dark: '#4636C0' },
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        pop: 'var(--shadow-pop)',
      },
      keyframes: {
        pop: { '0%': { transform: 'scale(1)' }, '40%': { transform: 'scale(1.35)' }, '100%': { transform: 'scale(1)' } },
        rise: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fade: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
      animation: { pop: 'pop 0.35s ease-out', rise: 'rise 0.3s ease-out both', fade: 'fade 0.2s ease-out both' },
    },
  },
  plugins: [],
}
