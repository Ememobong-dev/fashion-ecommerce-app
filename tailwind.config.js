const { COLORS } = require("./constants/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./screens/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        libre: ["LibreCaslonText_400Regular"],
        libreBold: ["LibreCaslonText_700Bold"],
        libreItalic: ["LibreCaslonText_400Regular_Italic"],
      },
    },
  },
  plugins: [],
}