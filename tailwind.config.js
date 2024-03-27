/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#1e1e1e"
      }
    },
  },
  plugins: [require("daisyui")],
}

