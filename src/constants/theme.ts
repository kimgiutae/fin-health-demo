import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        h: {
          md: '100%'
        },
        letterSpacing: 'wide',
        'scroll-behavior': 'smooth'
      },
      body: {
        h: {
          md: '100%'
        },
        pt: {
          md: '68px',
          xl: '75px'
        },
        pos: 'relative',
        minW: '320px'
      },
      '#root': {
        h: {
          md: '100%'
        }
      }
    }
  }
})

export default theme
