import styles from './SidebarSectionStyles'
import { Link } from '@chakra-ui/react'
import SidebarSwitch from 'components/Sidebar/SidebarSwitch'
import SidebarSection from './SidebarSection'
import useChartContext from 'hooks/useChartContext'
import useCompanyQuery from 'hooks/useCompanyQuery'
import useExpensesQuery from 'hooks/useExpensesQuery'
import type { FC } from 'react'

const SidebarSettings: FC = () => {
  const { hideProfitUpdate, monthsCountUpdate, hideExpensesUpdate } = useChartContext()
  const { data: company } = useCompanyQuery()
  const { data: _expenses } = useExpensesQuery(company.id)
  return (
    <SidebarSection title='Display settings'>
      <SidebarSwitch
        name='hide-profit'
        label='Hide profit?'
        onChange={(ev) => {
          const checked = ev.target.checked
          hideProfitUpdate(checked ? true : false)
        }}
      />
      <SidebarSwitch
        name='hide-expenses'
        label='Hide expenses?'
        onChange={(ev) => {
          const checked = ev.target.checked
          hideExpensesUpdate(checked ? true : false)
        }}
      />
      <SidebarSwitch
        name='show-12-months'
        label='Show 12 months?'
        onChange={(ev) => {
          const checked = ev.target.checked
          monthsCountUpdate(checked ? 12 : 6)
        }}
      />
      <Link sx={styles.link} href='#chart'>
        Go to chart
      </Link>
    </SidebarSection>
  )
}

export default SidebarSettings
