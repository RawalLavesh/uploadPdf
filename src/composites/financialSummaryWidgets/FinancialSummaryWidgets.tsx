import {
  Wrapper,
  InnerContainer,
  IconWrapper,
  TodaysGainLossPctWrapper,
} from './styles'

import Label from '../../components/label/Label'
import Image from '../../components/image/Image'

import { Colors } from '../../shared/styles'
import { GrayIcons, Icons } from '../../shared/GlobalStyle'
import { FinancialSummaryWidgetsProps } from './IFinancialSummaryWidgets'
import { COLORS } from '../../theme/Colors'
import { WDWidgetHead } from '../../components/ui/WDTypography'

export const FinancialSummaryWidgets = ({
  type,
  title,
  totalHouseholdValue,
  todaysGainOrLossValue,
  todaysGainOrLossPct,
  rateOfReturnPct,
  projectedIncomeValue,
  isValueDown,
  hasBorder = true,
}: FinancialSummaryWidgetsProps) => {
  const returnWidgetUi = (type: string) => {
    switch (type) {
      case 'totalHouseholdValue':
        return (
          <WDWidgetHead>
            <Label>{totalHouseholdValue}</Label>
          </WDWidgetHead>
        )

      case 'todaysGainOrLoss':
        return (
          <>
            <Label
              fontFamily={'SourceSansPro-Regular'}
              fontSize={'24px'}
              fontStyle={'normal'}
              fontWeight={700}
              lineHeight={'32px'}
              color={isValueDown ? COLORS.Text.Danger : COLORS.UI.Success}
            >
              {todaysGainOrLossValue}
            </Label>
            <TodaysGainLossPctWrapper>
              <IconWrapper>
                {isValueDown ? (
                  <Image
                    image={Icons.Decrease}
                    alt={''}
                    width={'20px'}
                    height={'12px'}
                  />
                ) : (
                  <Image
                    image={GrayIcons.Increase}
                    alt={''}
                    width={'20px'}
                    height={'12px'}
                  />
                )}
              </IconWrapper>
              <Label
                fontFamily={'SourceSansPro-Regular'}
                fontSize={'21px'}
                fontStyle={'normal'}
                fontWeight={400}
                lineHeight={'24px'}
                color={isValueDown ? Colors.DangerText : Colors.SuccessText}
              >
                {todaysGainOrLossPct}
              </Label>
            </TodaysGainLossPctWrapper>
          </>
        )

      case 'rateOfReturn':
        return (
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'24px'}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={'48px'}
            color={isValueDown ? Colors.DangerText : Colors.SuccessText}
          >
            {rateOfReturnPct}
          </Label>
        )

      case 'projectedIncome':
        return (
          <Label
            fontFamily={'SourceSansPro-Regular'}
            fontSize={'26px'}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={'43px'}
            color={Colors.Gray80}
          >
            {projectedIncomeValue}
          </Label>
        )
    }
  }

  return (
    <Wrapper
      hasBorder={hasBorder}
      gap={type === 'todaysGainOrLoss' ? '8px' : '0px'}
    >
      <Label
        fontFamily={'SourceSansPro-Regular'}
        fontSize={'16px'}
        fontStyle={'normal'}
        fontWeight={400}
        lineHeight={'24px'}
        color={COLORS.Text.TextWeak}
      >
        {title}
      </Label>
      <InnerContainer>{returnWidgetUi(type)}</InnerContainer>
    </Wrapper>
  )
}

export default FinancialSummaryWidgets
