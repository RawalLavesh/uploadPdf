import Button from '../../components/button/Button'
import { COLORS } from '../../theme/Colors'
import OrderConfirmationHeader from './OrderConfirmationHeader'
import PopUPCard from './PopUPCard'
import {
  OrderConformationPopUp,
  ModelHeader,
  ModelBody,
  ModelContent,
  ButtonCenter,
} from './styles'
export default function OrderConfirmation(props: any) {
  return (
    <OrderConformationPopUp>
      <ModelContent>
        <ModelHeader>
          <OrderConfirmationHeader
            closePopUp={props.closePopUp}
            success={true}
          />
        </ModelHeader>
        <ModelBody>
          <PopUPCard popup={true} orderId={true} />
        </ModelBody>
        <ButtonCenter>
          <Button
            type={''}
            color={COLORS.Text.Tertiary}
            bgColor={COLORS.UI.BackgroundStrong}
            borderColor={COLORS.UI.BackgroundStrong}
            padding={'8px 32px'}
            borderRadius={'4px'}
            onClick={() => console.log('Button clicked')}
          >
            {'Done'}
          </Button>
        </ButtonCenter>
      </ModelContent>
    </OrderConformationPopUp>
  )
}
