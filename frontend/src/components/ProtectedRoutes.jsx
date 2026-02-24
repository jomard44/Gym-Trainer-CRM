import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./context/authContext";
const ProtectedRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};
export default ProtectedRoutes
