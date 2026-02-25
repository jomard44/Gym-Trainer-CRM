import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/authContext.jsx";
import fetchApi from "../api/fetchApi";
import Navbar from "../components/Navbar";
import ClientCard from "./ClientCard.jsx";

function Dashboard() {
  const { isAuth } = useContext(AuthContext);
  const [dashInfo, setDashInfo] = useState(null);
  const getData = async () => {
    try {
      const data = await fetchApi("dashboard/trainer/dash");
      if (!data) {
        setDashInfo({ clients: [] });
        return;
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
  }, [isAuth]);
  return (
    <> 
      <Navbar />
      <h1 className="text-center text-xl h-[10vh] m-4">dashboard</h1>
      {dashInfo?.clients?.map((client) => (
        <ClientCard
          key={client._id}
          client={client.user?.email}
          age={client.age}
          goal={client.goals}
          program={"No program yet"}
        />
      ))}
      {dashInfo?.clients?.length === 0 && (
        <p className="text-center text-xl mt-[25%]">you have no clients</p>
      )}
    </>
  );
}

export default Dashboard;
