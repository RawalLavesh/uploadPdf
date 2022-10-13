import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AccountBalanceWrapperOne,
  InnerContainer,
  InnerWrapper,
  Wrapper,
} from './styles'
import TotalAccountValue from '../totalAccountValue/TotalAccountValue'
import Divider from '../../components/divider/Divider'
import { AccountProps } from './IAccountBalance'
import { COLORS } from '../../theme/Colors'
import Accounts from '../accounts/Accounts'
import { ClientContext } from '../../services/clientContext/ClientContext'

const AccountBalance = ({
  accountNumber,
  accountTitle,
  totalAmount,
  valueChange,
  pctChange,
  isValueDown,
  cashValue,
  margin,
  marketValue,
}: AccountProps) => {
  const [showDetail, setShowDetail] = useState(false)
  const navigate = useNavigate()
  const { setSelectedAccount } = useContext<any>(ClientContext)

  function viewBalanceHandler() {
    setShowDetail(!showDetail)
  }

  const holdingsButtonHandler = () => {
    navigate('holdings')
    setSelectedAccount({
      accountNumber: accountNumber,
      accountName: accountTitle,
    })
  }

  const activityButtonHandler = () => {
    navigate('activity')
    setSelectedAccount({
      accountNumber: accountNumber,
      accountName: accountTitle,
    })
  }
  const btnTitle = showDetail ? 'Close Balance' : 'View Balance'
  return (
    <>
      <Wrapper>
        <Accounts
          accountNumber={accountNumber}
          accountTitle={accountTitle}
          isValueDown={isValueDown}
          totalAmount={totalAmount}
          valueChange={valueChange}
          pctChange={pctChange}
          buttonTitle={btnTitle}
          isCollapsed={!showDetail}
          onClick={viewBalanceHandler}
          holdingsButtonHandler={holdingsButtonHandler}
          activityButtonHandler={activityButtonHandler}
          titleNavigationHandler={holdingsButtonHandler}
          dropdownItemsArray={['Projected Income', 'Balances', 'Documents']}
        />
      </Wrapper>
      {showDetail && (
        <>
          <Divider
            thickness={'1px'}
            horizontal={true}
            bgColor={COLORS.Background.Border}
          />
          <InnerContainer>
            <AccountBalanceWrapperOne>
              <InnerWrapper>
                <TotalAccountValue title={'Cash Balance'} value={cashValue} />
              </InnerWrapper>
              <InnerWrapper>
                <TotalAccountValue title={'Margin Balance'} value={margin} />
              </InnerWrapper>
              <InnerWrapper>
                <TotalAccountValue title={'Market Value'} value={marketValue} />
              </InnerWrapper>
            </AccountBalanceWrapperOne>
          </InnerContainer>
        </>
      )}
    </>
  )
}
export default AccountBalance
