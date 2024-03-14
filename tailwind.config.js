/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tdm: { max: '880px' },
        mdm: { max: '768px' },
        msm: { max: '675px' },
        mbm: { max: '650px' },
        sbm: { max: '640px' },
        xsm: { max: '590px' },
        mtm: { max: '505px' },
        mb: { max: '426px' },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      nmd: '935px',
      nsm: '990px',
      lg: '1024px',
      nlg: '1080px',
      ulg: '1140px',
      nxl: '1210px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
