/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        overdark: "#111212",
        "light-level-1": "#fefefe",
        grass: "#98cc4c",
        secondary: "#7db928",
        "secondary-800": "#181a2a",
        primary: "#164369",
        "primary-25": "rgba(22, 67, 105, 0.25)",
        green: "#127045",
        mediumslateblue: "rgba(75, 107, 251, 0.05)",
        steelblue: {
          "100": "#174269",
          "200": "rgba(23, 66, 105, 0.25)",
        },
        "dark-blue": "#061e42",
        "prim-light": "#3e6392",
        greyblue: "#6c7275",
        aliceblue: "#eef8fd",
        yellowgreen: {
          "100": "rgba(125, 185, 40, 0.5)",
          "200": "rgba(125, 185, 40, 0.25)",
        },
        "secondary-400": "#97989f",
      },
      spacing: {},
      fontFamily: {
        "healine-6": "Inter",
        oswald: "Oswald",
        title5: "Ubuntu",
        "body-b4-medium": "'Work Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "3xl-8": "22.8px",
        "7xl-6": "26.6px",
        "7xs-7": "5.7px",
        "base-2": "15.2px",
        "31xl": "50px",
        lg: "18px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      "xs-4": "11.4px",
      "base-2": "15.2px",
      "3xl-8": "22.8px",
      "sm-3": "13.3px",
      "23xl": "42px",
      lg: "18px",
      "5xl": "24px",
      "2xl": "21px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
