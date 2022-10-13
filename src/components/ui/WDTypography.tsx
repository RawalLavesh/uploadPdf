import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { FontSizes, FontWeights } from '../../theme/Fonts'
import { SIZES, TextSizes } from '../../theme/Sizes'
import { LineHeights } from '../../theme/Spacing'
interface typographyProps {
  children?: React.ReactNode
  isDown?: string
  stateChange?: boolean
}
const StyledCaption = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.UI.Text};
`

const StyledHeadline = styled.p`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${SIZES[3]}; /*16px*/
  color: ${COLORS.UI.Primary};
`

const StyledSubheading = styled.p`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${SIZES[2]}; /*12px*/
  color: ${COLORS.UI.Primary};
`
const StyledOrderEntryCaption = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Caption}; /*12px*/
  line-height: ${SIZES[3]}; /*16px*/
  color: ${COLORS.Text.Text};
`

const StyledSecondaryText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${SIZES[3]}; /*24px*/
  color: ${COLORS.Text.Text}; /* #0F172 */
`

const StyledText = styled.p`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[3]}; /*18px*/
  color: ${COLORS.UI.Primary};
`

const StyledTitle = styled.p`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Button}; /* 14px */
  line-height: ${LineHeights.Paragraph}; /* 16px */
  color: ${COLORS.Text.TextWeak}; /* #475569*/
`
const StyledDropDownLabel = styled.p`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Button}; /* 14px */
  line-height: ${LineHeights.Title}; /* 16px */
  color: ${COLORS.Text.Text}; /*'#0F172A'*/
`
const StyledWelcome = styled.div`
  font-size: ${FontSizes.Heading}; // 26px
  font-weight: ${FontWeights.Bold}; // 700
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.UI.Text};
  margin: 0;
`
const StyledInputLabel = styled.p`
  font-size: ${FontSizes.Paragraph}; // 16px
  font-weight: ${FontWeights.Regular}; // 400
  line-height: ${LineHeights.Title}; // 24px
  color: ${COLORS.UI.Text};
  margin: 0;
  padding-bottom: ${SIZES[0]}; // 4px
`
const StyledErrorLabel = styled.p`
  font-size: ${FontSizes.Button}; // 14px
  font-weight: 400; //
  line-height: ${LineHeights.Title}; // 24px
  color: ${COLORS.Text.Error};
  margin: 0;
`

const StyledHeading = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.MainHeading}; /*42px*/
  line-height: ${SIZES[8]}; /*48px*/
  color: ${COLORS.Text.Neutral};
`
const StyledMainHeading = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Heading}; /*26px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.Text.Neutral};
`
const StyledSubHeading = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Neutral};
`
const StyledDateLabel = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Button}; /*14px*/
  line-height: ${TextSizes[2]}; /*16px*/
  color: ${COLORS.UI.Quaternary}; //#475569
`
const StyledFinancialHeading = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.UI.Quaternary};
`
const StyledCardHeading = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.Brand.Primary};
`
const StyledCollapsedCardHeading = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.UI.Text};
`
const StyledCardHeadingAmountLabel = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.Brand.Primary};
`
const StyledCollapsedCardHeadingAmountLabel = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.UI.Text};
`
const StyledAccountHeading = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.UI.Quaternary};
`

const StyledWidgetSubHeading = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Neutral};
`
const StyledWidgetSubTitle = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Button}; /*14px*/
  line-height: ${TextSizes[2]}; /*16px*/
  color: ${COLORS.UI.Quaternary};
`
const StyledAccordionLabel = styled.div`
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Button}; /*14px*/
  line-height: ${TextSizes[2]}; /*16px*/
  color: ${COLORS.UI.BackgroundStrong};
`
const StyledAmountLabel = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.UI.Text};
`
const StyledLossAmount = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.Text.Danger};
`
const StyledOrderEntryLossAmount = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.UI.DangerBackground};
`
const StyledGainAmount = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  //color: ${COLORS.Text.Success};
`
const StyledButtonText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Button}; /*14px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Primary};
`
const StyledOrderEntryWidgetText = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Button}; /*14px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Black};
`
const StyledOrderEntryButtonText = styled.div`
  font-family: 'SourceSansPro-SemiBold';
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Black};
`
const StyledOrderEntryButtonActive = styled.div`
  font-family: 'SourceSansPro-SemiBold';
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  //color: ${COLORS.UI.BackgroundStrong};
`
const StyledOrderEntryDropdownText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Black};
`
const StyledOrderEntryButtonTextSemiBold = styled.div`
  font-family: 'SourceSansPro-SemiBold';
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Black};
`
const StyledOrderEntryButtonTextSubHeading = styled.div`
  font-family: 'SourceSansPro-SemiBold';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Black};
`

const StyledSubHeadingText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.TextWeak}; /* #475569*/
`
const StyledOrderEntrySubHeadingText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Text};
`
const StyledGainAmountText = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.h5}; /*24px*/
  line-height: ${SIZES[5]}; /*32px*/
  color: ${COLORS.UI.Success};
`
const StyledGainPercentageText = styled.div`
  font-family: 'SourceSansPro-Regular';
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${FontSizes.H4Success}; /*21px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.UI.Success};
`
const StyledLoginHeading = styled.div`
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: 68px;
  line-height: 72px;
  font-style: normal;
  color: ${COLORS.Text.Tertiary}; /* #FFFFFF */
`
const StyledLoginSubHeading = styled.div`
  font-weight: ${FontWeights.Regular}; /*400*/
  font-size: ${SIZES[7]}; /*42px*/
  line-height: ${SIZES[8]}; /*48px*/
  font-style: normal;
  color: ${COLORS.Text.Tertiary}; /* #FFFFFF */
`
const StyledDropdownLabel = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*400*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Brand.Muted}; /*'#374253' */
`
const StyledDocumentsText = styled.div`
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.Text.Neutral};
`
const StyledOrderTypeText = styled.div`
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Subtitle}; /*18px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.Text.Black};
`
const StyledDocumentCardHeading = styled.div`
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.Text.Neutral};
`
const StyledOrderEntryHeadingBold = styled.div`
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${FontSizes.Paragraph}; /*16px*/
  line-height: ${SIZES[4]}; /*24px*/
  color: ${COLORS.Text.Text};
`
export const WDWidgetHead = styled.div`
  font-style: normal;
  font-weight: ${FontWeights.Bold}; /*400*/
  font-size: ${FontSizes.Heading}; /*26px*/
  line-height: ${SIZES[8]};
  color: ${COLORS.UI.Text}; /*'#0F172A'*/
`

export const StyledAvatarLabel = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.UI.Tertiary};
`

export const StyledSidebarLabel = styled.div`
  font-size: 'Source Sans Pro';
  font-style: 'regular';
  font-weight: ${({ stateChange }: typographyProps) =>
    stateChange ? 700 : 400};
  font-size: 16px;
  line-height: 1.5rem;
  color: ${({ stateChange }: typographyProps) =>
    stateChange ? COLORS.UI.Tertiary : COLORS.UI.Text};
`

const StyledTabPanel = styled.div`
  font-family: 'SourceSansPro-Bold';
  font-weight: ${FontWeights.Bold}; /*700*/
  font-size: ${FontSizes.Title}; /*20px*/
  line-height: ${TextSizes[7]}; /*32px*/
  color: ${COLORS.Text.Neutral};
`
const StyledLabelText = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: ${FontWeights.Regular}; /*400 */
  font-size: ${FontSizes.Paragraph}; /* 16px */
  line-height: ${LineHeights.Title}; /* 24px */
  color: ${COLORS.Text.Neutral}; /* #0F172A */
`
const StyledLabelTextStrong = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: ${FontWeights.SemiBold}; /*600 */
  font-size: ${FontSizes.Paragraph}; /* 16px */
  line-height: ${LineHeights.Title}; /* 24px */
  color: ${COLORS.Text.Neutral}; /* #0F172A */
`
const StyledLabelTextDisabled = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: ${FontWeights.SemiBold}; /*600 */
  font-size: ${FontSizes.Paragraph}; /* 16px */
  line-height: ${LineHeights.Title}; /* 24px */
  color: ${COLORS.Text.NeutralTextDisabled}; /* #A7AFBC */
`
const StyledRegularLabel = styled.p`
  font-weight: ${FontWeights.Regular}; /*400*/
`
const StyledSemiBoldAnchorLabel = styled.p`
  color: ${COLORS.Text.Primary};
`
const StyledSemiBoldCardLabel = styled.p`
  font-size: ${TextSizes[4]}; /*20px*/
`
const StyledSemiBoldLabel = styled.div`
  font-weight: ${FontWeights.SemiBold}; /*600*/
  font-size: ${TextSizes[2]}; /*16px*/
  line-height: ${TextSizes[5]}; /*24px*/
  color: ${COLORS.Text.Neutral};
`
const StyledSemiBoldLabelSmall = styled(StyledSemiBoldLabel)`
  font-size: ${TextSizes[13]}; /*14px*/
  color: ${COLORS.Text.Tertiary};
`
export const WDStyledSidebarLabel = ({
  children,
  stateChange,
}: typographyProps) => {
  return (
    <StyledSidebarLabel stateChange={stateChange}>
      {children}
    </StyledSidebarLabel>
  )
}
export const WDTextLabel = ({ children, ...props }: typographyProps) => {
  return <StyledLabelText {...props}>{children}</StyledLabelText>
}
export const WDTextStrong = ({ children, ...props }: typographyProps) => {
  return <StyledLabelTextStrong {...props}>{children}</StyledLabelTextStrong>
}
export const WDStyledAvatarLabel = ({ children }: typographyProps) => {
  return <StyledAvatarLabel>{children}</StyledAvatarLabel>
}

export const WDCaption = ({ children }: typographyProps) => {
  return <StyledCaption>{children}</StyledCaption>
}
export const WDHeadline = ({ children }: typographyProps) => {
  return <StyledHeadline>{children}</StyledHeadline>
}
export const WDSubheading = ({ children }: typographyProps) => {
  return <StyledSubheading>{children}</StyledSubheading>
}
export const WDText = ({ children }: typographyProps) => {
  return <StyledText>{children}</StyledText>
}
export const WDTitle = ({ children, ...props }: typographyProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}
export const WDSecondaryText = ({ children, ...props }: typographyProps) => {
  return <StyledSecondaryText {...props}>{children}</StyledSecondaryText>
}
export const WDDropDownLabel = ({ children, ...props }: typographyProps) => {
  return <StyledDropDownLabel {...props}>{children}</StyledDropDownLabel>
}
export const WDLoginHeading = ({ children, ...props }: typographyProps) => {
  return <StyledLoginHeading {...props}>{children}</StyledLoginHeading>
}
export const WDLoginSubHeading = ({ children, ...props }: typographyProps) => {
  return <StyledLoginSubHeading {...props}>{children}</StyledLoginSubHeading>
}
export const WDWelcome = ({ children, ...props }: typographyProps) => {
  return <StyledWelcome {...props}>{children}</StyledWelcome>
}
export const WDInputLabel = ({ children, ...props }: typographyProps) => {
  return <StyledInputLabel {...props}>{children}</StyledInputLabel>
}
export const WDErrorLabel = ({ children, ...props }: typographyProps) => {
  return <StyledErrorLabel {...props}>{children}</StyledErrorLabel>
}
export const WDStyledHeading = ({ children, ...props }: typographyProps) => {
  return <StyledHeading {...props}>{children}</StyledHeading>
}
export const WDStyledAccountHeading = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledAccountHeading {...props}>{children}</StyledAccountHeading>
}
export const WDStyledOrderEntryDropdownText = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryDropdownText {...props}>
      {children}
    </StyledOrderEntryDropdownText>
  )
}
export const WDStyledDateLabel = ({ children, ...props }: typographyProps) => {
  return <StyledDateLabel {...props}>{children}</StyledDateLabel>
}
export const WDStyledMainHeading = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledMainHeading {...props}>{children}</StyledMainHeading>
}
export const WDStyledSubHeading = ({ children, ...props }: typographyProps) => {
  return <StyledSubHeading {...props}>{children}</StyledSubHeading>
}
export const WDStyledFinancialHeading = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledFinancialHeading {...props}>{children}</StyledFinancialHeading>
}
export const WDStyledCardHeading = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledCardHeading {...props}>{children}</StyledCardHeading>
}

export const WDStyledOrderEntryCaption = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryCaption {...props}>{children}</StyledOrderEntryCaption>
  )
}
export const WDStyledOrderEntryButtonActive = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryButtonActive {...props}>
      {children}
    </StyledOrderEntryButtonActive>
  )
}
export const WDStyledCardHeadingAmountLabel = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledCardHeadingAmountLabel {...props}>
      {children}
    </StyledCardHeadingAmountLabel>
  )
}
export const WDStyledWidgetSubHeading = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledWidgetSubHeading {...props}>{children}</StyledWidgetSubHeading>
}
export const WDStyledWidgetSubTitle = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledWidgetSubTitle {...props}>{children}</StyledWidgetSubTitle>
}
export const WDStyledAccordionLabel = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledAccordionLabel {...props}>{children}</StyledAccordionLabel>
}
export const WDStyledAmountLabel = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledAmountLabel {...props}>{children}</StyledAmountLabel>
}
export const WDStyledLossAmount = ({ children, ...props }: typographyProps) => {
  return <StyledLossAmount {...props}>{children}</StyledLossAmount>
}
export const WDStyledGainAmount = ({ children, ...props }: typographyProps) => {
  return <StyledGainAmount {...props}>{children}</StyledGainAmount>
}
export const WDStyledButtonText = ({ children, ...props }: typographyProps) => {
  return <StyledButtonText {...props}>{children}</StyledButtonText>
}
export const WDStyledGainAmountText = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledGainAmountText {...props}>{children}</StyledGainAmountText>
}
export const WDStyledGainPercentageText = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledGainPercentageText {...props}>{children}</StyledGainPercentageText>
  )
}
export const WDStyledDropdownLabel = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledDropdownLabel {...props}>{children}</StyledDropdownLabel>
}
export const WDGainLossText = styled.div`
  color: ${({ isDown }: typographyProps) => (isDown ? '#BA0517' : '#2E844A')};
`
export const WDStyledDocumentsText = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledDocumentsText {...props}>{children}</StyledDocumentsText>
}
export const WDStyledSubHeadingText = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledSubHeadingText {...props}>{children}</StyledSubHeadingText>
}
export const WDStyledOrderTypeText = ({
  children,
  ...props
}: typographyProps) => {
  return <StyledOrderTypeText {...props}>{children}</StyledOrderTypeText>
}
export const WDStyledDocumentCardHeading = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledDocumentCardHeading {...props}>{children}</StyledDocumentCardHeading>
  )
}
export const WDStyledOrderEntryButtonText = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryButtonText {...props}>
      {children}
    </StyledOrderEntryButtonText>
  )
}
export const WDStyledOrderEntryWidgetText = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryWidgetText {...props}>
      {children}
    </StyledOrderEntryWidgetText>
  )
}
export const WDStyledCollapsedCardHeading = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledCollapsedCardHeading {...props}>
      {children}
    </StyledCollapsedCardHeading>
  )
}
export const WDStyledCollapsedCardHeadingAmountLabel = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledCollapsedCardHeadingAmountLabel {...props}>
      {children}
    </StyledCollapsedCardHeadingAmountLabel>
  )
}
export const WDStyledOrderEntryButtonTextSemiBold = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryButtonTextSemiBold {...props}>
      {children}
    </StyledOrderEntryButtonTextSemiBold>
  )
}
export const WDStyledOrderEntryButtonTextSubHeading = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryButtonTextSubHeading {...props}>
      {children}
    </StyledOrderEntryButtonTextSubHeading>
  )
}
export const WDStyledOrderEntrySubHeadingText = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntrySubHeadingText {...props}>
      {children}
    </StyledOrderEntrySubHeadingText>
  )
}
export const WDStyledOrderEntryLossAmount = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryLossAmount {...props}>
      {children}
    </StyledOrderEntryLossAmount>
  )
}
export const WDStyledOrderEntryHeadingBold = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledOrderEntryHeadingBold {...props}>
      {children}
    </StyledOrderEntryHeadingBold>
  )
}
export const WDTab = ({ children }: typographyProps) => {
  return <StyledTabPanel>{children}</StyledTabPanel>
}

export const WDStyledLabelDisabled = ({
  children,
  ...props
}: typographyProps) => {
  return (
    <StyledLabelTextDisabled {...props}>{children}</StyledLabelTextDisabled>
  )
}
export const WDStyledLabelText = ({ children, ...props }: typographyProps) => {
  return <StyledLabelText {...props}>{children}</StyledLabelText>
}
export const WDStyledRegularLabel = ({ children }: typographyProps) => {
  return <StyledRegularLabel>{children}</StyledRegularLabel>
}
export const WDStyledSemiBoldAnchorLabel = ({ children }: typographyProps) => {
  return <StyledSemiBoldAnchorLabel>{children}</StyledSemiBoldAnchorLabel>
}
export const WDStyledSemiBoldCardLabel = ({ children }: typographyProps) => {
  return <StyledSemiBoldCardLabel>{children}</StyledSemiBoldCardLabel>
}
export const WDStyledSemiBoldLabel = ({ children }: typographyProps) => {
  return <StyledSemiBoldLabel>{children}</StyledSemiBoldLabel>
}
export const WDStyledSemiBoldLabelSmall = ({ children }: typographyProps) => {
  return <StyledSemiBoldLabelSmall>{children}</StyledSemiBoldLabelSmall>
}
