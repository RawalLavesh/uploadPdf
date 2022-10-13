import { StyledPanel } from './styles'
import { useContext } from 'react'
import { ClientContext } from '../../services/clientContext/ClientContext'
import Label from '../label/Label'
import {
  WDStyledDateLabel,
  WDStyledMainHeading,
  WDStyledSubHeading,
} from '../ui/WDTypography'
import {
  StyledDateContainer,
  StyledDateWrapper,
  StyledWrapper,
} from '../ui/WDCard'
import { COLORS } from '../../theme/Colors'

const GreetingPanel = () => {
  const clientCtx = useContext(ClientContext)
  return (
    <StyledPanel>
      <StyledWrapper>
        <WDStyledMainHeading>
          <Label>
            {clientCtx?.client?.greetingsMessage}
            <span
              style={{
                color: `${COLORS.Background.NeutralWeak}`,
                fontFamily: 'Source Sans Pro',
                fontWeight: '200',
                fontSize: '16px',
              }}
            >
              {'Version 1.1.15'}
            </span>
          </Label>
        </WDStyledMainHeading>
        <StyledDateContainer>
          <WDStyledSubHeading>
            <Label>{'Your Household Summary'}</Label>
          </WDStyledSubHeading>
          <WDStyledDateLabel>
            <StyledDateWrapper>
              <Label>{`As of ${clientCtx?.client?.asOfDateTime} ET`}</Label>
            </StyledDateWrapper>
          </WDStyledDateLabel>
        </StyledDateContainer>
      </StyledWrapper>
    </StyledPanel>
  )
}

export default GreetingPanel
