import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ['Cute Font']
      },
      colors: {
        sidebar: "#0F6948",
        logo1: "#427658",
        logo2: "#1E3561",
        buttons: "#1E3561"
      }
    },
  },
  plugins: [],
};
export default config;
