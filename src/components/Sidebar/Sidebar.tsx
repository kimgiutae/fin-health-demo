import styles from './SidebarStyles'
import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import SidebarCompany from 'components/Sidebar/SidebarCompany'
import SidebarSettings from 'components/Sidebar/SidebarSettings'
import SidebarSectionSkeleton from 'components/Sidebar/SidebarSectionSkeleton'
import type { FC } from 'react'
import type { SidebarProps } from './SidebarProps'

// One of the main UI sections of the app. Here relies important
// comps like <SidebarCompany> for general current user/business details,
// and  <SidebarSettings> for user actions to customize the <Chart> by
// context hooks. All surrounded by <Suspense> and fallbacks to
// skeletons for better UX.
const Sidebar: FC<SidebarProps> = () => {
  return (
    <Box as='nav' sx={styles.wrapper}>
      <Suspense fallback={<SidebarSectionSkeleton />}>
        <SidebarCompany />
      </Suspense>
      <Suspense fallback={<SidebarSectionSkeleton />}>
        <SidebarSettings />
      </Suspense>
    </Box>
  )
}

export default Sidebar
