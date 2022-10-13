import Label from '../../components/label/Label'
import SvgFileExport from '../../components/svg/SvgFileExport'
import SvgPrint from '../../components/svg/SvgPrint'
import SvgQuestionCircle from '../../components/svg/SvgQuestionCircle'
import SvgRedo from '../../components/svg/SvgRedo'
import { WDStyledButtonText } from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import { StyledDiv } from './styles'

export const UserActions = () => {
  return (
    <>
      <StyledDiv>
        <SvgRedo fillColor={COLORS.UI.BackgroundStrong} />
        <WDStyledButtonText>
          <Label>{'Refresh'}</Label>
        </WDStyledButtonText>
      </StyledDiv>
      <StyledDiv onClick={() => (window.location.pathname = 'contact-us')}>
        <SvgQuestionCircle fillColor={COLORS.UI.BackgroundStrong} />
        <WDStyledButtonText>
          <Label>{'Help'}</Label>
        </WDStyledButtonText>
      </StyledDiv>
      <StyledDiv>
        <SvgFileExport fillColor={COLORS.UI.BackgroundStrong} />
        <WDStyledButtonText>
          <Label>{'Export'}</Label>
        </WDStyledButtonText>
      </StyledDiv>
      <StyledDiv>
        <SvgPrint fillColor={COLORS.UI.BackgroundStrong} />
        <WDStyledButtonText>
          <Label>{'Print'}</Label>
        </WDStyledButtonText>
      </StyledDiv>
    </>
  )
}
