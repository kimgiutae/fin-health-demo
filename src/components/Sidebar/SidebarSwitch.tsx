import type { FC } from 'react'
import type { SidebarSwitchProps } from './SidebarSwitchProps'
import { Switch, FormLabel, FormControl } from '@chakra-ui/react'

const SidebarSwitch: FC<SidebarSwitchProps> = ({ name, label, onChange }) => {
  return (
    <FormControl mb='.5rem' display='flex' alignItems='center'>
      <FormLabel htmlFor={name} mb='0'>
        {label}
      </FormLabel>
      <Switch id={name} onChange={onChange} />
    </FormControl>
  )
}

export default SidebarSwitch
