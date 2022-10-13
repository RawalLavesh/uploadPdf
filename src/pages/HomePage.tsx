import LandingPageLayout from '../components/layouts/landingPage/LandingPageLayout'
import HeaderLayout from '../components/layouts/header/HeaderLayout'
import FooterLayout from '../components/layouts/footer/FooterLayout'
import { Outlet } from 'react-router-dom'
import { BodyPane, MainPane, SubWrapper } from './styles'
import HeaderContent from './landingPage/headerContent/HeaderContent'
import FooterContent from './landingPage/footerContent/FooterContent'
import { useEffect, useRef } from 'react'

function PageContent() {
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    mainRef.current &&
    mainRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  })
  return (
    <MainPane>
      <HeaderLayout>
        <HeaderContent />
      </HeaderLayout>
      <BodyPane ref={mainRef}>
        <SubWrapper>
          <Outlet />
        </SubWrapper>
        <FooterLayout>
          <FooterContent />
        </FooterLayout>
      </BodyPane>
    </MainPane>
  )
}

const HomePage = () => {
  return (
    <LandingPageLayout>
      <PageContent />
    </LandingPageLayout>
  )
}

export default HomePage
