import { extendTheme } from '@chakra-ui/react'
import type { SxStyles } from 'types/SxStyles'
import type { ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const styles: { global: SxStyles } = {
  global: {
    html: {
      h: {
        md: '100%'
      },
      letterSpacing: 'wide',
      scrollBehavior: 'smooth'
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

const theme = extendTheme({
  styles,
  config
})

export default theme
