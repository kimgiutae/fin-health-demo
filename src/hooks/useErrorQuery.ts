import delay from 'utils/delay'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { Company } from 'types/Company'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useErrorQuery: UseErrorQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ['error'],
    queryFn: async () => {
      await delay(500)
      throw Error('Server error')
    }
  })
  return query
}

type UseErrorQuery = () => UseSuspenseQueryResult<Company, Error>

export default useErrorQuery
export type { UseErrorQuery }
