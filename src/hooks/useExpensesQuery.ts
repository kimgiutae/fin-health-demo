import delay from 'utils/delay'
import expenses from 'mocks/expenses'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useExpensesQuery: UseExpensesQuery = (_companyId) => {
  const query = useSuspenseQuery({
    queryKey: ['expenses'],
    queryFn: async () => {
      await delay(1300)
      return expenses
    }
  })
  return query
}

type UseExpensesQuery = (companyId: number) => UseSuspenseQueryResult<number[], Error>

export default useExpensesQuery
export type { UseExpensesQuery }
