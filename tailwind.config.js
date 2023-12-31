/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*"],
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "blue": "#4BA9FF",
        green: {
          50: "#3DBE34",
          100: "#76CA33",
          200: "#7FCC33",
          300: "#88CE33",
          400: "#92D033",
          500: "#9BD232",
          600: "#A5D432",
          700: "#AED632",
          800: "#B7D832",
          900: "#C1DA32",
        },
        yellow: {
          50: "#F0E531",
          100: "#EEC732",
          200: "#EFCE32",
          300: "#EFD531",
          400: "#F0DD31",
          500: "#F0E431",
          600: "#E7E231",
          700: "#DDE031",
          800: "#D4DE31",
          900: "#CADC32",
        },
        orange: {
          50: "#E75835",
          100: "#E97D34",
          200: "#EA8434",
          300: "#EA8C34",
          400: "#EB9333",
          500: "#EB9A33",
          600: "#ECA233",
          700: "#ECA933",
          800: "#EDB032",
          900: "#EDB832",
        },
        pink: {
          50: "#EA519F",
          100: "#EA5294",
          200: "#EA528E",
          300: "#E95289",
          400: "#E95383",
          500: "#E95478",
          600: "#E95472",
          700: "#E9546D",
          800: "#E85567",
          900: "#E85562",
        },
        purple: {
          50: "#BC4FCC",
          100: "#CF50B9",
          200: "#CB50BE ",
          300: "#C850C0 ",
          400: "#BE4FCA ",
          500: "#BC4FCC ",
          600: "#BD4DC4 ",
          700: "#B33FBA ",
          800: "#A72EAE",
          900: "#9D24A4",
        },
        red: {
          50: "#C92033",
          100: "#E03044",
          200: "#D6273A ",
          300: "#C92033 ",
          400: "#B01729 ",
          500: "#A91526 ",
          600: "#A31323 ",
          700: "#970E1E ",
          800: "#8A0A19",
          900: "#7B0412",
        },
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    }
  },
  plugins: [],
}

