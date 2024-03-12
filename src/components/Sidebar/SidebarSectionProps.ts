import type { ReactNode } from 'react'
import type { SystemStyleObject } from '@chakra-ui/react'

type SidebarSectionProps = {
  sx?: SystemStyleObject
  title: string
  children: ReactNode
}

export type { SidebarSectionProps }
