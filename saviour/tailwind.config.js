/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shojumaru': ['Shojumaru', 'system-ui'],
        'poppins': ['Poppins', 'sans-serif'],
        'zcool-kuaile': ['ZCOOL KuaiLe', 'sans-serif'],
      },
      fontSize: {
        'custom-h1': '32px',
      },
      fontWeight: {
        'custom-h1': 400,
      },
      borderRadius: {
        'custom': '20px',
      },
      colors: {
        'pink' : '#ED0137',
        'dark' : '#0a0a0a',
        'orange' : '#DF180A'
      }
    },
    screens: {
      'sm': '640px',   // Target mobile screens
      'md': '768px',   // Target tablet screens
      'lg': '1024px',  // Target laptop screens
      'xl': '1280px',  // Target larger screens
    },
  },
  plugins: [],
}
