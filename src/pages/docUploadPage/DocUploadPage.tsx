import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DocUploadPageLayout } from './styles'
import { MainContentWrapper } from '../../components/layouts/landingPage/styles'
import { AuthContext } from '../../store/LoginAuthContext'
import { UploadDoc } from '../../composites/uploadDoc/UploadDoc'
import { CoverageList } from '../../composites/coverageList/CoverageList'

const DocUploadPage = () => {
  const { isLoggedIn } = useContext(AuthContext)

  // if (isLoggedIn) {
  return (
    <DocUploadPageLayout>
      <MainContentWrapper>
        {/* <UploadDoc /> */}
        <CoverageList />
      </MainContentWrapper>
    </DocUploadPageLayout>
  )
  // } else {
  //   return <Navigate to={{ pathname: '/login' }} state={{redirectUrl: '/submit'}} />
  // }
}

export default DocUploadPage
