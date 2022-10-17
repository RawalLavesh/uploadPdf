import Label from '../../components/label/Label'
import { SvgNoTransaction } from '../../components/svg/SvgMenu'
import {
  WDStyledFinancialHeading,
  WDWelcome,
} from '../../components/ui/WDTypography'
import { Container, LabelWrapper } from './styles'

const EmptyState = () => {
  return (
    <Container>
      <SvgNoTransaction />
      <LabelWrapper>
        <WDWelcome>
          <Label>{'No Files Available'}</Label>
        </WDWelcome>
      </LabelWrapper>
      <WDStyledFinancialHeading>
        <Label>{'Recent files will appear here'}</Label>
      </WDStyledFinancialHeading>
    </Container>
  )
}

export default EmptyState
