import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/authContext";
import { useContext } from "react";
const ProtectedRoutes = () => {
  const { isAuth,loading } = useContext(AuthContext);
  if(loading){
    return <p>Loading...</p>
  }
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};
export default ProtectedRoutes
