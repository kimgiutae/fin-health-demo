import type { ChangeEventHandler } from 'react'

type SidebarSwitchProps = {
  name: string
  label: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type { SidebarSwitchProps }
