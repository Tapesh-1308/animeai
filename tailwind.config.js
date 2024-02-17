/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#242525",
        secondary: "#4e5151",
      },
      textColor: {
        primary: "#C8C5BE",
        secondary: "#cfc9bf",
        darker: "#b7b0a4",
        dark: "#242525",
      }
    },
  },
  plugins: [],
}