/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bata: "#8B0000",
        muda: "#E57373",
      },
      fontWeight: {
        extrablack: "900", // Custom font weight 900
      },
    },
  },
  plugins: [],
};
