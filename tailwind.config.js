/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      f1 : "#31A0FE",
      f2 : "#23856D",
      f3 : "#EC5C2E",
      f4 : "#E1F4FF",
      df1 : "#252B42",
      df2 : "#394264",
      df3 : "#262a2d",
      df4 : "#926bfa",
      df5 : "#002BB7",
      df6 : "#dbdcff",
      df7 : "#7D859F",
      df8 :"#F0F4FF",
      df9 :"#3600af",
      df10 :"#3200cd",
      df11 :"#9178df",
      df12 :"#EEEFFF",
      df13 :"#707eac",
      df14 :"#d1d2d6",
      df15 :"#37477c",
      df16 :"#000f44",
      df17 :"#9da7c9",
      },
      backgroundImage: {
        bg1 : "url('../img/cp-bg.png')",
        bg2 : "url('../img/cp-bg-2.png')",
        dbg1 :"url('../img/bg-dark-header.png')",
        dbg2 :"url('../img/bg-dark-content.png')",
        dbg3 :"url('../img/2024020118035465965Q10145.jpg')",
        bg3 : "url('../img/slide-bg.png')",
        bg4 : "url('../img/footer-bg.jpg')"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}

