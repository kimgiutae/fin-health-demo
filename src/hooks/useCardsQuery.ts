import cards from 'mocks/cards'
import delay from 'utils/delay'
import { useQuery } from 'react-query'
import type { Card } from 'types/Card'
import type { UseQueryResult } from 'react-query'

const useCardsQuery: UseCardsQuery = (_companyId) => {
  const query = useQuery('cards', async () => {
    await delay(1500)
    return cards
  })
  return query
}

type UseCardsQuery = (companyId: number) => UseQueryResult<Card[], unknown>

export default useCardsQuery
export type { UseCardsQuery }
