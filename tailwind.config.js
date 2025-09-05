/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 0.6s linear infinite', // 회전 애니메이션을 4초마다 한 번씩 무한 반복
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        '48': '0 4px 8px rgba(0, 0, 0, 0.1)',
        '0224': '0 0px 2px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.5)'
      }
    },
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
  },
  plugins: [],
}

