import { extendTheme, ChakraTheme } from '@chakra-ui/react';

const customTheme: Partial<ChakraTheme> = {
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      'h1, h2, h3, h4, h5, h6, p': {
        margin: 0,
        padding: 0,
      },
      'body, input, select, textarea, button': {
        fontSize: '1rem',
      },
      'option': {
        backgroundColor: "#387AE7"
      },
      '.apexcharts-toolbar': {
        position: 'absolute',
        right: 'auto',
        left: '10px'
      },
      '.apexcharts-menu': {
        width: 'min-content',
        position: 'absolute',
        right: 'auto',
        left: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      },
      '.apexcharts-menu-item': {
        width: '100%'
      },
      '.css-hdd9l7': {
        width: '100% !important',
        height: '100% !important'
      }
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
};

export const theme = extendTheme(customTheme);