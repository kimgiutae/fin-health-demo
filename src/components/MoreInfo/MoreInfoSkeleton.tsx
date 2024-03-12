import { AspectRatio, Skeleton } from '@chakra-ui/react'
import type { FC } from 'react'

const TabTablesSkeleton: FC = () => {
  return (
    <Skeleton>
      <AspectRatio maxW='600px' ratio={16 / 9}>
        <div />
      </AspectRatio>
    </Skeleton>
  )
}

export default TabTablesSkeleton
