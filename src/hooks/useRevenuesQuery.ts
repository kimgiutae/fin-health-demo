import delay from 'utils/delay'
import revenues from 'mocks/revenues'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'

const useRevenuesQuery: UseRevenuesQuery = (_companyId) => {
  const query = useQuery('revenues', async () => {
    await delay(1100)
    return revenues
  })
  return query
}

type UseRevenuesQuery = (companyId: number) => UseQueryResult<number[], unknown>

export default useRevenuesQuery
export type { UseRevenuesQuery }
