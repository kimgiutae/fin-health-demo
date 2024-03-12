import delay from 'utils/delay'
import revenues from 'mocks/revenues'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useRevenuesQuery: UseRevenuesQuery = (_companyId) => {
  const query = useSuspenseQuery({
    queryKey: ['revenues'],
    queryFn: async () => {
      await delay(1300)
      return revenues
    }
  })
  return query
}

type UseRevenuesQuery = (companyId: number) => UseSuspenseQueryResult<number[], Error>

export default useRevenuesQuery
export type { UseRevenuesQuery }
