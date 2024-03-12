import { QueryClient, QueryClientProvider } from 'react-query'
import type { FC } from 'react'
import type { QueryProviderProps } from './QueryProviderProps'

// Setup new client with options to support suspense
const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

// Provider that setup the context and the hooks to interact with
// React-Query queries and mutations (GET and POST requests).
const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
export type { QueryProviderProps }
