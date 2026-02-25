import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-red-400 text-white w-full h-[10vh]">
      <h1>gym beast</h1>
      <Link to="/add-client">add client</Link>
      <Link to="/create-program">create program</Link>
    </div>
  );
};

export default Navbar;
