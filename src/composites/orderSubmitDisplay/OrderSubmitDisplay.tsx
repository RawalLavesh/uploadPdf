import Button from '../../components/button/Button'
import { COLORS } from '../../theme/Colors'
import OrderConfirmationHeader from '../orderConfirmation/OrderConfirmationHeader'
import PopUPCard from '../orderConfirmation/PopUPCard'
import { ButtonCenter } from '../orderConfirmation/styles'
import { CardBox, TextCenter } from './styles'

export default function OrderSubmitDisplay(props: any) {
  return (
    <CardBox>
      <TextCenter>
        <OrderConfirmationHeader success={false} />
      </TextCenter>
      <PopUPCard popup={false} orderId={false} />
      {/* <ButtonCenter>
      <Button
            type={''}
            color={COLORS.Text.Primary}
            bgColor={COLORS.Background.Primary}
            borderColor={COLORS.Text.Primary}
            padding={'15px 32px'}
            borderRadius={'4px'}
            onClick={() => console.log('Button clicked')}
          >
            {'Back'}
          </Button>
          <Button
            type={''}
            color={COLORS.Text.Tertiary}
            bgColor={COLORS.UI.BackgroundStrong}
            borderColor={COLORS.UI.BackgroundStrong}
            padding={'8px 32px'}
            borderRadius={'4px'}
            onClick={() => console.log('Button clicked')}
          >
            {'Submit'}
          </Button>
      </ButtonCenter> */}
    </CardBox>
  )
}
