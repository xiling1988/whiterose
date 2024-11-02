/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultConfig'

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        canvas: "url('/canvas.jpg')", // Update the path to your image
      },
      colors: {
        nexusBlue: '#0b4498',
        nexusRed: '#a91cda',
      },
      fontFamily: {
        // poppins: ['var(--font-poppins)'],
        austen: ['Austen Regular', 'sans-serif'],
        nexa: ['Nexa Light', 'sans-serif'],
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'scale(1.3) translateX(-10%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'scale(1.3) translateX(10%)' },
        },
      },
      animation: {
        'zoom-in': 'zoomIn 10s ease-in-out infinite',
        'move-left': 'moveLeft 7s ease-in-out infinite',
        'move-right': 'moveRight 10s ease-in-out infinite',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
