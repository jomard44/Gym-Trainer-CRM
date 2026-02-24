import { useContext } from "react";
import "./App.css";
import Register from "./components/auth/Register";
import Signin from "./components/auth/signin";
import AuthContext from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
