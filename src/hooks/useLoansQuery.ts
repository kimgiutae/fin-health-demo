import delay from 'utils/delay'
import loans from 'mocks/loans'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useLoansQuery: UseLoansQuery = (_companyId) => {
  const query = useSuspenseQuery({
    queryKey: ['loans'],
    queryFn: async () => {
      await delay(1300)
      return loans
    }
  })
  return query
}

type UseLoansQuery = (companyId: number) => UseSuspenseQueryResult<number[], Error>

export default useLoansQuery
export type { UseLoansQuery }
