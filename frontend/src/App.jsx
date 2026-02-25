import "./App.css";
import Register from "./components/auth/Register";
import Signin from "./components/auth/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AddClient from "./components/AddClient";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/add-client" element={<AddClient />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
