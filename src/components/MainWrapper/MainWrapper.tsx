import { Box } from '@chakra-ui/react'
import styles from './MainWrapperStyles'
import type { FC, ReactNode } from 'react'

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <Box as='main' sx={styles.wrapper}>
      {children}
    </Box>
  )
}

type MainWrapperProps = {
  children: ReactNode
}

export default MainWrapper
