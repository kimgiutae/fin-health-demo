import delay from 'utils/delay'
import company from 'mocks/company'
import { useQuery } from 'react-query'
import type { Company } from 'types/Company'
import type { UseQueryResult } from 'react-query'

const useCompanyQuery = () => {
  const query = useQuery('company', async () => {
    await delay(1000)
    return company
  })
  return query
}

type UseCompanyQuery = UseQueryResult<Company, Error>

export default useCompanyQuery
export type { UseCompanyQuery }
