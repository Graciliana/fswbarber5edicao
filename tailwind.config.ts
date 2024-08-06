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
    },
  },
  colors: {
    'dark-purple': '#221C3D',
    'primary-purple': '#8162FF',
    'background-black': '#141518',
    'secondary-black': '#1A1B1F',
    'gray-01': '#26272B',
    'gray-02': '#4E525B',
    'gray-03': '#838896',
    'white': '#FFFFFF',
    'red':'#EF4444',
    'dark-red':'#2F1F1F',
  },
  fontFamily: {
    nunito: ['Nunito', 'sans-serif'],
  },
  
  plugins: [],
};
export default config;
