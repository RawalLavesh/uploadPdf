import {
  Wrapper,
  HeadingWrapper,
  InnerContainer,
  DataWrapper,
  ValueChangeWrapper,
  PctChangeWrapper,
} from './styles'
import Label from '../../components/label/Label'
import TotalAccountValue from '../totalAccountValue/TotalAccountValue'
import { AccountsSummaryProps } from './IAccountsSummary'
import SvgIncreaseMedium from '../../components/svg/SvgIncrease'
import { COLORS } from '../../theme/Colors'
import SvgDecreaseMedium from '../../components/svg/SvgDecrease'
import {
  WDStyledFinancialHeading,
  WDStyledGainAmount,
  WDStyledLossAmount,
  WDStyledMainHeading,
} from '../../components/ui/WDTypography'

interface TitleLabelProps {
  title: string
}

const TitleLabel = ({ title }: TitleLabelProps) => {
  return (
    <WDStyledFinancialHeading>
      <Label>{title}</Label>
    </WDStyledFinancialHeading>
  )
}

interface ValueLabelProps {
  value?: string
  isValueDown?: boolean
}

const ValueLabel = ({ value, isValueDown }: ValueLabelProps) => {
  return (
    <WDStyledLossAmount>
      <Label
        color={isValueDown ? `${COLORS.Text.Danger}` : `${COLORS.UI.Success}`}
      >
        {value}
      </Label>
    </WDStyledLossAmount>
  )
}

const ValueLabel1 = ({ value, isValueDown }: ValueLabelProps) => {
  return (
    <WDStyledGainAmount>
      <Label
        color={isValueDown ? `${COLORS.Text.Danger}` : `${COLORS.UI.Success}`}
      >
        {value}
      </Label>
    </WDStyledGainAmount>
  )
}
interface DayValueChangeProps {
  title: string
  valueChange?: string
  pctChange?: string
  isValueDown?: boolean
}

const DayValueChange = ({
  title,
  valueChange,
  pctChange,
  isValueDown,
}: DayValueChangeProps) => {
  return (
    <DataWrapper>
      <TitleLabel title={title} />
      <ValueChangeWrapper>
        <ValueLabel value={valueChange} isValueDown={isValueDown} />
        <PctChangeWrapper>
          {isValueDown ? (
            <SvgDecreaseMedium fillColor={COLORS.UI.DangerBackground} />
          ) : (
            <SvgIncreaseMedium fillColor={COLORS.Text.Success2} />
          )}
          <ValueLabel1 value={pctChange} isValueDown={isValueDown} />
        </PctChangeWrapper>
      </ValueChangeWrapper>
    </DataWrapper>
  )
}

const AccountsSummary = ({
  type,
  value,
  TodaysGainLossVlu,
  TodaysGainLossPct,
  isTodaysGainLossValueDown,
  TotalUnrealizedGainLossVlu,
  TotalUnrealizedGainLossPct,
  isTotalGainLossValueDown,
  cashVlu,
  marginVlu,
  isMarginVluDown,
  marketVlu,
  label,
}: AccountsSummaryProps) => {
  const returnWidgetUi = (type: string) => {
    switch (type) {
      case 'holdingsPage':
        return (
          <>
            <TotalAccountValue title={'Total Accounts Value'} value={value} />
            <DayValueChange
              title={"Today's Gain/Loss"}
              valueChange={TodaysGainLossVlu}
              pctChange={TodaysGainLossPct}
              isValueDown={isTodaysGainLossValueDown}
            />
            <DayValueChange
              title={'Total Unrealized Gain/Loss'}
              valueChange={TotalUnrealizedGainLossVlu}
              pctChange={TotalUnrealizedGainLossPct}
              isValueDown={isTotalGainLossValueDown}
            />
          </>
        )

      case 'activityPage':
        return <TotalAccountValue title={'Net Cash Flow (YTD)'} value={value} />

      case 'projectedIncomePage':
        return (
          <TotalAccountValue title={'Total Projected Income'} value={value} />
        )

      case 'balancesPage':
        return (
          <>
            <TotalAccountValue title={'Total Account Balance'} value={value} />
            <TotalAccountValue title={'Cash'} value={cashVlu} />
            <TotalAccountValue
              title={'Margin'}
              value={marginVlu}
              isValueDown={isMarginVluDown}
            />
            <TotalAccountValue title={'Market Value'} value={marketVlu} />
          </>
        )
      case 'RealizedGainLossPage':
        return <TotalAccountValue title={'Realized Gain/Loss'} value={value} />

      case 'UnrealizedGainLossPage':
        return (
          <>
            <TotalAccountValue title={'Total Accounts Value'} value={value} />
            <DayValueChange
              title={'Unrealized Gain/Loss'}
              valueChange={TotalUnrealizedGainLossVlu}
              pctChange={TotalUnrealizedGainLossPct}
              isValueDown={isTotalGainLossValueDown}
            />
          </>
        )
    }
  }
  return (
    <Wrapper>
      <HeadingWrapper>
        <WDStyledMainHeading>
          <Label>{label}</Label>
        </WDStyledMainHeading>
      </HeadingWrapper>
      <InnerContainer>{returnWidgetUi(type)}</InnerContainer>
    </Wrapper>
  )
}

export default AccountsSummary
