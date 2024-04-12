import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
function Signup() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    try {
      setRegister({
        ...register,

        [name]: value,
      });
    } catch (error) {
      setError(`Error is ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const URI = "/api/register";
      await axios
        .post(URI, register)
        .then((response) => {
          alert(`Loggedin  SuccessFully `);
          navigate("/login");
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      setError(`Error is ${error.message}`);
    }
  };

  return (
<div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat login-page">

<div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
  <div className="text-white">
    <div className="mb-8 flex flex-col items-center">
      
      <h1 className="mb-2 text-2xl">Dialkro</h1>
      <span className="text-gray-300">Enter Sign Up Details</span>
    </div>
    <form action="#" onSubmit={handleSubmit} >
      <div className="mb-4 text-lg">
        <input className="rounded-3xl border-none bg-red-400  px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" 
           id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Username"
              defaultValue={register.username}
              onChange={handleInputChange}
            />
      </div>

      <div className="mb-4 text-lg">
        <input className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"     placeholder="Email address"
              defaultValue={register.email}
              onChange={handleInputChange}
                  id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
               />
      </div>

      <div className="mb-4 text-lg">
        <input className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              defaultValue={register.password}
              onChange={handleInputChange}
               />
      </div>

      <div className="mt-8 flex justify-center text-lg text-black">
        <button     type="submit" className="rounded-3xl bg-red-900  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Sign Up</button>
      </div>
    </form>
   

  </div>
</div>
</div>
  );
}

export default Signup;
