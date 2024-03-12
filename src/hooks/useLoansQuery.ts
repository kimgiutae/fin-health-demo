import delay from 'utils/delay'
import loans from 'mocks/loans'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'

const useLoansQuery: UseLoansQuery = (_companyId) => {
  const query = useQuery('loans', async () => {
    await delay(1000)
    return loans
  })
  return query
}

type UseLoansQuery = (companyId: number) => UseQueryResult<number[], unknown>

export default useLoansQuery
export type { UseLoansQuery }
