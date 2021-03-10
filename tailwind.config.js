module.exports = {
  content: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Baumans, cursive',
      'serif': 'Quicksand, sans-serif',
    },
    extend: {
      backgroundImage: theme => ({
        'plannet-log': "url(/img/plannetlog_bg.jpg)",
        'plannet-welcome': "url(/img/welcome-section.jpg)",
        'plannet-login-mob': "url(/img/bg-login-mobile.png)"
      }),
      colors: {
        'plannet-green': '#3cb573',
        'plannet-green-dark': '#309778',
        'plannet-purple': '#52053e',
        'plannet-purple-dark': '#1e0335',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
