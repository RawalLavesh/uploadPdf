import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { setupInterceptorsTo } from './services/Interceptor'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
setupInterceptorsTo()
