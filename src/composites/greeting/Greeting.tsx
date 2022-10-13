import Label from '../../components/label/Label'
import {
  WDStyledDateLabel,
  WDStyledMainHeading,
  WDStyledSubHeading,
} from '../../components/ui/WDTypography'
import { GreetingProps } from './IGreeting'

import { Wrapper, DateHeader, DateContainer, DateWrapper } from './styles'

export const Greeting = ({
  greetingMessage,
  header,
  dateLabel,
  date,
  dateSuffix,
}: GreetingProps) => {
  return (
    <Wrapper>
      <WDStyledMainHeading>
        <Label>{greetingMessage}</Label>
      </WDStyledMainHeading>
      <DateContainer>
        <WDStyledSubHeading>
          <Label>{header}</Label>
        </WDStyledSubHeading>
        <DateHeader>
          <DateWrapper>
            <WDStyledDateLabel>
              <Label>{dateLabel}</Label>
            </WDStyledDateLabel>
            <WDStyledDateLabel>
              <Label>{date}</Label>
            </WDStyledDateLabel>
          </DateWrapper>
          <WDStyledDateLabel>
            <Label>{dateSuffix}</Label>
          </WDStyledDateLabel>
        </DateHeader>
      </DateContainer>
    </Wrapper>
  )
}
