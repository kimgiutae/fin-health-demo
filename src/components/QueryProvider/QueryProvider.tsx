import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

type QueryProviderProps = {
  children: ReactNode
}

export default QueryProvider
export type { QueryProviderProps }
