/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     keyframes: {
  marquee: {
    "0%": { transform: "translate3d(0,0,0)" },
    "100%": { transform: "translate3d(-50%,0,0)" }, // 👈 important
  },
},
animation: {
  marquee: "marquee 30s linear infinite",
},
    },
  },
  plugins: [
    
    require('@tailwindcss/line-clamp'),
  ],
}