/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "blue-700": "#274C5B",
      "blue-80": "#525C60",
      "yellow-300": "#EFD372",
      "gray-200": "#D4D4D4",
      "white-50": "#F9F8F8",
      "green-300": "#7EB693",
      "green-50": "#EFF6F1",
      white: "#FFFFFF",
    },
    fontFamily: {
      Roboto: "Roboto, sans-serif",
      "Open-Sans": "Open Sans, sans-serif",
      Yellowtail: "Yellowtail, cursive",
    },
    fontSize: {
      "7xl": "70px",
      "5xl": "50px",
      "4xl": "40px",
      "3.8xl": "38px",
      "3.5xl": "35px",
      "3xl": "30px",
      "2.5xl": "25px",
      "2xl": "20px",
      md: "18px",
    },
    screens: {
      lg1690: {
        max: "1690px",
      },
      lg1550: {
        max: "1550px",
      },
      lg1435: {
        max: "1435px",
      },
      lg1400: {
        max: "1400px",
      },
      lg1300: {
        max: "1300px",
      },
      lg1200: {
        max: "1200px",
      },
      lg1060: {
        max: "1060px",
      },

      lg950: {
        max: "950px",
      },
      lg912: {
        max: "912px",
      },
      lg877: {
        max: "877px",
      },
      md787: {
        max: "787px",
      },
      md677: {
        max: "677px",
      },

      md550: {
        max: "550px",
      },
      sm520: {
        max: "520px",
      },
      sm472: {
        max: "472px",
      },
      sm450: {
        max: "450px",
      },
      sm385: {
        max: "385px",
      },
      sm320: {
        max: "320px",
      },
      mdMin787: "787px",
    },
  },
  plugins: [],

};
