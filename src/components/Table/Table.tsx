import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import currency from 'currency.js'
import { kebabCase } from 'lodash'
import useCardsQuery from 'hooks/useCardsQuery'
import useCompanyQuery from 'hooks/useCompanyQuery'
import useAccountsQuery from 'hooks/useAccountsQuery'
import type { FC } from 'react'
import type { TableProps } from './TableProps'

const Table: FC<TableProps> = () => {
  const { data: company } = useCompanyQuery()
  const { data: cards } = useCardsQuery(company?.id ?? 0)
  const { data: accounts } = useAccountsQuery(company?.id ?? 0)
  return (
    <Tabs>
      <TabList>
        <Tab>Banks accounts</Tab>
        <Tab>Credit cards</Tab>
        <Tab>Loans</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableContainer>
            <ChakraTable variant='striped'>
              <Thead>
                <Tr>
                  <Th>Bank name</Th>
                  <Th>Account</Th>
                  <Th>Current balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts?.map(({ bank, name, balance }) => (
                  <Tr key={kebabCase(bank)}>
                    <Td>{bank}</Td>
                    <Td>{name}</Td>
                    <Td>{currency(balance).format()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </ChakraTable>
          </TableContainer>
        </TabPanel>
        <TabPanel>
          <TableContainer>
            <ChakraTable variant='striped'>
              <Thead>
                <Tr>
                  <Th>Card Name</Th>
                  <Th>Credit Limit</Th>
                  <Th>Current Balance</Th>
                  <Th>Interest Rate</Th>
                  <Th>Minimum Payment</Th>
                  <Th>Payment Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cards?.map(({ name, limit, balance, interest, minPayment, paymentDate }) => (
                  <Tr key={kebabCase(name)}>
                    <Td>{name}</Td>
                    <Td>{currency(limit).format()}</Td>
                    <Td>{currency(balance).format()}</Td>
                    <Td>{`${interest}%`}</Td>
                    <Td>{currency(minPayment).format()}</Td>
                    <Td>{paymentDate}</Td>
                  </Tr>
                ))}
              </Tbody>
            </ChakraTable>
          </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Table
