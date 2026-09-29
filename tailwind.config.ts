import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#0B0B14",
          surface: "#14141F",
          raised: "#1B1B28",
          line: "#262636"
        },
        mist: {
          DEFAULT: "#EDEDF5",
          dim: "#9A97AD"
        },
        violet: {
          DEFAULT: "#7C5CFF",
          bright: "#9679FF",
          dim: "#5A3FCC"
        },
        cyan: {
          DEFAULT: "#33E6C8",
          dim: "#1FA88F"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      maxWidth: {
        content: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
