/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Eine Schrift für die ganze App (sehr ähnlich zu Apples San Francisco)
        display: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        body: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        bubble: {
          pink: '#FF6FA5',
          purple: '#9B6BFF',
          blue: '#4FC3F7',
          yellow: '#FFD166',
          green: '#4CD37E',
          bg: '#F2F2F7',
        },
        denim: {
          light: '#3E7CC9',
          DEFAULT: '#1D5DA6',
          dark: '#0F3E73',
        },
        cornflower: {
          light: '#93B4F2',
          DEFAULT: '#6495ED',
          dark: '#3E62C2',
        },
        powder: {
          light: '#D3ECF5',
          DEFAULT: '#A9D6E8',
          dark: '#6FA8C2',
        },
        carolina: {
          light: '#7FBBE0',
          DEFAULT: '#4B9CD3',
          dark: '#2C6D9E',
        },
        glacier: {
          light: '#B3D3E8',
          DEFAULT: '#80B1D3',
          dark: '#4E7FA3',
        },
        // Farbthema aus den Einstellungen (CSS-Variablen, siehe src/accent.jsx)
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          ink: 'rgb(var(--accent-ink) / <alpha-value>)',
          on: 'rgb(var(--accent-on) / <alpha-value>)',
          dark: 'rgb(var(--accent-ink) / <alpha-value>)',
        },
        page: 'rgb(var(--bg) / <alpha-value>)',
        // Schrift direkt auf dem Seitenhintergrund (wird im roten Testmodus angepasst)
        title: 'rgb(var(--title) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        nav: 'rgb(var(--nav) / <alpha-value>)',
        iceberg: {
          light: '#A3C7E3',
          DEFAULT: '#71A6D2',
          dark: '#4779A6',
        },
      },
      boxShadow: {
        // Weiche, unscharfe Schatten im Apple-Stil
        bubble: '0 6px 24px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)',
        bubbleSm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        blob: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pop: 'pop 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
