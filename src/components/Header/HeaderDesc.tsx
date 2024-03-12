import styles from './HeaderStyles'
import { Text } from '@chakra-ui/react'
import useCompanyQuery from 'hooks/useCompanyQuery'
import type { FC } from 'react'

const HeaderDesc: FC = () => {
  const { data: company } = useCompanyQuery()
  return <Text sx={styles.text}>Financial Health Data Visualization for {company?.name}</Text>
}

export default HeaderDesc
