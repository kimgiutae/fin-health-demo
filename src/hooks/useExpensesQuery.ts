import delay from 'utils/delay'
import expenses from 'mocks/expenses'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'

const useExpensesQuery: UseExpensesQuery = (_companyId) => {
  const query = useQuery('expenses', async () => {
    await delay(1200)
    return expenses
  })
  return query
}

type UseExpensesQuery = (companyId: number) => UseQueryResult<number[], unknown>

export default useExpensesQuery
export type { UseExpensesQuery }
