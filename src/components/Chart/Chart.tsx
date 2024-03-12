import styles from './ChartStyles'
import { Box } from '@chakra-ui/react'
import currency from 'currency.js'
import { debounce } from 'lodash'
import useChartContext from 'hooks/useChartContext'
import useCompanyQuery from 'hooks/useCompanyQuery'
import useExpensesQuery from 'hooks/useExpensesQuery'
import useRevenuesQuery from 'hooks/useRevenuesQuery'
import { useRef, useEffect } from 'react'
import { HorizontalScroller } from 'components/HorizontalScroller'
import { Chart as ChartAuto } from 'chart.js/auto'
import type { FC } from 'react'
import type { ChartProps } from './ChartProps'

// Main chart component. The chart renders an empty <canvas /> that
// using React API (ref, effect and state) will be filled with chart.js
// logic and customized with the <ChartProvider> state.
const Chart: FC<ChartProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { data: company } = useCompanyQuery()
  const { data: revenues } = useRevenuesQuery(company.id)
  const { data: expenses } = useExpensesQuery(company.id)
  const { hideProfit, monthsCount, hideExpenses } = useChartContext()

  // NOTE: effect only re-trigers if <ChartProvider> or queries content updates
  useEffect(() => {
    const { current } = canvasRef
    if (!current || !revenues || !expenses) {
      return
    }

    // NOTE: Build chart.js config according to context
    const datasets = []

    const revenueDataset = {
      label: 'Revenue',
      data: monthsCount === 6 ? revenues.slice(6) : revenues,
      borderWidtht: 2
    }
    datasets.push(revenueDataset)

    const expensesDataset = {
      label: 'Expenses',
      data: monthsCount === 6 ? expenses.slice(6) : expenses,
      borderWidtht: 2
    }
    if (!hideExpenses) {
      datasets.push(expensesDataset)
    }

    const profits = revenues.map((revenue, index) => {
      const expense = expenses[index] ?? 0
      return revenue - expense
    })
    const profitDataset = {
      label: 'Profit',
      data: monthsCount === 6 ? profits.slice(6) : profits,
      borderWidtht: 2
    }
    if (!hideProfit) {
      datasets.push(profitDataset)
    }

    // TODO: Automate months creation
    const labels = ['Oct. 23', 'Nov. 23', 'Dic. 23', 'Jan. 24', 'Feb. 24', 'March 24', 'April 24']
    if (monthsCount === 12) {
      labels.unshift('April 23', 'May 23', 'June 23', 'July 23', 'Aug. 23', 'Sept. 23')
    }

    const chart = new ChartAuto(current, {
      type: 'line',
      data: {
        labels,
        datasets
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Values in USD'
            },
            ticks: {
              callback: (value) => {
                return currency(value).format()
              }
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            onClick: (ev) => {
              ev.native?.stopPropagation()
            }
          }
        }
      }
    })

    // PERF: Debounce function to decrease unnecessary lib calls
    const windowOnResize = debounce(() => {
      chart.resize()
    }, 500)

    window.addEventListener('resize', windowOnResize)

    // PERF: Always destroy lib instances and expensive listeners to avoid memory-leaks
    return () => {
      chart.destroy()
      window.removeEventListener('resize', windowOnResize)
    }
  }, [revenues, expenses, canvasRef, hideProfit, monthsCount, hideExpenses])
  return (
    <HorizontalScroller id='chart' sx={styles.scroller}>
      <Box sx={styles.wrapper}>
        <canvas ref={canvasRef} />
      </Box>
    </HorizontalScroller>
  )
}

export default Chart
