const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}', './mock/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '240px',
      sm: '360px',
      md: '640px',
      lg: '744px',
      xl: '1440px',
      xxl: '1920px',
    },
    fontFamily: {
      'roboto-mono': ['Roboto Mono'],
      'roboto-flex': ['Roboto Flex'],
    },
    colors: {
      // colors
      red: '#FF444E',
      green: '#4EC785',
      yellow: '#FBEA4F',

      // shades
      s1: '#0D0D0DB2', // p4/[.7]
      s2: '#0D0D0D99', // p4/[.6]
      s3: '#0D0D0D0D', // p4/[.05]
      s4: '#FFFFFF99', // p1/[.6]

      //system
      sRed: '#FF3B3B',
      sGreen: '#3BAB31',

      //warning button
      w1: '#48231E',
      w2: '#FA725F',

      // colors neutral
      n1: '#FFFFFF',
      n2: '#FCFCF9',
      n3: '#F7F7F0',
      n4: '#E7E7E1',
      n5: '#7F8596',
      n6: '#494E5B',
      n7: '#2A2A2A',
      n8: '#1C1C1C',
      n9: '#0D0D0D',

      p1: '#FFFFFF',
      p2: '#F8F8F8',
      p3: '#F1F1F1',
      p4: '#0D0D0D',
    },
    extend: {
      fontFamily: {
        'roboto-mono': ['var(--roboto-mono)'],
        'roboto-flex': ['var(--roboto-flex)'],
      },
      size: {
        4.5: '18px',
      },
      height: {
        4.5: '18px',
      },
      width: {
        4.5: '18px',
      },
      margin: {
        4.5: '18px',
        15.5: '62px',
      },
      fontSize: {
        clamp: 'clamp(1rem, 5vw, 3rem)',
      },
      backgroundImage: {
        'custom-gradient':
            'linear-gradient(153deg, rgba(0, 0, 0, 0.00) 18.4%, rgba(0, 0, 0, 0.07) 29.04%, rgba(0, 0, 0, 0.00) 49.17%)',
      },
    },
  },
};

export default config;
