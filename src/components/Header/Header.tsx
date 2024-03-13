import styles from './HeaderStyles'
import HeaderDesc from './HeaderDesc'
import { Suspense } from 'react'
import HeaderDescSkeleton from 'components/Header/HeaderDescSkeleton'
import { Avatar, Box, Button, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import type { HeaderProps } from './HeaderProps'

// One of the main UI sections of the app. Just basic info
// of the App title and some actions.
const Header: FC<HeaderProps> = () => {
  return (
    <Box as='header' id='header' sx={styles.wrapper}>
      <Box sx={styles.buttonWrapper}>
        <Button sx={styles.button} size={{ base: 'xs', sm: 'sm' }}>
          Logout
        </Button>
        <Avatar sx={styles.avatar} name='BAGS' src='#' size={{ base: 'sm', md: 'md' }} />
      </Box>
      <Box sx={styles.textWrapper}>
        <Heading id='header-title' sx={styles.heading}>
          Fin-Health-Demo:
        </Heading>
        <Suspense fallback={<HeaderDescSkeleton />}>
          <HeaderDesc />
        </Suspense>
      </Box>
    </Box>
  )
}

export default Header
export type { HeaderProps }
