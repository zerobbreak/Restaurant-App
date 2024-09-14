/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // For general text
        serif: ['Playfair Display', 'serif'], // For headings and categories
      },
      colors: {
        primary: "#1c1c36",
        secondary: '#f5f5f5',
        maroon: {
          900: '#800000',
          800: '#990000',
        },
        navy: {
          900: '#001f3f',
          800: '#002b54',
        },
        charcoal: {
          900: '#36454f',
          800: '#4e5d63',
        },
        mustard: {
          900: '#ffdb58',
          800: '#e6c150',
        },
        green: {
          900: '#006400',
          800: '#008000',
        },
        lightbrown: {
          900: '#a0522d',
          800: '#8b4513',
        },
        lightgrey: {
          900: '#d3d3d3',
          800: '#c0c0c0',
        },
        militarygreen: {
          900: '#4b5320',
          800: '#6c7041',
        },
      },
      backgroundImage: {
        'hero-img': "url('/assets/hero-img.jpg')",
        'bg-image_1': "url('/assets/pexels-igor-starkov-233202-1307698.jpg')",
        'bg-image_2': "url('/assets/pexels-pixabay-260922.jpg')",
        'bg-mobile-image_1': "url('/assets/pexels-valeriya-827528.jpg')",
        'bg-mobile-image_2': "url('/assets/pexels-vardarious-3887985.jpg')",
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)', // Add custom shadow depths
      },
      spacing: {
        '128': '32rem', // Add custom spacing if needed
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