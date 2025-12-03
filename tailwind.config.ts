import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          900: '#312e81',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['28px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h3': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['20px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        blob: 'blob 7s infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'border-spin': 'border-spin 3s linear infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'border-spin': {
          to: { '--gradient-angle': '360deg' },
        },
        shimmer: {
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;