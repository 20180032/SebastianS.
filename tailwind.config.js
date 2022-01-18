const {tabWidth} = require("tailwindcss/prettier.config");
module.exports = {
  content: [
      './*.html'
  ],
  theme: {
    container:{
      padding: '1.4rem'
    },
    extend: {
      fontFamily:{
        'sans':"'Rota','sans-serif'",
      },
      width:{
        '88':'22rem'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
