/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    }
  }
};



// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%, 100%': { 'background-position': '0% 50%' },
//           '50%': { 'background-position': '100% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 15s ease infinite',
//       },
//     },
//   },
// };