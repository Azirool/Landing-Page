module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(216, 100%, 4%)',
        darkBlue1: 'hsl(218, 28% 13%)',
        darkBlue2: 'hsl(216, 53% 9%)',
        darkBlue3: 'hsl(219, 30% 18%)',
        accentYellow: 'hsl(50, 100%, 56%)',
        lightYellow: 'hsl(46, 100%, 40%)'
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode' : "url('../images/logo-dark-mode.svg')",
        'logo-light-mode' : "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode' : "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode' : "url('../images/bg-curvy-light-mode.svg')",
        'access-dark-mode' : "url('../images/folder-svgrepo-com.svg')",
      })
    },
  },
  variants : {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}
