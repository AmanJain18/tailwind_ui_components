/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alert-text": "#d4975c",
      },
      screens: {
        'md': '899px'
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
