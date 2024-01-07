/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-bg": "url('/hero.jpg)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#F9FCFB",
        third: "#21BF73",
        secondary: "#B0EACD",
        primary: "#FD5E53",
      },
      fontFamily: {
        custom: ["Mansalva", "sans-serif"],
      },
      boxShadow: {
        nav: "inset 0 -1px 0 0 rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
