import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'
import ThemeProvider from 'components/ThemeProvider'
import QueryProvider from 'components/QueryProvider'
import { MainWrapper } from 'components/MainWrapper'
import { ChartProvider } from 'components/ChartProvider'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Header />
        <MainWrapper>
          <ChartProvider>
            <Sidebar />
            <Content />
          </ChartProvider>
        </MainWrapper>
      </QueryProvider>
    </ThemeProvider>
  )
}

export default App
