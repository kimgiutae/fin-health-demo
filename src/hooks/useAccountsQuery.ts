import delay from 'utils/delay'
import accounts from 'mocks/accounts'
import { useQuery } from 'react-query'
import type { Account } from 'types/Account'
import type { UseQueryResult } from 'react-query'

const useAccountsQuery: UseAccountsQuery = (_companyId) => {
  const query = useQuery('accounts', async () => {
    await delay(1500)
    return accounts
  })
  return query
}

type UseAccountsQuery = (companyId: number) => UseQueryResult<Account[], unknown>

export default useAccountsQuery
export type { UseAccountsQuery }
