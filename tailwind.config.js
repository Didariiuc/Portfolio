/** @type {import('tailwindcss').Config} */
export default {
  darkMode: '#0F0F1A',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}
