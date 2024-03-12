import styles from './ChartStyles'
import { AspectRatio, Skeleton } from '@chakra-ui/react'
import type { FC } from 'react'

const ChartSkeleton: FC = () => {
  return (
    <Skeleton sx={styles.scroller}>
      <AspectRatio maxW='600px' ratio={16 / 9}>
        <div />
      </AspectRatio>
    </Skeleton>
  )
}

export default ChartSkeleton
