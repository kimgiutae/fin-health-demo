import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'

const useErrorQuery: UseErrorQuery = () => {
  const query = useQuery({
    queryKey: ['error'],
    queryFn: async () => {
      return new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Failed to fetch data'))
        }, 1000)
      })
    }
  })
  return query
}

type UseErrorQuery = () => UseQueryResult<unknown, Error>

export default useErrorQuery
export type { UseErrorQuery }
