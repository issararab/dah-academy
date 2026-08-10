import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#060c1a",
          deep: "#030710",
          mid: "#0a1020",
        },
        cyan: "#00d4ff",
        blue: "#1a6cff",
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s 2s ease-in-out infinite",
        "float-avatar": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
