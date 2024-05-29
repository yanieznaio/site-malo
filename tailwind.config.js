/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
        ogg: ["Ogg", 'serif'],
        mori: ["mori", 'sans-serif']
      },
      colors: {
        'argile': '#BD8149',
        'dark-brown': '#3E362E',
        'light-brown': '#AB8867',
        'light-beige': '#F4E4CB',
        'dark-beige': '#DAC9AD',
        'black': '#3E362E',
        'white': '#EAE7DD',
        'lightgrey': '#DAD1C3',
        'kaki': '#6C645A',
        'greybeige': '#E7DECF'

      },



    },
  },
  plugins: [],
}
