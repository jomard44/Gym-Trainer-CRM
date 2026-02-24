import { useState, useContext } from "react";
import fetchApi from "../../api/fetchApi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerUser = await fetchApi("users/register", {
        method: "POST",
        body: JSON.stringify(user),
      });
      

      navigate("/signin");
      setUser({ email: "", password: "", role: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-[70vw] gap-4 mt-10 ml-[25%] p-10 bg-gray-600/70 text-white"
      onSubmit={handleSubmit}
    >
      <h1>Register</h1>
      <label className="flex flex-col">
        Email
        <input
          className="bg-white text-black "
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col">
        Password
        <input
          className="bg-white text-black "
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col">
        Role
        <input
          className="bg-white text-black "
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
        />
      </label>
      <button className="bg-red-500/80 text-white p-1 m-2 w-[50vw] ">
        Register
      </button>
      <p>already have an account?</p>
      <Link to="/signin">Signin</Link>
    </form>
  );
};

export default Register;
