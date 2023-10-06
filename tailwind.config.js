/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'mainBox': '9px 9px 27px #b6a6ad,-9px -9px 27px #fffaff',
        'input-shadow': 'inset 5px 5px 7px #d9d8e8,inset -5px -5px 7px #f5f4ff'
      }
    },
  },
  plugins: [],
}