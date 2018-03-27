import Typography from 'typography';

const typography = new Typography({
  title: 'Design System',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700', '400'],
    },
  ],
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
    p: {
      marginTop: '.5rem',
      marginBottom: '1rem',
    },
    h2: {
      marginTop: '3rem',
      marginBottom: '1rem',
      color: '#48ba6f',
    },
  }),
});

export default typography;
