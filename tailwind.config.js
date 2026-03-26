/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // We set it to 60s for a smooth, slow crawl. 
        // Lower numbers (like 20s) make it faster.
        'scroll-text': 'scrollText 60s linear infinite',
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
};
