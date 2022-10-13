import { RootContainer } from './styles'
import { useContext } from 'react'
import { ClientContext } from '../../services/clientContext/ClientContext'
import Label from '../../components/label/Label'
import {
  WDGainLossText,
  WDStyledFinancialHeading,
  WDStyledGainAmountText,
  WDStyledGainPercentageText,
  WDStyledMainHeading,
} from '../../components/ui/WDTypography'
import {
  IconWrapper,
  StyledFinancialCard,
  StyledFinancialWidgetContainer,
  StyledIconWrapper,
} from '../../components/ui/WDCard'

import SvgIncreaseMedium from '../../components/svg/SvgIncrease'
import SvgDecreaseMedium from '../../components/svg/SvgDecrease'
import { COLORS } from '../../theme/Colors'

const FinancialSummaryWidget = () => {
  const clientCtx = useContext(ClientContext)
  const isTodayDown = clientCtx?.householdSummary.isTodaysGainLossValueDown
  const isValueDown = clientCtx?.householdSummary?.isTodaysGainLossValueDown
  return (
    <RootContainer>
      <StyledFinancialCard>
        <WDStyledFinancialHeading>
          <Label>{'Total Household Value'}</Label>
        </WDStyledFinancialHeading>
        <WDStyledMainHeading>
          <Label>{clientCtx?.householdSummary?.totalHouseholdValue}</Label>
        </WDStyledMainHeading>
      </StyledFinancialCard>
      <StyledFinancialCard>
        <WDStyledFinancialHeading>
          <Label>{"Today's Gain/Loss"}</Label>
        </WDStyledFinancialHeading>
        <StyledFinancialWidgetContainer>
          <WDStyledGainAmountText>
            <WDGainLossText isDown={isTodayDown}>
              <Label>{clientCtx?.householdSummary?.todayGainLossValue}</Label>
            </WDGainLossText>
          </WDStyledGainAmountText>
          <StyledIconWrapper>
            <IconWrapper>
              {isValueDown ? (
                <SvgDecreaseMedium fillColor={COLORS.Icons.DangerIcon} />
              ) : (
                <SvgIncreaseMedium fillColor={COLORS.Icons.SuccessIcon} />
              )}
            </IconWrapper>
            <WDStyledGainPercentageText>
              <WDGainLossText isDown={isTodayDown}>
                <Label>{clientCtx?.householdSummary?.todayGainLossPct}</Label>
              </WDGainLossText>
            </WDStyledGainPercentageText>
          </StyledIconWrapper>
        </StyledFinancialWidgetContainer>
      </StyledFinancialCard>
    </RootContainer>
  )
}

export default FinancialSummaryWidget
