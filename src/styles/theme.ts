import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "100": "#FFBA08",
      "50": "#FFE299",
    },
    gray: {
      "900": "#000000",
      "700": "#47585B",      
      "500": "#f2f2f2",

      "100": "#DADADA",
      "50": "#F5F8FA", //heading and Text
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})