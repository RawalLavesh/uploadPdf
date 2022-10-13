import { RootContainer, StyledBottomContainer } from './styles'
import { FooterMenu } from './menuItem/MenuItem'

const SidePaneContent = () => {
  return (
    <RootContainer>
      <StyledBottomContainer>
        <FooterMenu />
      </StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent
