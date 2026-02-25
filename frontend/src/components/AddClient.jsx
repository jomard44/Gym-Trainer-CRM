import { useState } from "react";
import fetchApi from "../api/fetchApi";

export default function AddClient() {
  const [client, setClient] = useState({
    name: "",
    goals: "",
    age: "",
    program: "",
    email: ""
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetchApi("clients", {
        method: "POST",
        body: JSON.stringify(client),
      });
      if(!res){
         throw new Error ("cant add client")
      }

      setClient({
        name: "",
        goals: "",
        age: "",
        program: "",
        email:""
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-[70vw] gap-4 mt-10 ml-[25%] p-10 bg-gray-600/70 text-white"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col">
        Name:
        <input
          type="text"
          name="name"
          className="bg-white text-black "
          value={client.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="flex flex-col">
        Email:
        <input
          type="email"
          name="email"
          className="bg-white text-black "
          value={client.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="flex flex-col">
        Goal:
        <input
          type="text"
          name="goals"
          className="bg-white text-black "
          value={client.goals}
          onChange={handleChange}
          required
        />
      </label>

      <label className="flex flex-col">
        Age:
        <input
          type="number"
          name="age"
          className="bg-white text-black "
          value={client.age}
          onChange={handleChange}
          required
        />
      </label>

      <label className="flex flex-col">
        Program:
        <input
          type="text"
          name="program"
          className="bg-white text-black "
          value={client.program}
          onChange={handleChange}
        />
      </label>

      <button
        className="bg-red-500/80 text-white p-1 m-2 w-[50vw] "
        type="submit"
      >
        Add Client
      </button>
    </form>
  );
}
