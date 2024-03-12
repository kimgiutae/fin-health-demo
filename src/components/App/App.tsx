import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'
import ThemeProvider from 'components/ThemeProvider'
import QueryProvider from 'components/QueryProvider'
import { MainWrapper } from 'components/MainWrapper'
import { ChartProvider } from 'components/ChartProvider'
import type { FC } from 'react'

// Main entry component. All providers are included here:
// <ThemeProvider> for Chakra UI customization, <QueryProvider> for
// caching HTTP requests by hooks, and custom <ChartProvider> for
// connecting <Content> child components with <Sidebar> actions.
//
// The app is basicly divided in 3 UI parts: <Header>, <Sidebar> and
// <Content>.
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
