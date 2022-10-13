import {
  CardProps,
  Wrapper,
  InnerWrapper,
  IconsWrapper,
  WdPdfDownload,
  WDCard,
} from './styles'
import Label from '../../components/label/Label'
import WDSpacer from '../../components/ui/WDSpacer'
import { COLORS } from '../../theme/Colors'
import { SvgDownloadSmall } from '../../components/svg/logo/SvgDownload'
import {
  WDStyledDateLabel,
  WDStyledDocumentCardHeading,
} from '../../components/ui/WDTypography'
import SvgDocumentFile from '../../components/svg/SvgDocumentFile'
import { SvgMenuMedium } from '../../components/svg/SvgMenu'
import { SvgStar } from '../../components/svg/logo/SvgStar'

const Card = ({
  statementDate,
  addToFavorite,
  fileURL,
  accountNumber,
  handleMenu,
  statement,
}: CardProps) => {
  const handleDownload = () => {
    // window.location.href =
    //   'https://maps.lib.utexas.edu/maps/world_maps/world_pol_2011_nov.pdf'

    fetch('https://experience-api.azurewebsites.net/documents' + fileURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `FileName.pdf`)

        // Append to html link element page
        document.body.appendChild(link)

        // Start download
        link.click()

        // Clean up and remove the link
        // link.parentNode.removeChild(link)
      })
  }
  return (
    <Wrapper onClick={handleMenu}>
      <WDCard>
        <WDSpacer position="bottom" size="mTen">
          <WdPdfDownload>
            <SvgDocumentFile fillColor={COLORS.Background.Primarytext} />
          </WdPdfDownload>
        </WDSpacer>
        <WDSpacer position="top" size="mEight">
          <WDStyledDocumentCardHeading>
            <Label>{statement}</Label>
          </WDStyledDocumentCardHeading>
        </WDSpacer>
        <WDSpacer position="top" size="mEight">
          <WDStyledDateLabel>
            <Label>{statementDate}</Label>
          </WDStyledDateLabel>
        </WDSpacer>

        <WDSpacer position="top" size="m25">
          <InnerWrapper>
            <SvgStar fillColor={COLORS.UI.Quaternary} />
            <IconsWrapper>
              <SvgDownloadSmall
                fillColor={COLORS.UI.Quaternary}
              ></SvgDownloadSmall>

              {/* <SvgMenuMedium fillColor={COLORS.UI.Quaternary} /> */}
            </IconsWrapper>
          </InnerWrapper>
        </WDSpacer>
      </WDCard>
    </Wrapper>
  )
}

export default Card
