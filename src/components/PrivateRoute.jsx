import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
    // return <h3>Loading...</h3>
  }

  // outlet allow us to enter children Route
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute

