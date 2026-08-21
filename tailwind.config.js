/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070d19', // Deepest abyss midnight
          900: '#0b132b', // Primary requested background
          800: '#111e42', // Card elevated surface
          700: '#172754', // Hover card surface
          border: '#1c2d5a', // Subtle boundary border
          line: '#132148',
        },
        slateText: {
          primary: '#f8fafc',   // Crisp clean slate white
          secondary: '#cbd5e1', // Readable body slate
          muted: '#8493a8',     // Subtext & metadata
        },
        accent: {
          light: '#fdba74',
          DEFAULT: '#f97316',   // Balanced vibrant warm orange
          hover: '#ea580c',
          warm: '#fb923c',
          glow: 'rgba(249, 115, 22, 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'midnight-gradient': 'linear-gradient(180deg, #0b132b 0%, #070d19 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(17, 30, 66, 0.6) 0%, rgba(11, 19, 43, 0.8) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
      },
      boxShadow: {
        'accent-sm': '0 0 15px rgba(249, 115, 22, 0.15)',
        'accent-md': '0 0 25px rgba(249, 115, 22, 0.25)',
        'midnight-card': '0 4px 20px -2px rgba(3, 7, 18, 0.5)',
      },
    },
  },
  plugins: [],
};
