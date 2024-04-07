import { shadcnPlugin } from "./lib/shadcn-plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  plugins: [shadcnPlugin],
  theme: {
    colors: {
      'primary-color': '#F1AB40',
      'primary-color-dark': '#192534',
      'secondary-color': '#FEEED4'
    }
  }
};

export default config;