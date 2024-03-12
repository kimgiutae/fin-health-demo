import styles from './ChartStyles'
import { AspectRatio, Box, Skeleton } from '@chakra-ui/react'
import type { FC } from 'react'

const ChartSkeleton: FC = () => {
  return (
    <Skeleton sx={styles.scroller}>
      <AspectRatio sx={styles.wrapper} ratio={16 / 8}>
        <Box width={1178} height={598} />
      </AspectRatio>
    </Skeleton>
  )
}

export default ChartSkeleton
