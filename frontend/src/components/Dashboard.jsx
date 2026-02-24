import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/authContext.jsx";
import fetchApi from "../api/fetchApi";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { isAuth } = useContext(AuthContext);
  const [dashInfo, setDashInfo] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchApi("dashboard/trainer/me");
      if (!data) {
        return <p>no data available</p>;
      }

      setDashInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isAuth) {
      getData();
    }
  }, []);
  return (
    <>
    <Navbar/>
      <h1>dashboard</h1>
      {dashInfo && <>{dashInfo.data}</>}
    </>
  );
}

export default Dashboard;
