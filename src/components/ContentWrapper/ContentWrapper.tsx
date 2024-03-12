import styles from './ContentWrapperStyles'
import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import type { ContentWrapperProps } from './ContentWrapperProps'

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>
}

export default ContentWrapper
