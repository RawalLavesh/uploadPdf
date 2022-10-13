import React from 'react'
import Label from '../../components/label/Label'
import { Svgdocuments, SvgNoTransaction } from '../../components/svg/SvgMenu'
import {
  WDStyledWidgetSubHeading,
  WDWelcome,
} from '../../components/ui/WDTypography'
import { Container, LabelWrapper } from './styles'

const NoState = () => {
  return (
    <Container>
      <Svgdocuments />
      <LabelWrapper>
        <WDWelcome>
          <Label>{"You don't have documents yet"}</Label>
        </WDWelcome>
      </LabelWrapper>
      <WDStyledWidgetSubHeading>
        <Label>
          {'Use the filter to find documents for other accounts'}
        </Label>
      </WDStyledWidgetSubHeading>
    </Container>
  )
}

export default NoState
