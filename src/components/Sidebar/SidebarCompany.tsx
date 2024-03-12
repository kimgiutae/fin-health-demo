import { ListItem, UnorderedList } from '@chakra-ui/react'
import SidebarSection from './SidebarSection'
import useCompanyQuery from 'hooks/useCompanyQuery'
import type { FC } from 'react'

const SidebarCompany: FC = () => {
  const { data: company } = useCompanyQuery()
  return (
    <SidebarSection title='General details'>
      <UnorderedList>
        <ListItem>
          <b>Co. Name:</b> {company?.name} (UID: {company?.id})
        </ListItem>
        <ListItem>
          <b>Co. Code:</b> {company?.code}
        </ListItem>
        <ListItem>
          <b>Stock Symbol:</b> {company?.symbol}
        </ListItem>
        <ListItem>
          <b>Other:</b> Lorem ipsum dolor.
        </ListItem>
      </UnorderedList>
    </SidebarSection>
  )
}

export default SidebarCompany
