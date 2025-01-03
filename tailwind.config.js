/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      //black: "#1b1b1b",
      purple: "#A683F1",
      purplePrimary: "#5E3BEE",
      red: "#FE8282",
      blue: "#518cff",
      primary: {
        600: "#5E3BEE",
        100: "#DFD8FC",
      },
      secondary: {
        600: "#58C2A2",
        100: "#F0FEFA",
      },
      neutral: {
        900: "#111827",
        800: "#1F2937",
        700: "#374151",
        600: "#4B5563",
        500: "#6B7280",
        400: "#9CA3AF",
        300: "#D1D5DB",
        200: "#E5E7EB",
        100: "#F3F4F6",
        50: "#F9FAFB",
      },
      darkPrimary: {
        600: "#222A36",
        // 100: "#DFD8FC",
      }
    },

    fontSize: {
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "90px",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "60px",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "45px",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-xl": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-lg": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "20px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "16px",
        },
      ],
    },

    extend: {
      zIndex: {
        'fixed': '9999'
      },
      keyframes: {
        float: {
          '0%, 100%' : { translate: '0px 0px' },
          '50%': { translate: '0px 12px' },
        },
        rotate: {
          '0%' : { rotate: '0deg' },
          '100%': { rotate: '360deg' },
        }
      },
      animation:{
        float: 'float 3s ease infinite',
        rotate: 'rotate 30s linear infinite'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #518cff 0%, #A683F1 51%, #FE8282 100%)',
      },
      backgroundSize: {
        '200-auto': '200% auto', // Define the custom size
      },
      colors: {
        'darkPrimary': "#222A36",
      },
      
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      'display': ['Poppins'],
      'body': ['Poppins']
    },
  },
  darkMode: 'class',
  plugins: [
    require("flowbite/plugin")
  ],
}
