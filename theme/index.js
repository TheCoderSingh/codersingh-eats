import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    dark: {
      navbarHeading: '#333'
    },
    light: {
      navbarHeading: '#eee'
    }
  }
});

export default theme;
