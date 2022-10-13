import { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Divider from '../../components/divider/Divider'
import Label from '../../components/label/Label'
import {
  SvgChevronDownMedium,
  SvgChevronDownSmall,
  SvgChevronUpMedium,
  SvgChevronUpSmall,
} from '../../components/svg/SvgChevron'
import SvgQuestionCircle from '../../components/svg/SvgQuestionCircle'
import {
  WDSecondaryText,
  WDStyledCollapsedCardHeadingAmountLabel,
  WDStyledOrderEntryButtonText,
  WDStyledOrderEntryButtonTextSemiBold,
  WDStyledOrderEntryButtonTextSubHeading,
  WDStyledOrderEntryWidgetText,
  WDStyledOrderTypeText,
  WDStyledWidgetSubHeading,
} from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import { Tooltip } from '../tooltip/Tooltip'
import {
  ButtonWrapper,
  CashMarginWrapper,
  CombinedAccountTypeWrapper,
  CombinedLabelWrapper,
  DropdownWrapper,
  MarketOrderDropdownWrapper,
  Wrapper,
  AccountListWrapper,
  StyledLabelWrapper,
  GeneralInvestmentWrapper,
  FirstRowWrapper,
  SingleAccountWrapper,
  AccountTypeCashWrapper,
  AccountTypeMarginWrapper,
  OrderTypeListWrapper,
  ButtonLabelWrapper,
  StyledDiv,
  OrderTypeListItemsWrapper,
  CombinedDropdownWrapper,
  CombinedOrderTypeWrapper,
  ChevronLeftWrapper,
  AdvancedWrapper,
  SellShortWrapper,
} from './styles'

export const SelectAccount = ({ setContinue, selectOrderType }: any) => {
  const [showAccountOptions, setShowAccountOptions] = useState(false)
  const [showOrderTypeOptions, setShowOrderTypeOptions] = useState(false)
  const [accountType, setAccountType] = useState(false)
  const [toggleAdvance, setToggleAdvance] = useState(false)
  const [toggleButton, setToggleButton] = useState(false)
  const [accountSelected, setAccountSelected] = useState('Select Account')
  const [selectedOrderType, setSelectedOrderType] = useState('')
  const [selectedCashMargin, setSelectedCashMargin] = useState('')
  const [selectedBuySell, setSelectedBuySell] = useState('')
  const [showTooltip, setShowToolTip] = useState(false)
  const [orderType, setOrderType] = useState({
    label: 'Market Order',
    description: 'Buy or sell a stock at whatever price is available.',
  })

  const orderTypeList = [
    {
      label: 'Limit Order',
      description: 'Buy or sell a stock for on a specific price.',
    },
    {
      label: 'Stop Order',
      description:
        'Your order will execute when the price goes below a certain price.',
    },
    {
      label: 'Stop Limit Order',
      description:
        'Allows you to put a stop and limit order to buy or sell to limit risk.',
    },
  ]
  useEffect(() => {
    if (selectedBuySell !== '' && accountSelected !== 'Select Account') {
      setContinue(false)
    } else if (setContinue === false) {
      setSelectedBuySell('')
      setAccountSelected('Select Account')
      setSelectedCashMargin('')
      setSelectedOrderType('')
    }
    if (showTooltip) {
      setTimeout(() => {
        setShowToolTip(false)
      }, 3000)
    }
  }, [selectedBuySell, showTooltip, selectedOrderType])

  return (
    <Wrapper>
      <WDStyledOrderTypeText>
        <Label> Select Account Order Type</Label>
      </WDStyledOrderTypeText>
      <CombinedDropdownWrapper>
        <DropdownWrapper>
          <Button
            type={'button'}
            color={COLORS.UI.BackgroundStrong}
            suffixedIcon={
              showAccountOptions ? (
                <SvgChevronUpMedium
                  fillColor={COLORS.Background.NeutralIcons}
                />
              ) : (
                <SvgChevronDownMedium
                  fillColor={COLORS.Background.NeutralIcons}
                />
              )
            }
            onClick={() => setShowAccountOptions(!showAccountOptions)}
            bgColor={
              accountSelected !== 'Select Account'
                ? COLORS.Background.NeutralBorder
                : COLORS.Background.Primary
            }
          >
            {' '}
            <WDStyledOrderTypeText>
              <Label> {accountSelected} </Label>
            </WDStyledOrderTypeText>
          </Button>
        </DropdownWrapper>
        {showAccountOptions && (
          <AccountListWrapper>
            <GeneralInvestmentWrapper
              onClick={() => {
                setAccountSelected('General Investment')
                setShowAccountOptions(false)
                setAccountType(true)
              }}
            >
              <WDStyledWidgetSubHeading>
                <Label>General Investment</Label>
              </WDStyledWidgetSubHeading>
              <FirstRowWrapper>
                <StyledLabelWrapper>
                  <Label>Cash</Label>
                </StyledLabelWrapper>
                <WDSecondaryText>
                  <Label>$1111555</Label>
                </WDSecondaryText>
              </FirstRowWrapper>
              <FirstRowWrapper>
                <StyledLabelWrapper>
                  <Label>Marginable</Label>
                </StyledLabelWrapper>
                <WDSecondaryText>
                  <Label>$1111555</Label>
                </WDSecondaryText>
              </FirstRowWrapper>
            </GeneralInvestmentWrapper>
            <Divider thickness={'1px'} horizontal={true} bgColor={'#CBD5E1'} />
            <SingleAccountWrapper
              onClick={() => {
                setAccountSelected('Shri Account')
                setShowAccountOptions(false)
                setAccountType(false)
              }}
            >
              <WDStyledWidgetSubHeading>
                <Label>Shri Account</Label>
              </WDStyledWidgetSubHeading>
              <FirstRowWrapper>
                <StyledLabelWrapper>
                  <Label>Cash</Label>
                </StyledLabelWrapper>
                <WDSecondaryText>
                  <Label>$1111555</Label>
                </WDSecondaryText>
              </FirstRowWrapper>
            </SingleAccountWrapper>
          </AccountListWrapper>
        )}
      </CombinedDropdownWrapper>

      {accountType ? (
        <CashMarginWrapper>
          <CombinedAccountTypeWrapper>
            <AccountTypeCashWrapper
              className={selectedCashMargin}
              onClick={() => setSelectedCashMargin('selectedCash')}
            >
              <WDStyledCollapsedCardHeadingAmountLabel>
                <Label> $10000000</Label>
              </WDStyledCollapsedCardHeadingAmountLabel>
              <CombinedLabelWrapper>
                <WDStyledOrderEntryButtonText>
                  <Label>Cash</Label>
                </WDStyledOrderEntryButtonText>
                <WDStyledOrderEntryWidgetText>
                  <Label>Trade with available cash</Label>
                </WDStyledOrderEntryWidgetText>
              </CombinedLabelWrapper>
            </AccountTypeCashWrapper>
            <AccountTypeMarginWrapper
              className={selectedCashMargin}
              onClick={() => setSelectedCashMargin('selectedMargin')}
            >
              <WDStyledCollapsedCardHeadingAmountLabel>
                <Label> $485</Label>
              </WDStyledCollapsedCardHeadingAmountLabel>
              <CombinedLabelWrapper>
                <WDStyledOrderEntryButtonText>
                  <Label>Margin</Label>
                </WDStyledOrderEntryButtonText>
                <WDStyledOrderEntryWidgetText>
                  <Label>Borrow to Trade</Label>
                </WDStyledOrderEntryWidgetText>
              </CombinedLabelWrapper>
            </AccountTypeMarginWrapper>
          </CombinedAccountTypeWrapper>
        </CashMarginWrapper>
      ) : null}

      <WDStyledOrderTypeText>
        <Label> What do you want to do? </Label>
      </WDStyledOrderTypeText>
      <ButtonWrapper>
        <Button
          type={'button'}
          color={COLORS.UI.BackgroundStrong}
          onClick={() => {
            setSelectedBuySell('selectedBuy')
            setToggleButton(!toggleButton)
          }}
          bgColor={
            selectedBuySell === 'selectedBuy' && toggleButton
              ? COLORS.Background.NeutralBorder
              : COLORS.Background.Primary
          }
        >
          <WDStyledOrderEntryButtonText>
            <Label>Buy</Label>
          </WDStyledOrderEntryButtonText>
        </Button>
        <Button
          type={'button'}
          color={COLORS.UI.BackgroundStrong}
          onClick={() => {
            setSelectedBuySell('selectedSell')
            setToggleButton(!toggleButton)
          }}
          bgColor={
            selectedBuySell === 'selectedSell' && toggleButton
              ? COLORS.Background.NeutralBorder
              : COLORS.Background.Primary
          }
        >
          <WDStyledOrderEntryButtonText>
            <Label>Sell</Label>
          </WDStyledOrderEntryButtonText>
        </Button>
      </ButtonWrapper>
      <AdvancedWrapper
        onClick={() => {
          setToggleAdvance(!toggleAdvance)
        }}
      >
        <Label>Advanced</Label>
        {!toggleAdvance ? (
          <SvgChevronDownSmall fillColor={COLORS.Icons.PrimaryIcon} />
        ) : (
          <SvgChevronUpSmall fillColor={COLORS.Icons.PrimaryIcon} />
        )}
      </AdvancedWrapper>
      {toggleAdvance ? (
        <SellShortWrapper>
          <Button
            type={'button'}
            color={COLORS.UI.BackgroundStrong}
            onClick={() => {
              setSelectedBuySell('selectedSellShort')
              setToggleButton(!toggleButton)
            }}
            bgColor={
              selectedBuySell === 'selectedSellShort' &&
              selectedCashMargin === 'selectedMargin' &&
              toggleButton
                ? COLORS.Background.NeutralBorder
                : COLORS.Background.Primary
            }
          >
            <>
              <WDStyledOrderEntryButtonText>
                <Label>Sell Short</Label>
              </WDStyledOrderEntryButtonText>
              <StyledDiv onMouseEnter={() => setShowToolTip(!showTooltip)}>
                <SvgQuestionCircle fillColor={COLORS.Background.NeutralIcons} />
              </StyledDiv>
            </>
          </Button>
          {showTooltip && <Tooltip />}
        </SellShortWrapper>
      ) : (
        <></>
      )}
      <WDStyledOrderTypeText>
        <Label> Order Type</Label>
      </WDStyledOrderTypeText>
      <CombinedOrderTypeWrapper>
        <MarketOrderDropdownWrapper className={selectedOrderType}>
          <Button
            type={'button'}
            color={COLORS.UI.BackgroundStrong}
            suffixedIcon={
              showOrderTypeOptions ? (
                <SvgChevronUpMedium
                  fillColor={COLORS.Background.NeutralIcons}
                />
              ) : (
                <SvgChevronDownMedium
                  fillColor={COLORS.Background.NeutralIcons}
                />
              )
            }
            onClick={() => setShowOrderTypeOptions(!showOrderTypeOptions)}
            bgColor={selectedOrderType === 'selectedOrderType'
            ? COLORS.Background.NeutralBorder
            : COLORS.Background.Primary}
          >
            <ButtonLabelWrapper>
              <StyledDiv>
                <WDStyledOrderEntryButtonTextSemiBold>
                  <Label>{orderType.label}</Label>
                </WDStyledOrderEntryButtonTextSemiBold>
              </StyledDiv>
              <StyledDiv>
                <WDStyledOrderEntryButtonTextSubHeading>
                  <Label>{orderType.description}</Label>
                </WDStyledOrderEntryButtonTextSubHeading>
              </StyledDiv>
            </ButtonLabelWrapper>
          </Button>
        </MarketOrderDropdownWrapper>
        {showOrderTypeOptions && (
          <OrderTypeListWrapper>
            {orderTypeList.map((item, index) => (
              <OrderTypeListItemsWrapper
                key={index}
                onClick={() => {
                  setShowOrderTypeOptions(false)
                  setOrderType({
                    label: item.label,
                    description: item.description,
                  })
                  selectOrderType(item.label)
                  setSelectedOrderType('selectedOrderType')
                }}
              >
                <WDStyledOrderEntryButtonTextSemiBold>
                  <Label>{item.label}</Label>
                </WDStyledOrderEntryButtonTextSemiBold>
                <WDStyledOrderEntryButtonTextSubHeading>
                  <Label>{item.description}</Label>
                </WDStyledOrderEntryButtonTextSubHeading>
              </OrderTypeListItemsWrapper>
            ))}
          </OrderTypeListWrapper>
        )}
      </CombinedOrderTypeWrapper>
    </Wrapper>
  )
}
