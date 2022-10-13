import React from 'react'
import { SvgClose, SvgSuccess } from '../../components/svg/SvgMenu'
import {
  ClosePopUp,
  OrderSubTitle,
  OrderSubTitleShort,
  OrderTitle,
} from './styles'
import { COLORS } from '../../theme/Colors'
export default function OrderConfirmationHeader(props: any) {
  const { closePopUp, success } = props
  const close = () => {
    closePopUp()
  }
  return (
    <>
      {success && <SvgSuccess fillColor={COLORS.UI.Success} />}
      {success && <OrderTitle>Your order has been submitted</OrderTitle>}
      <OrderSubTitle>Amazon.com, Inc.</OrderSubTitle>
      <OrderSubTitleShort>AMZN</OrderSubTitleShort>
      {success && (
        <ClosePopUp
          onClick={() => {
            close()
          }}
        >
          <SvgClose fillColor={'#475569'} />
        </ClosePopUp>
      )}
    </>
  )
}
