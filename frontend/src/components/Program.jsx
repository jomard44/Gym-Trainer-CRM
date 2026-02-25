import { useState, useEffect } from "react";
import fetchApi from "../api/fetchApi";
import { useNavigate } from "react-router-dom";
function Program() {
  const [program, setProgram] = useState({
    title: "",
    days: [
      {
        name: "",
        exercises: [
          {
            name: "",
            sets: "",
            reps: "",
          },
        ],
      },
    ],
  });
  const [selectedClient, setSelectedClient] = useState("");
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetchApi("clients");
        if (!res) {
          throw new Error("no clients returned");
        }
        setClients(res.clients);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClients();
  }, []);

  const handleChange = (e) => {
    setProgram({
      ...program,
      [e.target.name]: e.target.value,
    });
  };

  const handleDayChange = (e) => {
    const newDays = [...program.days];
    newDays[0].name = e.target.value;

    setProgram({ ...program, days: newDays });
  };
  const handleExerciseChange = (e) => {
    const newDays = [...program.days];
    newDays[0].exercises[0][e.target.name] = e.target.value;

    setProgram({ ...program, days: newDays });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedClient) {
      alert("Please select a client");
      return;
    }
    try {
      const res = await fetchApi("programs", {
        method: "POST",
        body: JSON.stringify({
          ...program,
          client: selectedClient,
        }),
      });
      if (!res) {
        throw new Error("can't create program");
      }
      setTimeout(() => {
        navigate("/");
      }, 1000);

      setProgram({
        title: "",
        days: [
          {
            name: "",
            exercises: [
              {
                name: "",
                sets: "",
                reps: "",
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[70vw] gap-4 mt-10 ml-[25%] p-10 bg-gray-600/70 text-white"
    >
      <select
        value={selectedClient}
        onChange={(e) => setSelectedClient(e.target.value)}
      >
        <option value="">Select Client</option>
        {clients.map((client) => (
          <option key={client._id} value={client._id}>
            {client.user.email}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="title"
        className="flex flex-col bg-white text-black "
        value={program.title}
        onChange={handleChange}
        placeholder="Program Title"
      />

      <input
        type="text"
        value={program.days[0].name}
        onChange={handleDayChange}
        className="flex flex-col bg-white text-black "
        placeholder="Day name (e.g. Chest Day)"
      />

      <input
        type="text"
        name="name"
        className="flex flex-col bg-white text-black "
        value={program.days[0].exercises[0].name}
        onChange={handleExerciseChange}
        placeholder="Exercise name"
      />

      <input
        type="number"
        name="sets"
        className="flex flex-col bg-white text-black "
        value={program.days[0].exercises[0].sets}
        onChange={handleExerciseChange}
        placeholder="Sets"
      />

      <input
        type="number"
        name="reps"
        className="flex flex-col bg-white text-black "
        value={program.days[0].exercises[0].reps}
        onChange={handleExerciseChange}
        placeholder="Reps"
      />

      <button
        className="bg-red-500/80 text-white p-1 m-2 w-[50vw] "
        type="submit"
      >
        Create Program
      </button>
    </form>
  );
}

export default Program;
