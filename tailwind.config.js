/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind");

module.exports = {
  content: ["./App.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [nativewind],
};
