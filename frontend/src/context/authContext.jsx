import { createContext, useState, useEffect } from "react";
import fetchApi from "../api/fetchApi";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const fetchAuth = async () => {
    try {
      const res = await fetchApi("users/me");
      if (!res) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } catch (error) {
      setIsAuth(false);
    }
  };
  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, fetchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
