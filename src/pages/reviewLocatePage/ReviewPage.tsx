import { Review } from '../../composites/reviewLocate/ReviewLocate'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../store/LoginAuthContext'

const ReviewPage = () => {
  const { isLoggedIn } = React.useContext(AuthContext)
  // if (isLoggedIn) {
    return <Review />
  // } else {
  //   return (
  //     <Navigate
  //       to={{ pathname: '/login' }}
  //       state={{ redirectUrl: '/reviewlocate' }}
  //     />
  //   )
  // }
}
export default ReviewPage
