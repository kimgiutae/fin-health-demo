import ChartContext from 'contexts/ChartContext'
import { useState } from 'react'
import type { FC } from 'react'
import type { ChartProviderProps } from './ChartProviderProps'

// Provider that setup the context and the hooks to share logic between
// distant components. In this case <SidebarSettings> and <Chart>.
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

export default ChartProvider
export type { ChartProviderProps }
