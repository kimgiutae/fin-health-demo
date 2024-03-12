import delay from 'utils/delay'
import accounts from 'mocks/accounts'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { Account } from 'types/Account'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useAccountsQuery: UseAccountsQuery = (_companyId) => {
  const query = useSuspenseQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      await delay(1500)
      return accounts
    }
  })
  return query
}

type UseAccountsQuery = (companyId: number) => UseSuspenseQueryResult<Account[], Error>

export default useAccountsQuery
export type { UseAccountsQuery }
