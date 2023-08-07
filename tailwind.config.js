/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "2.5rem",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Gupter: ["Gupter", "sans-serif"],
      },
      height: {
        "3/5": "60%",
        0.5: "0.15rem",
      },
      colors: {
        "silver-sand": "#C6C6C6",
        "custom-black" : "#333333",
        "pale-blue": "#B1E5F2",
        "Ocean-Blue": "#1E4C92",
        "Electric-Purple": "#F05CF0",
        "Midnight-Plum": "#272635",
        "Dark-Teel": "#00424E",
        "Vibrant-Purple": "#A208D8",
        "Baby-Blue": "#B1E5F2",
        "Ash-Grey": "#767676",
        "Midnight-Blue": "#12233B",
        "Serene-Azure": "#AFE8FB",
        "Light-Cyan": "#83FFF9",
        "Midnight-Navy": "#211f28",
      },
      fontSize: {
        "6xl": "5.375rem",
        "5.5xl": "4.5rem",
      },
      screens: {},
      keyframes: {
        "circle-in-top-right": {
          from: {
            clipPath: "circle(0% at top right)",
          },
          to: {
            clipPath: "circle(250% at top right)",
          },
        },
        "circle-out-top-right": {
          from: {
            clipPath: "circle(125% at top right)",
          },
          to: {
            clipPath: "circle(0% at top right)",
          },
        },
        "in-circle-swoop": {
          from: {
            clipPath: "circle(0% at top right)",
          },
          to: {
            clipPath: "circle(200% at bottom right)",
          },
        },
      },
      animation: {
        "circle-in-top-right":
          "circle-in-top-right 3s cubic-bezier(.25, 1, .30, 1) both",
        "circle-out-top-right":
          "circle-out-top-right 3s cubic-bezier(.25, 1, .30, 1) both ",
        "in-circle-swoop": "in-circle-swoop 500ms linear",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
};
