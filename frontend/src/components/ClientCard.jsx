import { Link } from "react-router-dom";
function ClientCard({ client, goal, age, program }) {
  return (
    <div className="flex flex-col bg-gray-500/70 text-white p-4 border border-white/70  rounded ">
      <h2 className="font-bold">{client}</h2>
      <p>Age: {age}</p>
      <p>Goal: {goal}</p>
      <p>Program: {program}</p>
      <div className="flex gap-2 items-center justify-center ">
        <Link className="bg-blue-500/70 w-full text-center" to="edit-client">Edit</Link>
        <Link className="bg-red-500/70 w-full text-center" to="delete-client">Delete</Link>
      </div>
    </div>
  );
}

export default ClientCard;
