import { useContext } from "react";
import "./App.css";
import Register from "./components/auth/Register";
import Signin from "./components/auth/signin";
import AuthContext from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
