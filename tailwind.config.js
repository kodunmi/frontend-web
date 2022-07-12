/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        colors: {
          gray_100: "#BDBDBD",
          gray_200: "#C5C4C4",
          black_500: "#B0B7C0",
          black_600: "#818B99",
          black_800: "#363B43",
          error_600: "#E24444",
          error_800: "#E21717",
          primary_500: "#0562C2",
          primary_800: "#054D99",
          success_700: "#71CC52",
          success_800: "#62CC3D",
          warning_700: "#FFB84D",
          secondary_900: "#91A8CA",
          neutral_base: "#F7FCFF",
          neutral_900: "#EBF7FF",
        },
        boxShadow: {
          100: "2.0928px 2.0928px 20.928px rgba(0, 0, 0, 0.1)",
          200: "1px 1px 10px rgba(0, 0, 0, 0.1)",
          300: "1px 1px 20px rgba(0, 0, 0, 0.1)",
        },
        borderWidth: {
          custom: "16px",
        },
    },
  },
  plugins: [],
}
