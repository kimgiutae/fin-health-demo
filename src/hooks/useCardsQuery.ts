import delay from 'utils/delay'
import cards from 'mocks/cards'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { Card } from 'types/Card'
import type { UseSuspenseQueryResult } from '@tanstack/react-query'

const useCardsQuery: UseCardsQuery = (_companyId) => {
  const query = useSuspenseQuery({
    queryKey: ['cards'],
    queryFn: async () => {
      await delay(1400)
      return cards
    }
  })
  return query
}

type UseCardsQuery = (companyId: number) => UseSuspenseQueryResult<Card[], Error>

export default useCardsQuery
export type { UseCardsQuery }
