import styles from './SummaryStyles'
import { HorizontalScroller } from 'components/HorizontalScroller'
import { Stat, StatLabel, StatNumber, StatGroup, StatHelpText, Skeleton } from '@chakra-ui/react'
import type { FC } from 'react'

const SummarySkeleton: FC = () => {
  return (
    <HorizontalScroller marginBottom='1rem'>
      <StatGroup sx={styles.wrapper}>
        <Skeleton>
          <Stat>
            <StatLabel>Label example text</StatLabel>
            <StatNumber>Number</StatNumber>
            <StatHelpText>Text</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton>
          <Stat>
            <StatLabel>Label example text</StatLabel>
            <StatNumber>Number</StatNumber>
            <StatHelpText>Text</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton>
          <Stat>
            <StatLabel>Label example text</StatLabel>
            <StatNumber>Number</StatNumber>
            <StatHelpText>Text</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton>
          <Stat>
            <StatLabel>Label example text</StatLabel>
            <StatNumber>Number</StatNumber>
            <StatHelpText>Text</StatHelpText>
          </Stat>
        </Skeleton>
      </StatGroup>
    </HorizontalScroller>
  )
}

export default SummarySkeleton
