import { Wrapper, ChevronWrapper, LabelHeader, LabelAmount } from './styles'
import Label from '../../components/label/Label'
import { CardHeaderProps } from './ICardHeader'
import {
  SvgChevronDownMedium,
  SvgChevronUpMedium,
} from '../../components/svg/SvgChevron'
import { COLORS } from '../../theme/Colors'
import {
  WDStyledCardHeading,
  WDStyledCardHeadingAmountLabel,
  WDStyledCollapsedCardHeading,
  WDStyledCollapsedCardHeadingAmountLabel,
} from '../../components/ui/WDTypography'

export const CardHeader = ({
  isCollapsed,
  label,
  amountValue,
  icon,
  accordionHandler,
  rotateIcon,
}: CardHeaderProps) => {
  return (
    <Wrapper>
      <LabelHeader>
        {!isCollapsed ? (
          <WDStyledCardHeading>
            <Label>{label}</Label>
          </WDStyledCardHeading>
        ) : (
          <WDStyledCollapsedCardHeading>
            <Label>{label}</Label>
          </WDStyledCollapsedCardHeading>
        )}
      </LabelHeader>

      {amountValue && (
        <LabelAmount>
          {!isCollapsed ? (
            <WDStyledCardHeadingAmountLabel>
              <Label>{amountValue}</Label>
            </WDStyledCardHeadingAmountLabel>
          ) : (
            <WDStyledCollapsedCardHeadingAmountLabel>
              <Label>{amountValue}</Label>
            </WDStyledCollapsedCardHeadingAmountLabel>
          )}
        </LabelAmount>
      )}

      {icon && (
        <ChevronWrapper onClick={accordionHandler} rotateIcon={rotateIcon}>
          {isCollapsed ? (
            <SvgChevronDownMedium fillColor={COLORS.Icons.NeutralIcon} />
          ) : (
            <SvgChevronUpMedium fillColor={COLORS.Icons.NeutralIconInverted} />
          )}
        </ChevronWrapper>
      )}
    </Wrapper>
  )
}
