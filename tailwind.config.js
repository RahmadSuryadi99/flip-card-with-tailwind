/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const Myclass = plugin(function ({addUtilities}) {
  addUtilities({
    ".my-rotate-y-180":{
      color: "#000",
      transform: "rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d",
    },
    ".perspective":{
      perspective: "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility: 'hidden',
    }
  })
})
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
      }
    },
  },
  plugins: [Myclass],
}
