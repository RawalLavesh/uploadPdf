import { useContext, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Label from '../../components/label/Label'
import { Icons } from '../../shared/GlobalStyle'
import {
  RootContainer,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledFormWrapper,
  Heading,
  SubHeading,
  Logo,
  LoginHeading,
  Wrapper,
  Form,
  PasswordFlex,
  EmailFlex,
  FooterOne,
} from './styles'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../../composites/submitLocate/styles'
import { AxiosError } from 'axios'
import { AuthContext, setWithExpiry } from '../../store/LoginAuthContext'
import * as uuid from 'uuid'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import { LoginRequestModel } from '../../shared/models/ILogin'
import authenticate from '../../apiConfig/authConfig'
import { Toast } from '../../components/toast/Toast'
import {
  StyledLoginLabelHeading,
  WDLabel,
  WDLabelBrand,
  WDLabelBrandLarge,
  WDLabelFooter,
} from '../../components/ui/WDLabel'
import { WDButtonLarge } from '../../components/ui/WDButton'

const LogOnPage = () => {
  type LocationState = {
    redirectUrl: string
  }

  const [isLoading, setIsLoading] = useState(false)
  const [loginStatus, setLoginStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const { setLogin, setSessionId, setUser, setRelatedUsers } =
    useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const userNameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const isUserNameValid = (userName: string) => {
    return userName && userName.trim() !== '' && userName.length > 3
  }
  const isPasswordValid = (password: string) => {
    return password && password.trim() !== '' && password.length > 6
  }

  const onSubmit = async () => {
    localStorage.removeItem('authToken')
    navigate(`/submit`)
    const userName = userNameRef.current?.value
      ? userNameRef.current?.value
      : ''
    const password = passwordRef.current?.value
      ? passwordRef.current?.value
      : ''
    if (isUserNameValid(userName) && isPasswordValid(password)) {
      setWithExpiry('traceId', uuid.v4())
      const loginCredential: LoginRequestModel = {
        userName,
        password,
      }
      setIsLoading(true)
      authenticate(loginCredential)
        .then((response) => {
          if (response.status === 200 && response.data) {
            setIsLoading(false)
            const message = response.data.message
            if (message === 'Login user exist') {
              const user = {
                firmName: response.data.firmName,
                roleName: response.data.roleName,
                uid: response.data.uid,
                userName: response.data.userName,
              }
              setLogin(true)
              setSessionId(response.data.sessionId)
              setUser(user)
              setRelatedUsers(response.data.relatedUser)
              const redirectUrl = (location.state as LocationState)?.redirectUrl
              if (redirectUrl) {
                navigate(redirectUrl)
              } else {
                navigate(`/submit`)
              }
            } else {
              setLogin(false)
              setLoginStatus({
                status: false,
                text: response.data.message,
              })
              return
            }
          }
        })
        .catch((error: AxiosError) => {
          setIsLoading(false)
          setLogin(false)
          setLoginStatus({
            status: false,
            text: error.response ? error.response.statusText : error.message,
          })
        })
    } else {
      setLogin(false)
      setLoginStatus({
        status: false,
        text: 'Invalid User Name or Password format',
      })
    }
  }

  const submitForm = (event: SubmitEvent) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <>
      <LandingPageLayout>
        <RootContainer>
          <StyledImageWrapper>
            <Wrapper>
              <Heading>
                <WDLabelBrandLarge>
                  <Label>{'RISING ABOVE'}</Label>
                </WDLabelBrandLarge>
              </Heading>
              <SubHeading>
                <WDLabelBrand>
                  <Label>
                    {
                      'Providing exceptional clearing and custody service for over 40 years'
                    }
                  </Label>
                </WDLabelBrand>
              </SubHeading>
            </Wrapper>
          </StyledImageWrapper>
          <StyledContentWrapper>
            <StyledFormWrapper>
              <Logo>
                <img src={Icons.WedbushLogo} alt="Site Logo" />
              </Logo>
              <LoginHeading>
                <StyledLoginLabelHeading>
                  <Label>{'Welcome Back'}</Label>
                </StyledLoginLabelHeading>
              </LoginHeading>
              <Form onSubmit={submitForm}>
                <EmailFlex>
                  <WDLabel>
                    <Label>{'Username'}</Label>
                  </WDLabel>
                  <Textbox
                    type={'text'}
                    reference={userNameRef}
                    placeholder="Enter your username"
                  />
                </EmailFlex>
                <PasswordFlex>
                  <WDLabel>
                    <Label>{'Password'}</Label>
                  </WDLabel>
                  <Textbox
                    type={'password'}
                    reference={passwordRef}
                    placeholder="Enter your password"
                  />
                </PasswordFlex>
                <WDButtonLarge>
                  <Button type={'submit'}>{'Login'}</Button>
                </WDButtonLarge>
              </Form>
            </StyledFormWrapper>
            <FooterOne>
              <WDLabelFooter>
                <Label>
                  {
                    'For account setup and any other questions, please contact our customer service at (213) 688-4357'
                  }
                </Label>
              </WDLabelFooter>
            </FooterOne>
          </StyledContentWrapper>
          {isLoading && (
            <SpinnerWrapper>
              <LottieWrapper>
                <Lottie animationData={Loader} loop={true} />
              </LottieWrapper>
            </SpinnerWrapper>
          )}
          {loginStatus.status !== null && loginStatus.status === false && (
            <ToastWrapper>
              <Toast
                text={loginStatus.text}
                type={'danger'}
                openStatusCallback={(status: boolean) =>
                  setLoginStatus({
                    status: status ? status : null,
                    text: '',
                  })
                }
              />
            </ToastWrapper>
          )}
        </RootContainer>
      </LandingPageLayout>
    </>
  )
}

export default LogOnPage
