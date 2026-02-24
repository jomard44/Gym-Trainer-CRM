import { createContext, useState, useEffect } from "react";
import fetchApi from "../api/fetchApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchAuth = async () => {
    try {
      const res = await fetchApi("users/me");
      if (!res) {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, fetchAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
