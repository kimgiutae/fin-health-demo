import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC } from 'react'
import type { QueryProviderProps } from './QueryProviderProps'

// Provider that setup the context and the hooks to interact with
// React-Query queries and mutations (GET and POST requests).
const client = new QueryClient()
const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
export type { QueryProviderProps }
