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
          <Label>{'No Activity'}</Label>
        </WDWelcome>
      </LabelWrapper>
      <WDStyledFinancialHeading>
        <Label>{'Your recent activity will appear here'}</Label>
      </WDStyledFinancialHeading>
    </Container>
  )
}

export default EmptyState
