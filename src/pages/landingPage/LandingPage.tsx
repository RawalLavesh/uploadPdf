import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LandingPageLayout } from './styles'
import { MainContentWrapper } from '../../components/layouts/landingPage/styles'
import { Submit } from '../../composites/submitLocate/SubmitLocate'
import { AuthContext } from '../../store/LoginAuthContext'

const PageContent = () => {
  const { isLoggedIn } = useContext(AuthContext)

  // if (isLoggedIn) {
    return (
      <LandingPageLayout>
        <MainContentWrapper>
          <Submit />
        </MainContentWrapper>
      </LandingPageLayout>
    )
  // } else {
  //   return <Navigate to={{ pathname: '/login' }} state={{redirectUrl: '/submit'}} />
  // }
}

export default PageContent
