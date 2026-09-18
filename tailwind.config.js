import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 35px rgba(91, 33, 182, 0.08)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
}
