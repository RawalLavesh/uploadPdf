import {
  AdvisorWidgetWrapper,
  LabelWrapper,
  RootContainer,
  SubWrapper,
  Wrapper,
} from './styles'

import { Avatar } from '../../composites/avatar/Avatar'
import { useContext } from 'react'
import { ClientContext } from '../../services/clientContext/ClientContext'
import Label from '../../components/label/Label'
import { WDLabel } from '../../components/ui/WDLabel'
import { COLORS } from '../../theme/Colors'
import SvgCall from '../../components/svg/SvgCall'

const MenuItemList = () => {
  const clientCtx = useContext(ClientContext)
  //const advisor = clientCtx?.advisor
  return (
    <Wrapper>
      <SubWrapper>
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
        <Avatar
          contactDetails={[
            {
              circleBgColor: COLORS.Background.Primarytext,
              avatarIcon: <SvgCall />,
              title: `${
                clientCtx?.advisor?.firstName +
                '   ' +
                clientCtx?.advisor?.lastName
              }`,
              address: '',
              telephoneNo: `${clientCtx?.advisor?.primaryPhoneNumber}`,
            },
          ]}
        />
      </SubWrapper>
    </Wrapper>
  )
}

const AdvisorWidget = () => {
  return (
    <RootContainer>
      <LabelWrapper>
        <WDLabel>
          <Label>{'Contact Your Advisor'}</Label>
        </WDLabel>
      </LabelWrapper>
      <MenuItemList />
    </RootContainer>
  )
}

export default AdvisorWidget
