import Label from '../../components/label/Label'
import { SvgExclamation } from '../../components/svg/logo/SvgExclamation'
import { WDStyledWidgetSubHeading } from '../../components/ui/WDTypography'
import { ImageWrapper, TooltipWrapper, Wrapper } from './styles'

export const Tooltip = () => {
  return (
    <Wrapper>
      <TooltipWrapper>
        <ImageWrapper>
          <SvgExclamation fillColor={'#475569'} />
        </ImageWrapper>
        <WDStyledWidgetSubHeading>
          <Label>
            Allows you to bet against a stock. Available for accounts with
            <span> Margin</span> capabilities.
          </Label>
        </WDStyledWidgetSubHeading>
      </TooltipWrapper>
    </Wrapper>
  )
}
