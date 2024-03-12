import styles from './HorizontalScrollerStyles'
import { Box } from '@chakra-ui/react'
import type { FC } from 'react'
import type { HorizontalScrollerProps } from './HorizontalScrollerProps'

// A helper wrapper component to create a min-width box and a horizontal scroll
// when this width is surpassed. A gradient was also provided to a more natural feeling
const HorizontalScroller: FC<HorizontalScrollerProps> = ({ id, sx = {}, children }) => {
  return (
    <Box id={id} sx={{ ...styles.outer, ...sx }}>
      <Box sx={styles.inner}>{children}</Box>
      <Box as='span' sx={styles.gradient} />
    </Box>
  )
}

export default HorizontalScroller
