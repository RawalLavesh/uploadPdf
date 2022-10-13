import { FC } from 'react'
import Button from '../../components/button/Button'
import Image from '../../components/image/Image'
import { Icons } from '../../shared/GlobalStyle'
import { ButtonContainer, MoreButtonWrapper } from './styles'
import { MoreButtonProps } from './IReviewLocate'

const MoreButton: FC<MoreButtonProps> = ({
  onBlur,
  openMenu,
}: MoreButtonProps) => (
  <MoreButtonWrapper>
    <ButtonContainer  onBlur={onBlur} id={'more'}>
        <Button onClick={openMenu} type={'button'}>
          {Icons.More && (
            <Image
              image={Icons.More}
              alt={'Icon'}
              width={'4px'}
              height={'18px'}
            />
          )}
        </Button>
    </ButtonContainer>
  </MoreButtonWrapper>
)

export default MoreButton
