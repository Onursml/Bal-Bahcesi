/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'anarenk':'#f2cb00',
      'anarenk2':'#ffffff',
      'ararenk':'#575af7',
      'ararenk2':'#25781e',
      'ararenk3':'#b52626',



    },
    fontFamily:{
      'fonta':['Pacifico', 'cursive'],
      'fontb':['Dela Gothic One', 'cursive'],
      'fontc':['Acme',' sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
