import styles from './SummaryStyles'
import currency from 'currency.js'
import { useMemo } from 'react'
import useCompanyQuery from 'hooks/useCompanyQuery'
import useExpensesQuery from 'hooks/useExpensesQuery'
import useRevenuesQuery from 'hooks/useRevenuesQuery'
import { HorizontalScroller } from 'components/HorizontalScroller'
import { Stat, StatLabel, StatNumber, StatGroup, StatHelpText } from '@chakra-ui/react'
import type { FC } from 'react'
import type { SummaryProps } from './SummaryProps'

// Component to show in <Content> area. Here summarizes important data
// in forms of little stats boxes: revenue, expenses, profit, etc.
const Summary: FC<SummaryProps> = () => {
  const { data: company } = useCompanyQuery()
  const { data: revenues } = useRevenuesQuery(company?.id || 0)
  const { data: expenses } = useExpensesQuery(company?.id || 0)

  // PERF: useMemo for saving expensive calcs
  const profit = useMemo(() => {
    if (!revenues || !expenses) {
      return
    }
    const lastRevenue = revenues[revenues.length - 1]
    const lastExpense = expenses[expenses.length - 1]
    const profit = lastRevenue - lastExpense
    return profit
  }, [revenues, expenses])
  return (
    <HorizontalScroller sx={styles.scroller}>
      <StatGroup sx={styles.wrapper}>
        <Stat>
          <StatLabel>Total revenue:</StatLabel>
          <StatNumber>
            {currency(revenues ? revenues[revenues.length - 1] : 0).format()}
          </StatNumber>
          <StatHelpText>(last month)</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total expenses:</StatLabel>
          <StatNumber>
            {currency(expenses ? expenses[expenses.length - 1] : 0).format()}
          </StatNumber>
          <StatHelpText>(last month)</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Gross profit:</StatLabel>
          <StatNumber>{currency(profit ?? 0).format()}</StatNumber>
          <StatHelpText>(last month)</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Current balance:</StatLabel>
          <StatNumber>U$D 23.423</StatNumber>
          <StatHelpText>Lorem ipsum dolor sit amet.</StatHelpText>
        </Stat>
      </StatGroup>
    </HorizontalScroller>
  )
}

export default Summary
