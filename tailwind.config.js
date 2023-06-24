/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{},
    screens: {
      //  'lg':{'max': '1024px'} ,
       'md': {'max' : '1024px'},
       'sm': {'max':'640px'},
    },
  },
  plugins: [],
}

