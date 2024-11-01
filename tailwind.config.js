module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Customize primary color
        secondary: "#ffffff", // Customize secondary color
      },
      fontFamily: {
        custom: ["'Roboto Slab'", "serif"], // Customize font
      },
    },
  },
  plugins: [],
};
