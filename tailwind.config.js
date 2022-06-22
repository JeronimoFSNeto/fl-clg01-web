const brandColors = {
        birdBlue: '#1D9BF0',
        platium: '#E7E9EA',
        silver: '#71767B',
        onix: '#333639',
        richBlack: '#15202B'
}        

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        ...brandColors,
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platium
      }
    }, 
  },
  plugins: [],
}
