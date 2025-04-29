import { useState } from "react"
import { registerUser } from "../api/apiHelper"
import { useNavigate } from "react-router"

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const register = async (e) => {
    e.preventDefault()
    const data = {
      username: username,
      email: email,
      password: password
    }
    try {
      const response = await registerUser(data)
      console.log(response)
      navigate("/login")
      // return response.data
    } catch (error) {
      console.error("Error registering user: ", error)
    }
  }

  return (
    <div className="w-80 rounded-2xl bg-teal-500">
      <form onSubmit={register} className="flex flex-col gap-2 p-8">
        <p className="text-center text-3xl text-gray-300 mb-4">Register</p>
        <input onChange={(e) => setUsername(e.target.value)} value={username} className="bg-black text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Username" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} className="bg-black text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} className="bg-black text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password" />
        <label className="flex cursor-pointer items-center justify-between p-1 text-white">
          Accept terms of use
          <div className="relative inline-block">
            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300" />
          </div>
        </label>
        <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
      </form>
    </div>
  )
}
export default Register