/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        3000: "3000ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
