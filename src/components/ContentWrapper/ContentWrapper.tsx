import styles from './ContentWrapperStyles'
import { Box } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>
}

type ContentWrapperProps = {
  children: ReactNode
}

export default ContentWrapper
