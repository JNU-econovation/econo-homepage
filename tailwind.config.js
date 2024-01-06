/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        "infinity-scroll": "infinity-scroll 6s linear infinite",
        "-infinity-scroll": "-infinity-scroll 6s linear infinite",
      },
      keyframes: {
        "infinity-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "-infinity-scroll": {
          "100%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
};
