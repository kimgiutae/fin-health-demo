import {
  Td,
  Th,
  Tr,
  Tab,
  Tabs,
  Alert,
  Table,
  Tbody,
  Thead,
  TabList,
  TabPanel,
  AlertIcon,
  TabPanels,
  TableContainer
} from '@chakra-ui/react'
import currency from 'currency.js'
import { kebabCase } from 'lodash'
import useCardsQuery from 'hooks/useCardsQuery'
import useLoansQuery from 'hooks/useLoansQuery'
import useCompanyQuery from 'hooks/useCompanyQuery'
import useAccountsQuery from 'hooks/useAccountsQuery'
import type { FC } from 'react'
import type { MoreInfoProps } from './MoreInfoProps'

const MoreInfo: FC<MoreInfoProps> = () => {
  const { data: company } = useCompanyQuery()
  const { data: cards } = useCardsQuery(company?.id ?? 0)
  const { data: loans } = useLoansQuery(company?.id ?? 0)
  const { data: accounts } = useAccountsQuery(company?.id ?? 0)
  return (
    <Tabs>
      <TabList>
        <Tab>Banks accounts</Tab>
        <Tab>Credit cards</Tab>
        <Tab>Loans</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p='1rem 0'>
          <TableContainer>
            <Table variant='striped'>
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
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel p='1rem 0'>
          <TableContainer>
            <Table variant='striped'>
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
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel p='1rem 0'>
          {loans?.length ? (
            <TableContainer></TableContainer>
          ) : (
            <Alert status='info'>
              <AlertIcon />
              We could't find any registered loan.
            </Alert>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default MoreInfo
