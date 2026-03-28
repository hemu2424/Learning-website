/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {keyframes: {
  marquee: {
    from: { transform: 'translateX(0)' },
    to:   { transform: 'translateX(-100%)' },
  },
},
animation: {
  marquee: 'marquee 30s linear infinite',
},
  },
},
  plugins: [
    require('tailwind-scrollbar'), // <-- add this
  ],

}

