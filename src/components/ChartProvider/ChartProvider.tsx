import ChartContext from 'contexts/ChartContext'
import { useState } from 'react'
import type { FC, ReactNode } from 'react'

const ChartProvider: FC<ChartProviderProps> = ({ children }) => {
  const [hideProfit, hideProfitUpdate] = useState(false)
  const [monthsCount, monthsCountUpdate] = useState<6 | 12>(6)
  const [hideExpenses, hideExpensesUpdate] = useState(false)
  return (
    <ChartContext.Provider
      value={{
        hideProfit,
        hideProfitUpdate,
        monthsCount,
        monthsCountUpdate,
        hideExpenses,
        hideExpensesUpdate
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}

type ChartProviderProps = {
  children: ReactNode
}

export default ChartProvider
export type { ChartProviderProps }
