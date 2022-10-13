import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnchorTag } from '../../components/anchorTag/AnchorTag'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import SvgError400 from '../../components/svg/illustrations/SvgError400'
import SvgError500 from '../../components/svg/illustrations/SvgError500'
import { WDStyledHeading } from '../../components/ui/WDTypography'
import { ErrorInterface, ErrorObjectInterface } from './IErrorComposite'
import {
  ButtonContainer,
  Container,
  LinkContainer,
  StyledSubHeadingTextRegular,
} from './styles'

const ErrorComposite = ({ errorCode }: ErrorInterface) => {
  const [errorObject, setErrorObject] = useState<ErrorObjectInterface>({
    heading: '',
    message: '',
    linkTitle: '',
    linkUrl: '',
  })
  useEffect(() => {
    switch (errorCode) {
      case 401:
        setErrorObject({
          heading: '401 - You do not have access',
          message:
            'Your account is not authorized to view this page. Make sure the URL is correct and your account has access. You may request access by contacting support.',
          linkTitle: 'Sign out and login with different account',
          linkUrl: '/',
        })
        break
      case 403:
        setErrorObject({
          heading: '403 - Forbidden error',
          message:
            'You don’t have permission to view this page or resource. To view this page, you may have to sign in with a different account.',
          linkTitle: 'Sign out and login with different account',
          linkUrl: '/',
        })
        break
      case 404:
        setErrorObject({
          heading: '404 - Page not found',
          message:
            'The page you were looking for could not be found. It might have been removed, renamed or is temporarily unavailable.',
          linkTitle: 'Contact Support',
          linkUrl: '/contact-us',
        })
        break
      case 500:
        setErrorObject({
          heading: '500 - Internal server error',
          message:
            'We encountered an error and cannot fulfill your request. Our team is working to resolve the error as soon as possible. Please try again later or contact us if the issue persists.',
          linkTitle: 'Contact Support',
          linkUrl: '/contact-us',
        })
        break
      case 502:
        setErrorObject({
          heading: '502 - Server is taking too much time to respond',
          message:
            'Try refreshing the page, or going back and attempting the action again. Please contact us if the issue persists.',
          linkTitle: 'Contact Support',
          linkUrl: '/contact-us',
        })
        break
      case 503:
        setErrorObject({
          heading: '503 - Service Unavailable',
          message:
            'The server is currently unable to handle your request due to a temporary overload or scheduled maintenance. This issue has been logged, if the problem persist please contact us.',
          linkTitle: 'Contact Support',
          linkUrl: '/contact-us',
        })
        break
      case 504:
        setErrorObject({
          heading: '504 - Unable to connect',
          message:
            'We cannot stablish a connection with the server.  The page could be temporarily unavailable or too busy. If you are unable to load any pages, check your computer’s network connection.',
          linkTitle: 'Go Back Home',
          linkUrl: '/',
        })
        break
    }
  }, [errorCode])

  const navigate = useNavigate()
  const handleClick = () => navigate('/contact-us')
  return (
    <React.Fragment>
      <Container>
        {errorCode < 500 ? <SvgError400 /> : <SvgError500 />}
        <WDStyledHeading>
          <Label>{errorObject.heading}</Label>
        </WDStyledHeading>
        <StyledSubHeadingTextRegular>
          <Label>{errorObject.message}</Label>
        </StyledSubHeadingTextRegular>
        <ButtonContainer>
          {errorCode === 401 ? (
            <Button type={'button'} onClick={() => navigate('/contact-us')}>
              {'Request Access'}
            </Button>
          ) : errorCode === 502 || errorCode === 504 ? (
            <Button type={'button'} onClick={() => location.reload()}>
              {'Reload Page'}
            </Button>
          ) : (
            <Button type={'button'} onClick={() => navigate('/')}>
              {'Go back Home'}
            </Button>
          )}
        </ButtonContainer>
        <LinkContainer>
          <AnchorTag
            href={errorObject.linkUrl}
            title={errorObject.linkTitle}
            fontSize={''}
            fontWeight={0}
          />
        </LinkContainer>
      </Container>
    </React.Fragment>
  )
}

export default ErrorComposite
