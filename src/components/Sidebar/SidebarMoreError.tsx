import SidebarSection from './SidebarSection'
import { Alert, AlertIcon } from '@chakra-ui/react'
import type { FC } from 'react'

const SidebarMoreError: FC = () => {
  return (
    <SidebarSection sx={{ mb: '0', color: 'red' }} title='More settings'>
      <Alert status='error' sx={{ color: '#555' }}>
        <AlertIcon />A problem ocurred during data fetching. Please, try again later.
      </Alert>
    </SidebarSection>
  )
}

export default SidebarMoreError
