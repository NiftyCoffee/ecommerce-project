import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: '#fff1e9',
        dark: '#171827',
        light_accent: '#d0ccc7',
        dark_accent: '#2f3040',
        light_secondary: '#6e6764',
        dark_secondary:'#b0b0d9',
      },
      fontFamily: {
        'standard': ['LibreBaskerville', 'serif'],
        'bold': ['LibreBaskerville_Bold', 'serif'],
        'italic': ['LibreBaskerville_Italic', 'serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
