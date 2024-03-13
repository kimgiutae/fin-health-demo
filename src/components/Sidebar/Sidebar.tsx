import styles from './SidebarStyles'
import { Box } from '@chakra-ui/react'
import SidebarMore from './SidebarMore'
import { Suspense } from 'react'
import SidebarCompany from './SidebarCompany'
import SidebarSettings from './SidebarSettings'
import SidebarMoreError from './SidebarMoreError'
import { ErrorBoundary } from 'react-error-boundary'
import SidebarSectionSkeleton from './SidebarSectionSkeleton'
import type { FC } from 'react'
import type { SidebarProps } from './SidebarProps'

// One of the main UI sections of the app. Here relies important
// comps like <SidebarCompany> for general current user/business details,
// and  <SidebarSettings> for user actions to customize the <Chart> by
// context hooks. All surrounded by <Suspense> and fallbacks to
// skeletons for better UX.
const Sidebar: FC<SidebarProps> = () => {
  return (
    <Box as='nav' id='sidebar' sx={styles.wrapper}>
      <Suspense fallback={<SidebarSectionSkeleton />}>
        <SidebarCompany />
      </Suspense>
      <Suspense fallback={<SidebarSectionSkeleton />}>
        <SidebarSettings />
      </Suspense>
      <SidebarMore />
    </Box>
  )
}

export default Sidebar
