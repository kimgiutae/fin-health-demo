import SidebarSection from './SidebarSection'
import { Alert, AlertDescription, AlertIcon, Link } from '@chakra-ui/react'
import type { FC } from 'react'
import type { SidebarMoreErrorProps } from './SidebarMoreErrorProps'

const SidebarMoreError: FC<SidebarMoreErrorProps> = ({ refetch }) => {
  return (
    <SidebarSection sx={{ mb: '0', color: 'red' }} title='More settings'>
      <Alert status='error' sx={{ color: '#555' }}>
        <AlertIcon />
        <AlertDescription>
          A problem ocurred during data fetching.{' '}
          <Link fontWeight='600' onClick={refetch}>
            Click here to try again
          </Link>
          .
        </AlertDescription>
      </Alert>
    </SidebarSection>
  )
}

export default SidebarMoreError
