import styles from './SidebarSectionStyles'
import { Box, Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import type { SidebarSectionProps } from './SidebarSectionProps'

const SidebarSection: FC<SidebarSectionProps> = ({ sx = {}, title, children }) => {
  return (
    <Box as='section' sx={{ ...styles.wrapper, ...sx }}>
      <Heading sx={styles.heading}>{title}:</Heading>
      {children}
    </Box>
  )
}

export default SidebarSection
export type { SidebarSectionProps }
