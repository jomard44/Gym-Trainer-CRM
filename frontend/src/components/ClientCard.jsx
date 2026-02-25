function ClientCard({ client, goal, age, program }) {
  return (
    <div className="flex flex-col bg-gray-500/30 text-white p-4 rounded">
      <h2 className="font-bold">{client}</h2>
      <p>Age: {age}</p>
      <p>Goal: {goal}</p>
      <p>Program: {program}</p>
    </div>
  );
}

export default ClientCard;
