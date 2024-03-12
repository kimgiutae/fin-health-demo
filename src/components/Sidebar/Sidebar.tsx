import styles from './SidebarStyles'
import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import SidebarCompany from 'components/Sidebar/SidebarCompany'
import SidebarSettings from 'components/Sidebar/SidebarSettings'
import SidebarSectionSkeleton from 'components/Sidebar/SidebarSectionSkeleton'
import type { FC } from 'react'
import type { SidebarProps } from './SidebarProps'

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Box as='nav' sx={styles.wrapper}>
      <Suspense fallback={<SidebarSectionSkeleton />}>
        <SidebarCompany />
      </Suspense>
      <Suspense>
        <SidebarSettings />
      </Suspense>
    </Box>
  )
}

export default Sidebar
