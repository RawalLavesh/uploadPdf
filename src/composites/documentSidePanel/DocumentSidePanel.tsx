import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import { DocumentSidePanelProps } from './IDocumentSidePanel'
import {
  Wrapper,
  TitleWrapper,
  InfoWrapper,
  RowWrapper,
  ActionCard,
  CardTitleWrapper,
  AnchorTagsWrapper,
  LabelWrapper,
  DividerWrapper,
  IconLabelWrapper,
  ChevronWrapper,
} from './styles'
import { Backgrounds } from '../../shared/styles'
import { BorderColors } from './../../shared/styles'
import { AnchorTag } from '../../components/anchorTag/AnchorTag'
import {
  WDStyledMainHeading,
  WDStyledRegularLabel,
  WDStyledSemiBoldAnchorLabel,
  WDStyledSemiBoldCardLabel,
  WDStyledSemiBoldLabel,
  WDStyledSemiBoldLabelSmall,
} from '../../components/ui/WDTypography'
import React from 'react'
import { COLORS } from '../../theme/Colors'
import Divider from '../../components/divider/Divider'
import SvgCancel from '../../components/svg/logo/SvgCancel'
import { SvgChevronRightSmall } from '../../components/svg/SvgChevron'

const DocumentSidePanel = ({
  title,
  documentInformation,
  handleClose,
  handleVote,
}: DocumentSidePanelProps) => {
  return (
    <Wrapper>
      <TitleWrapper>
      <LabelWrapper>
        <IconLabelWrapper>
        <WDStyledMainHeading>
          <Label>{title}</Label>
        </WDStyledMainHeading>
        <SvgCancel fillColor={COLORS.UI.Icon}/>
        </IconLabelWrapper>
        <DividerWrapper>
        <Divider
          thickness={'1px'}
          horizontal={true}
          bgColor={Backgrounds.Gray30}
        />
        </DividerWrapper>
          </LabelWrapper>
        <Button
          type={'reset'}
          iconWidth={'24px'}
          iconHeight={'24px'}
          hasBorder={false}
          borderLessBgColor={Backgrounds.White}
          onClick={handleClose}
        />
      </TitleWrapper>

      <InfoWrapper>
        {documentInformation.map((item, index) => (
          <RowWrapper key={index}>
            <WDStyledSemiBoldLabel>
              <Label>{item.infoTitle}</Label>
            </WDStyledSemiBoldLabel>
            <WDStyledRegularLabel>
              <Label>{item.infoStatus}</Label>
            </WDStyledRegularLabel>
          </RowWrapper>
        ))}
      </InfoWrapper>

      <ActionCard>
        <CardTitleWrapper>
          <WDStyledSemiBoldCardLabel>
            <Label>Annual Meeting</Label>
          </WDStyledSemiBoldCardLabel>
          <Button
            iconWidth={'16px'}
            iconHeight={'16px'}
            type={'button'}
            bgColor={COLORS.Background.Primarytext}
            padding={'0 8px'}
            borderRadius={'4px'}
            borderColor={BorderColors.PrimaryText}
            onClick={handleVote}
          >
            <ChevronWrapper>
            <WDStyledSemiBoldLabelSmall>
              <Label>Vote </Label>
            </WDStyledSemiBoldLabelSmall>
            <SvgChevronRightSmall fillColor={COLORS.UI.Tertiary}/>
            </ChevronWrapper>
          </Button>
        </CardTitleWrapper>

        <AnchorTagsWrapper>
          <WDStyledSemiBoldAnchorLabel>
            <AnchorTag
              href={'#'}
              title={'10-k Report'}
              fontSize={'16px'}
              fontWeight={600}
            ></AnchorTag>
          </WDStyledSemiBoldAnchorLabel>
          <WDStyledSemiBoldAnchorLabel>
            <AnchorTag
              href={'#'}
              title={'Amended 10-k Report'}
              fontSize={'16px'}
              fontWeight={600}
            ></AnchorTag>
          </WDStyledSemiBoldAnchorLabel>
          <WDStyledSemiBoldAnchorLabel>
            <AnchorTag
              href={'#'}
              title={'Proxy Statement'}
              fontSize={'16px'}
              fontWeight={600}
            ></AnchorTag>
          </WDStyledSemiBoldAnchorLabel>
        </AnchorTagsWrapper>
      </ActionCard>
    </Wrapper>
  )
}

export default DocumentSidePanel
