import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import ThemeProvider from 'components/ThemeProvider'
import QueryProvider from 'components/QueryProvider'
import { MainWrapper } from 'components/MainWrapper'
import { ChartProvider } from 'components/ChartProvider'
import { ChartSkeleton } from 'components/Chart'
import { lazy, Suspense } from 'react'
import { ContentWrapper } from 'components/ContentWrapper'
import { Table, TableSkeleton } from 'components/Table'
import { Summary, SummarySkeleton } from 'components/Summary'
import type { FC } from 'react'

const App: FC = () => {
  // PERF: delay expensive script load
  const ChartLazy = lazy(() => import('components/Chart'))
  return (
    <ThemeProvider>
      <QueryProvider>
        <Header />
        <MainWrapper>
          <ChartProvider>
            <Sidebar />
            <ContentWrapper>
              <Suspense fallback={<SummarySkeleton />}>
                <Summary />
              </Suspense>
              <Suspense fallback={<ChartSkeleton />}>
                <ChartLazy />
              </Suspense>
              <Suspense fallback={<TableSkeleton />}>
                <Table />
              </Suspense>
            </ContentWrapper>
          </ChartProvider>
        </MainWrapper>
      </QueryProvider>
    </ThemeProvider>
  )
}

export default App
