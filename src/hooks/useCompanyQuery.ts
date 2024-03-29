import delay from 'utils/delay'
import company from 'mocks/company'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { Company } from 'types/Company'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useCompanyQuery: UseCompanyQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ['company'],
    queryFn: async () => {
      await delay(1000)
      return company
    }
  })
  return query
}

type UseCompanyQuery = () => UseSuspenseQueryResult<Company, Error>

export default useCompanyQuery
export type { UseCompanyQuery }
