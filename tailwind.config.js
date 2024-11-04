/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-bg1": "url('/src/assets/AboutBanner1.png')",
        "about-bg2": "url('/src/assets/aboutbanner2.png')",
        "about-bg3": "url('/src/assets/user-love.jpg')",
      },
    },
  },
  plugins: [],
};
