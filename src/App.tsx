import { FC, useContext, lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './store/LoginAuthContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const PageContent = lazy(() => import('./pages/landingPage/LandingPage'))
const ReviewLocate = lazy(() => import('./pages/reviewLocatePage/ReviewPage'))
const DocUpload = lazy(() => import('./pages/docUploadPage/DocUploadPage'))

const App: FC = () => {
  const authContext = useContext(AuthContext)
  return (
    // <AuthContext.Provider value={authContext}>
      <Suspense>
        <Routes>
          <Route element={<HomePage />}>
            <Route path="/submit" element={<PageContent />} />
            <Route path="/reviewlocate" element={<ReviewLocate />} />
            <Route path="/docupload" element={<DocUpload />} />
          </Route>
          <Route path="/" element={<Navigate to="/submit" />} />
          <Route path="*" element={<Navigate to="/submit" />} />
        </Routes>
      </Suspense>
    // </AuthContext.Provider>
  )
}

export default App
