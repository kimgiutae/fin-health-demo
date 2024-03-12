import styles from './HorizontalScrollerStyles'
import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import type { HorizontalScrollerProps } from './HorizontalScrollerProps'

const HorizontalScroller: FC<HorizontalScrollerProps> = ({ id, sx = {}, children }) => {
  return (
    <Box id={id} sx={{ ...styles.outer, ...sx }}>
      <Box sx={styles.inner}>{children}</Box>
      <Box as='span' sx={styles.gradient} />
    </Box>
  )
}

export default HorizontalScroller
