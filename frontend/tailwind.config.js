/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#CBD736',
        'brow-border': '#606060',
        'gray-placeholder': '#9F9F9F',
      },
    },
  },
  plugins: [],
};
