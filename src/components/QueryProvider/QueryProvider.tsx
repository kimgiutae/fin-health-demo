import { QueryClient, QueryClientProvider } from 'react-query'
import type { FC } from 'react'
import type { QueryProviderProps } from './QueryProviderProps'

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

export default QueryProvider
export type { QueryProviderProps }
