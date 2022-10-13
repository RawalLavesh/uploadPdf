import { useState } from 'react'
import { AxiosError } from 'axios'
import { RootContainer } from './styles'
import { SiteMenuItem, SiteMenuList } from './MenuListData'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../../apiConfig/authConfig'
import Button from '../../../../components/button/Button'
import {
  LottieWrapper,
  SpinnerWrapper,
} from '../../../../composites/submitLocate/styles'
import Lottie from 'lottie-react'
import Loader from '../../../../assets/lottiefiles/loader.json'
import { Icon } from '../../../../components/icon/Icon'
import {
  WDButtonPrimaryTransparent,
} from '../../../../components/ui/WDButton'

export const FooterMenu = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const footerMenuList = SiteMenuList.filter((item) => item.id === 'SignOut')

  const removeUserData = () => {
    localStorage.removeItem('sessionId')
    localStorage.removeItem('traceId')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    localStorage.removeItem('relatedUsers')
  }

  const removeLogout = (param: string) => {
    setIsLoading(true)
    if (param === 'Sign out') {
      logout()
        .then((response) => {
          removeUserData()
          setIsLoading(false)
          navigate(`/`)
        })
        .catch((error: AxiosError) => {
          removeUserData()
          setIsLoading(false)
          navigate(`/`)
        })
    }
  }
  return (
    <>
      {footerMenuList.map((item: SiteMenuItem, index) => {
        return (
          <RootContainer key={index}>
            <WDButtonPrimaryTransparent>
              <Button
                onClick={() => removeLogout(item.name)}
                type={'button'}
                prefixedIcon={<Icon icon={item.src} />}
              >
                {item.name}
              </Button>
            </WDButtonPrimaryTransparent>
            {isLoading && (
              <SpinnerWrapper>
                <LottieWrapper>
                  <Lottie animationData={Loader} loop={true} />
                </LottieWrapper>
              </SpinnerWrapper>
            )}
          </RootContainer>
        )
      })}
    </>
  )
}
