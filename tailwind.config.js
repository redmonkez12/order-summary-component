/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#382AE1",
        secondary: "#E0E8FF",
        dark: "#1F2E55",
        grey: "#717FA6",
        greyDark: "#DFE6FB",
        light: "#F7F9FF",
        hoverBlue: "#1F2E55",
      },
      fontFamily: {
        redHat: ["Red Hat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
