import { Container, AnchorWrapper, InnerContainer } from './styles'
import { AnchorTag } from '../../components/anchorTag/AnchorTag'
import Label from '../../components/label/Label'
import { FooterProps } from './IFooter'
import { COLORS } from '../../theme/Colors'

export const Footer = ({ bgColor }: FooterProps) => {
  return (
    <Container bgColor={bgColor}>
      <InnerContainer>
        <Label
          fontSize={'0.75rem'}
          color={COLORS.Text.Neutral}
          fontWeight={400}
          fontStyle={'normal'}
          lineHeight={'1rem'}
        >
          {'Copyright © ' +
            new Date().getFullYear() +
            ' by Wedbush Securities. All Rights Reserved.'}
        </Label>
      </InnerContainer>

      <AnchorWrapper>
        <AnchorTag
          title={'Terms and Conditions'}
          target={'_blank'}
          href={'https://devstorage-agent.azureedge.net/clientlinks/terms.html'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'Privacy Policy'}
          target={'_blank'}
          href={
            'https://devstorage-agent.azureedge.net/clientlinks/privacy.html'
          }
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'My Disclosures'}
          target={'_blank'}
          href={
            'https://devstorage-agent.azureedge.net/clientlinks/myDisclosure.html'
          }
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'Security Statement'}
          target={'_blank'}
          href={
            ' https://devstorage-agent.azureedge.net/clientlinks/securityStatement.html'
          }
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'User Agreement'}
          target={'_blank'}
          href={
            ' https://devstorage-agent.azureedge.net/clientlinks/userAgreement.html'
          }
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'Service Fees'}
          target={'_blank'}
          href={
            'https://devstorage-agent.azureedge.net/clientlinks/serviceFees.html'
          }
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'Contact Us'}
          target={'_blank'}
          href={'https://mdn.com'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'Member FINRA'}
          target={'_blank'}
          href={'https://www.finra.org/'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
        <AnchorTag
          title={'SIPC'}
          target={'_blank'}
          href={'https://www.sipc.org/'}
          fontSize={'12px'}
          fontWeight={400}
          lineHeight={'16px'}
        />
      </AnchorWrapper>
    </Container>
  )
}
export default Footer
