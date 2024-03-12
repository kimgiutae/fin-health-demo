import useErrorQuery from 'hooks/useErrorQuery'
import SidebarSection from './SidebarSection'
import type { FC } from 'react'

const SidebarMore: FC = () => {
  // Fake error query
  const { error } = useErrorQuery()
  if (error) {
    throw error
  }
  return (
    <SidebarSection sx={{ mb: '0' }} title='More settings'>
      <div></div>
    </SidebarSection>
  )
}

export default SidebarMore
