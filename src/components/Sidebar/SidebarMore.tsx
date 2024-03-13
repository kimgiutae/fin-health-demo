import useErrorQuery from 'hooks/useErrorQuery'
import SidebarSection from './SidebarSection'
import SidebarMoreError from 'components/Sidebar/SidebarMoreError'
import SidebarSectionSkeleton from 'components/Sidebar/SidebarSectionSkeleton'
import type { FC } from 'react'

const SidebarMore: FC = () => {
  // NOTE: Fake error query. Can't use suspense because triggers a development warning
  const { isError, refetch, isLoading } = useErrorQuery()
  if (isLoading) {
    return <SidebarSectionSkeleton />
  }
  if (isError) {
    console.error('Fake server error')
    return <SidebarMoreError refetch={refetch} />
  }
  return (
    <SidebarSection sx={{ mb: '0' }} title='More settings'>
      <div></div>
    </SidebarSection>
  )
}

export default SidebarMore
