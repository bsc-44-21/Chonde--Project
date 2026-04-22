/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#000000', // Central Pure Black
          light: '#38BDF8', // Lake Blue
        },
        status: {
          completed: '#059669', // Emerald Green
          ongoing: '#38BDF8',   // Lake Blue
          delayed: '#DC2626',   // Vibrant Red
          issue: '#000000',     // Central Pure Black
        },
        neutral: {
          bg: '#F9FAFB',
          card: '#FFFFFF',
          border: '#E5E7EB',
          textMain: '#000000', // Pure Black
          textSec: '#000000',  // Pure Black
        }
      }
    },
  },
  plugins: [],
}
