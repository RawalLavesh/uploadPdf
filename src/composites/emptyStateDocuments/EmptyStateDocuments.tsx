import React from 'react'
import Label from '../../components/label/Label'
import { Svgdocuments, SvgNoTransaction } from '../../components/svg/SvgMenu'
import {
  WDStyledWidgetSubHeading,
  WDWelcome,
} from '../../components/ui/WDTypography'
import { Container, LabelWrapper } from './styles'

const EmptyState = () => {
  return (
    <Container>
      <Svgdocuments />
      <LabelWrapper>
        <WDWelcome>
          <Label>{'Filter to find your documents'}</Label>
        </WDWelcome>
      </LabelWrapper>
      <WDStyledWidgetSubHeading>
        <Label>
          {'Use the filter to find the documents you are looking for '}
        </Label>
      </WDStyledWidgetSubHeading>
    </Container>
  )
}

export default EmptyState
