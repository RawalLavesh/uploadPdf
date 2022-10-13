/* eslint-disable*/
import { Circle, BodyContainer, ContactContainer } from './styles'

import Label from '../../components/label/Label'
import Image from '../../components/image/Image'
import { AnchorTag } from '../../components/anchorTag/AnchorTag'
import { Colors } from '../../shared/styles'
import { AvatarProps } from './IAvatar'
import { useContext } from 'react'
import { ClientContext } from '../../services/clientContext/ClientContext'

export const Avatar = ({ contactDetails }: AvatarProps) => {
  const clientCtx = useContext(ClientContext)
  const advisor = clientCtx?.advisor
  return (
    <>
      {contactDetails.map((item, index) => {
        return (
          <BodyContainer key={index}>
            <Circle circleBgColor={item.circleBgColor}>
              {item.avatarIcon}
            </Circle>
            <ContactContainer>
              <Label>{item.title}</Label>
              {/* {item.address ? (
                <Label>{item.address}</Label>
              ) : ( */}
              <AnchorTag
                title={item.telephoneNo}
                href={'tel://' + item.telephoneNo}
                fontSize={'16px'}
                fontWeight={400}
                lineHeight={'24px'}
                color={Colors.NeutralText}
              />
            </ContactContainer>
          </BodyContainer>
        )
      })}
    </>
  )
}

export default Avatar
