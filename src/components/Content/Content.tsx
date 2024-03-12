import styles from './ContentStyles'
import { Box } from '@chakra-ui/react'
import { ChartSkeleton } from 'components/Chart'
import { lazy, Suspense } from 'react'
import { Summary, SummarySkeleton } from 'components/Summary'
import { MoreInfo, MoreInfoSkeleton } from 'components/MoreInfo'
import type { FC } from 'react'
import type { ContentProps } from './ContentProps'

const ContentWrapper: FC<ContentProps> = () => {
  // PERF: delay expensive script load
  const ChartLazy = lazy(() => import('components/Chart'))
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<SummarySkeleton />}>
        <Summary />
      </Suspense>
      <Suspense fallback={<ChartSkeleton />}>
        <ChartLazy />
      </Suspense>
      <Suspense fallback={<MoreInfoSkeleton />}>
        <MoreInfo />
      </Suspense>
    </Box>
  )
}

export default ContentWrapper
