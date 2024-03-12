import { Skeleton, SkeletonText } from '@chakra-ui/react'
import type { FC } from 'react'

const SidebarSectionSkeleton: FC = () => {
  return (
    <>
      <Skeleton mb='1rem' height='30px' />
      <SkeletonText noOfLines={6} mb='1.5rem' />
    </>
  )
}

export default SidebarSectionSkeleton
