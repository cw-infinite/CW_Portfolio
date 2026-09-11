/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0b',
        paper: '#fcfcfa',
        line: '#e8e6e1',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(0,0,0,0.15)',
        card: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)'
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-50px,-50px)' },
        }
      }
    }
  },
  plugins: []
}
