import Label from '../../components/label/Label'
import SvgCancel from '../../components/svg/logo/SvgCancel'
import { SvgExclamation } from '../../components/svg/logo/SvgExclamation'
import { WDStyledWidgetSubHeading } from '../../components/ui/WDTypography'
import { Container, LabelContainer, SvgContainer, SvgWrapper } from './styles'

const ErrorOrderEntry = () => {
  return (
    <Container>
      <SvgWrapper>
        <SvgExclamation fillColor={'#FFFFFF'} />
      </SvgWrapper>
      <LabelContainer>
        <WDStyledWidgetSubHeading>
          <Label>{`Current time is 19:51 EST. Market Closed at 16:00 EST.`}</Label>
          <Label>{`Please note that this order will be placed in the next market session. Market opens at 9:30 EST.`}</Label>
        </WDStyledWidgetSubHeading>
        </LabelContainer>
        <SvgContainer>
          <SvgCancel fillColor={'#475569'} />
        </SvgContainer>
     
    </Container>
  )
}
export default ErrorOrderEntry
