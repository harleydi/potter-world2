import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { loginUser } from "../api/apiHelper";

const Login = () => {
  const { user, setUser, setIsLoggedIn, setRefresh } = useOutletContext();
  const [userEmail, setUserEmail] = useState("")
  const [userPass, setUserPass] = useState("")

  const navigate = useNavigate()

  const userLogin = async (e) => {
    e.preventDefault()
    const data = { email: userEmail, password: userPass }
    try {
      const foundUser = await loginUser(data);
      console.log(foundUser)
      setUser(foundUser);
    //   setIsLoggedIn(true)
      localStorage.setItem("isLoggedIn", true)
      setRefresh(true)
      navigate("/")
    } catch (error) {
      console.error("Error logging in user: ", error);
      setUser(null);
    }
  };

  


  return (
    <div className="w-80 rounded-2xl bg-teal-500">
      <form onSubmit={userLogin} className="flex flex-col gap-2 p-8">
        <p className="text-center text-3xl text-gray-300 mb-4">Login</p>
        <input
          className="bg-black text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          value={userEmail}
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          className="bg-black text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
          value={userPass}
          placeholder="Password"
          onChange={(e) => setUserPass(e.target.value)}
        />
        <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
