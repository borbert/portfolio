/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#3B82F6', // A vibrant blue
        secondary: '#10B981', // A fresh green
        accent: '#F59E0B', // A warm orange
        background: '#F3F4F6', // Light gray background
        text: '#1F2937', // Dark gray text
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui : {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  }
}

