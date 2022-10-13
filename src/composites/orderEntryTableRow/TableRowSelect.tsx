import Label from '../../components/label/Label'
import SvgDecreaseMedium from '../../components/svg/SvgDecrease'
import {
  WDCaption,
  WDStyledFinancialHeading,
  WDStyledHeading,
  WDStyledOrderEntryCaption,
  WDStyledOrderEntryHeadingBold,
  WDStyledOrderEntryLossAmount,
  WDStyledOrderEntrySubHeadingText,
  WDStyledSubHeading,
  WDStyledWidgetSubTitle,
} from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import {
  CombinedLeftWrapper,
  CombinedRightWrapper,
  LabelWrapper,
  PercentageChangeWrapper,
  StatsWrapper,
  StyledHead,
  StyledMidContainer,
  StyledSubHead,
  Wrapper,
} from './styles'

export const TableRowSelect = () => {
  return (
    <Wrapper>
      <StyledHead>
        <WDStyledWidgetSubTitle>
          <Label>AMZN</Label>
        </WDStyledWidgetSubTitle>
        <WDStyledSubHeading>
          <Label>Amazon.com, Inc</Label>
        </WDStyledSubHeading>
      </StyledHead>
      <WDStyledHeading>
        <Label>$122.75</Label>
      </WDStyledHeading>

      <StyledSubHead>
        <PercentageChangeWrapper>
          <SvgDecreaseMedium fillColor={COLORS.Icons.DangerIcon} />
          <WDStyledOrderEntryLossAmount>
            <Label>$122.75</Label>
          </WDStyledOrderEntryLossAmount>
        </PercentageChangeWrapper>
        <WDStyledOrderEntryCaption>
          <Label>(15 min delay)</Label>
        </WDStyledOrderEntryCaption>

        <WDStyledFinancialHeading>
          <Label>Shares you hold 22</Label>
        </WDStyledFinancialHeading>
      </StyledSubHead>
      <StyledMidContainer>
        <WDCaption>
          <Label>Stats</Label>
        </WDCaption>

        <StatsWrapper>
          <CombinedLeftWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>Open</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>52-wk high</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>52-wk low</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
          </CombinedLeftWrapper>
          <CombinedRightWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>Volume</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>Volume</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
            <LabelWrapper>
              <WDStyledOrderEntrySubHeadingText>
                <Label>Volume</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntryHeadingBold>
                <Label>$444</Label>
              </WDStyledOrderEntryHeadingBold>
            </LabelWrapper>
          </CombinedRightWrapper>
        </StatsWrapper>
      </StyledMidContainer>
    </Wrapper>
  )
}
