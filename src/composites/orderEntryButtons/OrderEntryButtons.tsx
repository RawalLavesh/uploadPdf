import { useState } from 'react'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import { WDStyledOrderEntryButtonActive } from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import { ButtonContainer } from './styles'

interface OrderEntryButtonProps {
  onClickBack?: () => void
  onClickContinue?: () => void
  disableContinue?: boolean
  submit?: boolean
}
export const OrderEntryButtons = ({
  onClickBack,
  onClickContinue,
  disableContinue = true,
  submit = false,
}: OrderEntryButtonProps) => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <ButtonContainer>
      <Button
        type={'button'}
        color={COLORS.UI.BackgroundStrong}
        onClick={onClickBack}
      >
        <WDStyledOrderEntryButtonActive>
          <Label>Back</Label>
        </WDStyledOrderEntryButtonActive>
      </Button>
      <Button
        type={'button'}
        color={COLORS.UI.BackgroundStrong}
        onClick={onClickContinue}
        disabled={disableContinue}
      >
        <WDStyledOrderEntryButtonActive>
          <Label>{submit ? 'Submit' : 'Continue'}</Label>
        </WDStyledOrderEntryButtonActive>
      </Button>
    </ButtonContainer>
  )
}
