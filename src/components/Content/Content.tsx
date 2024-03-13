import styles from './ContentStyles'
import { Box } from '@chakra-ui/react'
import { ChartSkeleton } from 'components/Chart'
import { lazy, Suspense } from 'react'
import { Summary, SummarySkeleton } from 'components/Summary'
import { MoreInfo, MoreInfoSkeleton } from 'components/MoreInfo'
import type { FC } from 'react'
import type { ContentProps } from './ContentProps'

// One of the main UI sections of the app. Here relies important
// comps like <Summary> details, the main <Chart> and the tables
// of <MoreInfo />. All surrounded by <Suspense> and fallbacks to
// skeletons for better UX.
const Content: FC<ContentProps> = () => {
  // PERF: delay expensive script load
  const LazyChart = lazy(() => import('components/Chart'))
  return (
    <Box id='content' sx={styles.wrapper}>
      <Suspense fallback={<SummarySkeleton />}>
        <Summary />
      </Suspense>
      <Suspense fallback={<ChartSkeleton />}>
        <LazyChart />
      </Suspense>
      <Suspense fallback={<MoreInfoSkeleton />}>
        <MoreInfo />
      </Suspense>
    </Box>
  )
}

export default Content
