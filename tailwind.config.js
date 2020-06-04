let colors = {
  // 'transparent': 'transparent',

  // 'black': '#22292f',
  // 'grey-darkest': '#3d4852',
  // 'grey-darker': '#606f7b',
  // 'grey-dark': '#8795a1',
  // 'grey': '#b8c2cc',
  // 'grey-light': '#dae1e7',
  // 'grey-lighter': '#f1f5f8',
  // 'grey-lightest': '#f8fafc',
  // 'white': '#ffffff',

  // 'red-darkest': '#3b0d0c',
  // 'red-darker': '#621b18',
  // 'red-dark': '#cc1f1a',
  // 'red': '#e3342f',
  // 'red-light': '#ef5753',
  // 'red-lighter': '#f9acaa',
  // 'red-lightest': '#fcebea',

  // 'orange-theme': '#ffc266',
  // 'orange-darkest': '#462a16',
  // 'orange-darker': '#613b1f',
  // 'orange-dark': '#de751f',
  // 'orange': '#f6993f',
  // 'orange-light': '#faad63',
  // 'orange-lighter': '#fcd9b6',
  // 'orange-lightest': '#fff5eb',

  // 'yellow-darkest': '#453411',
  // 'yellow-darker': '#684f1d',
  // 'yellow-dark': '#f2d024',
  // 'yellow': '#ffed4a',
  // 'yellow-light': '#fff382',
  // 'yellow-lighter': '#fff9c2',
  // 'yellow-lightest': '#fcfbeb',

  // 'green-darkest': '#0f2f21',
  // 'green-darker': '#1a4731',
  // 'green-dark': '#1f9d55',
  // 'green': '#38c172',
  // 'green-light': '#51d88a',
  // 'green-lighter': '#a2f5bf',
  // 'green-lightest': '#e3fcec',

  // 'teal-darkest': '#0d3331',
  // 'teal-darker': '#20504f',
  // 'teal-dark': '#38a89d',
  // 'teal': '#4dc0b5',
  // 'teal-light': '#64d5ca',
  // 'teal-lighter': '#a0f0ed',
  // 'teal-lightest': '#e8fffe',

  // 'blue-darkest': '#12283a',
  // 'blue-darker': '#1c3d5a',
  // 'blue-dark': '#2779bd',
  // 'blue': '#3490dc',
  // 'blue-light': '#6cb2eb',
  // 'blue-lighter': '#bcdefa',
  // 'blue-lightest': '#eff8ff',

  // 'indigo-darkest': '#191e38',
  // 'indigo-darker': '#2f365f',
  // 'indigo-dark': '#5661b3',
  // 'indigo': '#6574cd',
  // 'indigo-light': '#7886d7',
  // 'indigo-lighter': '#b2b7ff',
  // 'indigo-lightest': '#e6e8ff',

  // 'purple-darkest': '#21183c',
  // 'purple-darker': '#382b5f',
  // 'purple-dark': '#794acf',
  // 'purple': '#9561e2',
  // 'purple-light': '#a779e9',
  // 'purple-lighter': '#d6bbfc',
  // 'purple-lightest': '#f3ebff',

  // 'pink-darkest': '#451225',
  // 'pink-darker': '#6f213f',
  // 'pink-dark': '#eb5286',
  // 'pink': '#f66d9b',
  // 'pink-light': '#fa7ea8',
  // 'pink-lighter': '#ffbbca',
  // 'pink-lightest': '#ffebef',

  'lavander': '#6b4c90', //  'lavander': '#8c53c6',
  'turquoise': 'turquoise',
  'sunset': 'ffc266',
  'yellow': '#fffe0069',
}

module.exports = {
  purge: false,
  theme: {
    extend: {
      // colors: colors,
      screens: {
        'ssm': '450px',
        'sm': '576px',
        'mid': '650px',
        'md': '768px',
        'mmd': '868px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1500px',
        '3xl': '1900px'
      },
      // textColors: colors,
      // backgroundColors: colors,
      height: {
        'auto': 'auto',
        'px': '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '17': '4.5rem',
        '18': '5rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '224': '56rem',
        'full': '100%',
        'screen': '100vh',
      },
      width: {
        'auto': 'auto',
        'px': '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '17': '4.5rem',
        '18': '5rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '224': '56rem',
        'full': '100%',
      },
      margin: {
        'auto': 'auto',
        'px': '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '224': '56rem',
        'full': '100%',
        'screen': '100vh',
      },
      negativeMargin: {
        'px': '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
      },
      padding: {
        'auto': 'auto',
        'px': '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '224': '56rem',
        'full': '100%',
        'screen': '100vh',
      },

    },
  },
  variants: {},
  plugins: [],
}
