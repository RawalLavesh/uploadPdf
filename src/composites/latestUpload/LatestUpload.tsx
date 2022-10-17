import {
    CardProps,
    Wrapper,
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
  
  const LatestUpload = ({
    fileName,
    uploadedDate,
    uploadedBy
  }: CardProps) => {
    return (
      <Wrapper>
        <WDCard>
          <WDSpacer position="top" size="mEight">
            <WDStyledDocumentCardHeading>
              <Label>Last uploaded file</Label>
            </WDStyledDocumentCardHeading>
          </WDSpacer>
          <WDSpacer position="top" size="mEight">
            <WDStyledDateLabel>
              <Label>File Name: {fileName}</Label>
            </WDStyledDateLabel>
          </WDSpacer>
          <WDSpacer position="top" size="mEight">
            <WDStyledDateLabel>
              <Label>Date: {uploadedDate}</Label>
            </WDStyledDateLabel>
          </WDSpacer>
          <WDSpacer position="top" size="mEight">
            <WDStyledDateLabel>
              <Label>Uploaded: {uploadedBy}</Label>
            </WDStyledDateLabel>
          </WDSpacer>
        </WDCard>
      </Wrapper>
    )
  }
  
  export default LatestUpload
  