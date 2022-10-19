import { CardProps, Wrapper, WDCard } from './styles'
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

const LatestUpload = ({ latestFile }: CardProps) => {
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
            <Label>File Name: {latestFile.documentName}</Label>
          </WDStyledDateLabel>
        </WDSpacer>
        <WDSpacer position="top" size="mEight">
          <WDStyledDateLabel>
            <Label>Date: {latestFile.uploadedDate.split(' ')[0]}</Label>
          </WDStyledDateLabel>
        </WDSpacer>
        <WDSpacer position="top" size="mEight">
          <WDStyledDateLabel>
            <Label>Uploaded: {latestFile.uploadedBy}</Label>
          </WDStyledDateLabel>
        </WDSpacer>
      </WDCard>
    </Wrapper>
  )
}

export default LatestUpload
