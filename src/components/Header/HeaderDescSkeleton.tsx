import styles from './HeaderStyles'
import { Skeleton, Text } from '@chakra-ui/react'
import type { FC } from 'react'

const HeaderDescSkeleton: FC = () => {
  return (
    <Skeleton>
      <Text sx={styles.text}>Financial Health Data Visualization</Text>
    </Skeleton>
  )
}

export default HeaderDescSkeleton
