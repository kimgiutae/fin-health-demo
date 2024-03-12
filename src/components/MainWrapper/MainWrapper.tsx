import styles from './MainWrapperStyles'
import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import type { MainWrapperProps } from './MainWrapperProps'

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <Box as='main' sx={styles.wrapper}>
      {children}
    </Box>
  )
}

export default MainWrapper
