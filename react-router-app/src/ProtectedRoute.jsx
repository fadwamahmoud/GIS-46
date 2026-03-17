import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  // logged in
  // /profile
  // /dashboard => redirect

  // stored in localStorage
  // cookie
  // user => login
  const isLoggedIn = true;

  //localstorage
  // cookie
  // session
  if (!isLoggedIn) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
