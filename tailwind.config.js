/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c36",
      },
      backgroundImage: {
        'bg-image_1': "url('/assets/pexels-igor-starkov-233202-1307698.jpg')",
        'bg-image_2': "url('/assets/pexels-pixabay-260922.jpg')",
        'bg-mobile-image_1': "url('/assets/pexels-valeriya-827528.jpg')",
        'bg-mobile-image_2': "url('/assets/pexels-vardarious-3887985.jpg')",
      },
      keyframes: {
        liftOverlay: {
          '0%': { transform: 'translateY(100%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
      },
      animation: {
        liftOverlay: 'liftOverlay 0.5s ease forwards',
      }
    },
  },
  plugins: [],
}