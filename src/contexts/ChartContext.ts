import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const ChartContext = createContext<ChartContextProps>({} as ChartContextProps)

type ChartContextProps = {
  hideProfit: boolean
  hideProfitUpdate: Dispatch<SetStateAction<boolean>>
  monthsCount: 6 | 12
  monthsCountUpdate: Dispatch<SetStateAction<6 | 12>>
  hideExpenses: boolean
  hideExpensesUpdate: Dispatch<SetStateAction<boolean>>
}

export default ChartContext
export type { ChartContextProps }
