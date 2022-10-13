import {
  AccountsBlock,
  AccountWrapper,
  RootContainer,
  StyledAccountContainer,
  TotalAccountWrapper,
} from './styles'
import { ClientContext } from '../../services/clientContext/ClientContext'
import { Fragment, useContext } from 'react'
import { useState } from 'react'
import { CardHeader } from '../../composites/cardHeader/CardHeader'
import AccountBalance from '../../composites/accountBalance/AccountBalance'
import { AccountListInterface } from '../../services/clientContext/AccountListInterface'
import { WDCard } from '../../components/ui/WDCard'

const NonRetirementAccountContainer = () => {
  const clientCtx = useContext(ClientContext)
  const accountListContext = clientCtx?.accountBalance?.accountList
  const checkNonRetireAccount = accountListContext?.filter(
    (item) => item.taxable === false
  )

  return (
    <StyledAccountContainer>
      {checkNonRetireAccount !== null && checkNonRetireAccount !== undefined
        ? checkNonRetireAccount.map((item: AccountListInterface) => {
            return (
              <Fragment key={item.accountNumber}>
                <AccountsBlock>
                  <AccountWrapper>
                    <TotalAccountWrapper>
                      <AccountBalance
                        accountNumber={item.accountNumber}
                        accountTitle={item.accountName}
                        isValueDown={item.isTodaysGainLossValueDown}
                        totalAmount={item.accountBalance}
                        valueChange={item.todayGainLossValue}
                        pctChange={item.totalGainLossPct}
                        cashValue={item.cashValue}
                        margin={item.margin}
                        marketValue={item.marketValue}
                      />
                    </TotalAccountWrapper>
                  </AccountWrapper>
                </AccountsBlock>
              </Fragment>
            )
          })
        : null}
    </StyledAccountContainer>
  )
}

const RetirementAccountContainer = () => {
  const clientCtx = useContext(ClientContext)
  const accountListContext = clientCtx?.accountBalance?.accountList
  const checkRetireAccount = accountListContext?.filter(
    (item) => item.taxable === true
  )

  return (
    <StyledAccountContainer>
      {checkRetireAccount !== null && checkRetireAccount !== undefined
        ? checkRetireAccount.map((item: AccountListInterface) => {
            return (
              <Fragment key={item.accountNumber}>
                <AccountsBlock>
                  <AccountWrapper>
                    <TotalAccountWrapper>
                      <AccountBalance
                        accountNumber={item.accountNumber}
                        accountTitle={item.accountName}
                        totalAmount={item.accountBalance}
                        valueChange={item.todayGainLossValue}
                        pctChange={item.totalGainLossPct}
                        isValueDown={item.isTodaysGainLossValueDown}
                        cashValue={item.cashValue}
                        margin={item.margin}
                        marketValue={item.marketValue}
                      />
                    </TotalAccountWrapper>
                  </AccountWrapper>
                </AccountsBlock>
              </Fragment>
            )
          })
        : null}
    </StyledAccountContainer>
  )
}

const AccountsWidget = () => {
  const clientCtx = useContext(ClientContext)
  const nonRetirement = clientCtx?.accountBalance?.nonRetirement
  const retirement = clientCtx?.accountBalance?.retirement
  const [isCollapsedNonRetire, setIsCollapsedNonRetire] = useState(false)
  const [isCollapsedRetire, setIsCollapsedRetire] = useState(false)
  function accordionHandlerRetire() {
    setIsCollapsedRetire(!isCollapsedRetire)
  }
  function accordionHandlerNonRetire() {
    setIsCollapsedNonRetire(!isCollapsedNonRetire)
  }
  return (
    <>
      <RootContainer>
        {nonRetirement != '' && nonRetirement != undefined ? (
          <WDCard isCollapsed={isCollapsedNonRetire}>
            <CardHeader
              isCollapsed={isCollapsedNonRetire}
              accordionHandler={accordionHandlerNonRetire}
              label={'Non-Retirement Accounts '}
              amountValue={'Total: ' + nonRetirement}
              icon={true}
            ></CardHeader>
          </WDCard>
        ) : null}

        {!isCollapsedNonRetire && <NonRetirementAccountContainer />}
      </RootContainer>
      <RootContainer>
        {retirement != '' && retirement != undefined ? (
          <WDCard isCollapsed={isCollapsedRetire}>
            <CardHeader
              isCollapsed={isCollapsedRetire}
              accordionHandler={accordionHandlerRetire}
              label={'Retirement Accounts '}
              amountValue={'Total: ' + clientCtx?.accountBalance?.retirement}
              icon={true}
            />
          </WDCard>
        ) : null}
        {!isCollapsedRetire && <RetirementAccountContainer />}
      </RootContainer>
    </>
  )
}
export default AccountsWidget
