import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import {
  Wrapper,
  AccountDetailsWrapper,
  PctChangeWrapper,
  QuickViewBtnWrapper,
  IconWrapper,
  TopContainer,
  MoreButtonWrapper,
  DropdownItemWrapper,
  TitleWrapper,
} from './styles'
import Label from '../../components/label/Label'
import { ButtonRow } from '../buttonRow/ButtonRow'
import Divider from '../../components/divider/Divider'
import { Backgrounds, Colors, BorderColors } from '../../shared/styles'
import { AccountProps } from './IAccounts'
import SvgDecreaseMedium from '../../components/svg/SvgDecrease'
import SvgIncreaseMedium from '../../components/svg/SvgIncrease'
import {
  SvgChevronDownSmall,
  SvgChevronUpSmall,
} from '../../components/svg/SvgChevron'
import { COLORS } from '../../theme/Colors'
import {
  WDGainLossText,
  WDStyledAccordionLabel,
  WDStyledAccountHeading,
  WDStyledAmountLabel,
  WDStyledGainAmount,
} from '../../components/ui/WDTypography'
import { ClientContext } from '../../services/clientContext/ClientContext'

const Accounts = ({
  accountNumber,
  accountTitle,
  totalAmount,
  valueChange,
  pctChange,
  isValueDown,
  buttonTitle,
  onClick,
  isCollapsed,
  holdingsButtonHandler,
  activityButtonHandler,
  titleNavigationHandler,
  dropdownItemsArray,
  haveButtons = true,
}: AccountProps) => {
  const [showOptions, setShowOptions] = useState(false)
  const { setSelectedAccount } = useContext<any>(ClientContext)
  const navigate = useNavigate()
  const moreButtonHandler = () => {
    setShowOptions(!showOptions)
  }

  return (
    <Wrapper>
      <TopContainer showOptions={showOptions}>
        <TitleWrapper onClick={titleNavigationHandler}>
          <WDStyledAccountHeading>
            <Label>{accountTitle}</Label>
          </WDStyledAccountHeading>
        </TitleWrapper>
        {haveButtons && (
          <ButtonRow
            buttons={[
              { children: 'Holdings', onClick: holdingsButtonHandler },
              { children: 'Activity', onClick: activityButtonHandler },
              {
                children: 'More',
                suffixedIcon: showOptions ? (
                  <SvgChevronUpSmall fillColor={COLORS.Icons.PrimaryIcon} />
                ) : (
                  <SvgChevronDownSmall fillColor={COLORS.Icons.PrimaryIcon} />
                ),
                onClick: moreButtonHandler,
              },
            ]}
            color={Colors.PrimaryText}
            padding={'0px 8px'}
            fontWeight={600}
            fontSize={'14px'}
            lineHeight={'24px'}
            borderColor={BorderColors.PrimaryText}
            borderRadius={'4px'}
          />
        )}
      </TopContainer>
      {showOptions && (
        <MoreButtonWrapper>
          {dropdownItemsArray?.map((item: string, index) => (
            <DropdownItemWrapper
              key={index}
              onClick={() => {
                navigate(item?.toLowerCase().replace(/\s/g, ''))
                setSelectedAccount({
                  accountNumber: accountNumber,
                  accountName: accountTitle,
                })
              }}
            >
              <Label
                fontStyle={'regular'}
                fontWeight={400}
                fontSize={'16px'}
                lineHeight={'24px'}
                color={Colors.NeutralText}
              >
                {item}
              </Label>
              <Divider
                thickness={'1px'}
                horizontal={true}
                bgColor={Backgrounds.Gray30}
              />
            </DropdownItemWrapper>
          ))}
        </MoreButtonWrapper>
      )}
      <AccountDetailsWrapper>
        <WDStyledAmountLabel>
          <Label>{totalAmount}</Label>
        </WDStyledAmountLabel>
        {valueChange && (
          <WDStyledGainAmount>
            <WDGainLossText isDown={isValueDown}>
              <Label>{valueChange}</Label>
            </WDGainLossText>
          </WDStyledGainAmount>
        )}
        {pctChange && (
          <PctChangeWrapper>
            {isValueDown ? (
              <SvgDecreaseMedium fillColor={COLORS.Icons.DangerIcon} />
            ) : (
              <SvgIncreaseMedium fillColor={COLORS.Icons.SuccessIcon} />
            )}

            <Label
              fontStyle={'normal'}
              fontSize={'20px'}
              lineHeight={'32px'}
              color={isValueDown ? Colors.DangerText : Colors.SuccessText}
              fontWeight={400}
            >
              {pctChange}
            </Label>
          </PctChangeWrapper>
        )}
      </AccountDetailsWrapper>
      <QuickViewBtnWrapper onClick={onClick}>
        <WDStyledAccordionLabel>
          <Label>{buttonTitle}</Label>
        </WDStyledAccordionLabel>
        <IconWrapper>
          {isCollapsed ? (
            <SvgChevronDownSmall fillColor={COLORS.Icons.PrimaryIcon} />
          ) : (
            <SvgChevronUpSmall fillColor={COLORS.Icons.PrimaryIcon} />
          )}
        </IconWrapper>
      </QuickViewBtnWrapper>
    </Wrapper>
  )
}

export default Accounts
