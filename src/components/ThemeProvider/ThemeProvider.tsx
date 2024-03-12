import theme from 'constants/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { FC } from 'react'
import type { ThemeProviderProps } from './ThemeProviderProps'

// Provider that setup the context and the hooks to customize
// ChakraUI components and defaults.
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeProvider
